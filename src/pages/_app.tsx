import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

// ? themes
import theme from "@/styles/theme";

// ? styles
import { GlobalStyle } from "@/styles/global";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyles: any = GlobalStyle;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
