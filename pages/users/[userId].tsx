import MainContainer from "@/components/MainContainer";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface IPageProps {
  enviroment: string;
  query: ParsedUrlQuery;
}

export default function Page({ enviroment, query }: IPageProps) {
  return (
    <MainContainer>
      User Id: {query.userId} - {enviroment}
    </MainContainer>
  );
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  console.log("SERVER-SIDE: called edit user - ", query.userId);
  return {
    props: {
      enviroment: "dev",
      query,
    },
  };
};
