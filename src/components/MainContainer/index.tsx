import { ReactNode } from "react";

import Head from "next/head";

// ? components
import { ButtonBackToTop } from "../ButtonBackToTop";

// ? styles
import * as Styles from "./styles";

// ? types
type MainConteinerProps = {
  metaTitle?: string;
  headerPageTitle: string;
  headerPageDescription?: string;
  children: ReactNode;
  keywords?: string | null;
  shareImage?: string;
  googleIndex?: boolean;
};

export function MainContainer({
  children,
  headerPageTitle,
  headerPageDescription,
  googleIndex = true,
  shareImage,
  keywords = "",
  metaTitle,
}: MainConteinerProps) {
  return (
    <>
      <Head>
        <title>{headerPageTitle} | Bellohvac </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords || ""} />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        {/* <meta property="og:url" content={window.location.href} key="og:url" /> */}
        <meta property="og:title" content={metaTitle} key="og:title" />
        <meta
          property="og:description"
          content={headerPageDescription || "O Portal do Seguro"}
          key="og:description"
        />
        <meta property="og:image" content={shareImage} key="og:image" />
        {/* <link rel="canonical" href={window.location.href} /> */}

        {!googleIndex && (
          <>
            <meta name="robots" content="noindex"></meta>
            <meta name="googlebot" content="noindex"></meta>
          </>
        )}
      </Head>
      <Styles.Container>
        {/* <ButtonBack /> */}
        <Styles.Content>{children}</Styles.Content>
      </Styles.Container>
      <ButtonBackToTop />
    </>
  );
}
