import type { AppProps } from "next/app";

import { FooterComponent } from "components/Footer";

import { GlobalStyle } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
