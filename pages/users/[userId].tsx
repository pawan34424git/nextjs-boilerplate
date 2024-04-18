import MainContainer from "@/components/MainContainer";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <MainContainer>User Id: {router.query.userId}</MainContainer>;
}
