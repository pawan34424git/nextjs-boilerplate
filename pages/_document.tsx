import getConfig from "next/config";
import { Head, Html, Main, NextScript } from "next/document";
const { publicRuntimeConfig } = getConfig();
export default function Document() {
  const { GOOGLE_ANALYTICS_ID } = publicRuntimeConfig;
  return (
    <Html>
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_ANALYTICS_ID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
