import { ReactNode } from "react";

// ? styles
import * as Styles from "./styles";
import { colorType } from "./styles";

interface ButtonDefaultProps {
  children: ReactNode;
  hasStyleButtonType?: colorType;
  isLink?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  url?: string;
  disabled?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
  title?: string;
}

export function ButtonDefault({
  children,
  onClick,
  hasStyleButtonType,
  isLink,
  target,
  disabled,
  url,
  type,
  title,
}: ButtonDefaultProps) {
  return (
    <>
      {isLink && (
        <Styles.ButtonLinkContainer
          href={`${url}`}
          onClick={onClick}
          target={target}
          title={title}
          className={hasStyleButtonType}
        >
          {children}
        </Styles.ButtonLinkContainer>
      )}

      {!isLink && (
        <Styles.ButtonDefaultContainer
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={hasStyleButtonType}
        >
          {children}
        </Styles.ButtonDefaultContainer>
      )}
    </>
  );
}
