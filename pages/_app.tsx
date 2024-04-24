import AppLayout from "@/components/AppLayout";
import GlobalContextWrapper from "@/context/GlobalConext";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../server/envConfig";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <GlobalContextWrapper currentRoute={router.pathname}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </GlobalContextWrapper>
  );
}
