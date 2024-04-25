import LoginPage from "@/pages/login";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

describe("login page", () => {
  it("login page rendering", () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
