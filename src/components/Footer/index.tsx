import { ReactNode } from "react";

// ? styles
import * as Styles from "./styles";

interface FooterProps {
  children: ReactNode;
}

export function Footer() {
  return (
    <Styles.Container>
      <h1>Footer</h1>
    </Styles.Container>
  );
}
