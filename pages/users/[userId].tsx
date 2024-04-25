import MainContainer from "@/components/MainContainer";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface IPageProps {
  profile?: string;
  GOOGLE_ANALYTICS_ID?: string;
  query: ParsedUrlQuery;
}

export default function UserEditPage({
  GOOGLE_ANALYTICS_ID,
  query,
  profile,
}: IPageProps) {
  return (
    <MainContainer>
      <h1>User Id: {query.userId}</h1>
      <h1>GOOGLE ID: {GOOGLE_ANALYTICS_ID}</h1>
      <h1>Profile: {profile}</h1>
    </MainContainer>
  );
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const props = {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    profile: process.env.profile,
    query,
  };
  return {
    props,
  };
};
