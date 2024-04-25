import UserEditPage, { getServerSideProps } from "@/pages/users/[userId]";
import "@testing-library/jest-dom";
import { GetServerSidePropsContext } from "next";
import renderer from "react-test-renderer";

describe("User Edit", () => {
  it("user edit rendering", () => {
    const props = {
      GOOGLE_ANALYTICS_ID: "test",
      query: { userId: "test" },
      profile: "testing",
    };

    const tree = renderer.create(<UserEditPage {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("check serverSideProps", async () => {
    const req: any = {};
    const res: any = {};
    const nextParams: GetServerSidePropsContext = {
      req,
      res,
      resolvedUrl: "",
      query: {
        userId: "test",
      },
    };
    const { props } = await getServerSideProps(nextParams);
    expect(props.query.userId).toBe("test");
  });
});
