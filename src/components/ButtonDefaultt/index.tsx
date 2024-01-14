import { CSSProperties, ReactNode } from "react";

import * as Styles from "./styles";

interface ButtonDefaulttProps {
  children: ReactNode;

  handleClick?: () => void;
  isLink?: boolean;
  url?: string;
  size?: "xs" | "s" | "m" | "l";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  style?: CSSProperties;
}

export function ButtonDefaultt({
  handleClick,
  isLink = true,
  url = "/",
  size = "m",
  disabled = false,
  type = "button",
  target = "",
  style = {},
  children,
}: ButtonDefaulttProps) {
  return (
    <>
      {isLink && (
        <Styles.StyleLink
          style={style}
          className={`${size} ${disabled ? "disabled" : ""} `}
          href={url}
          target={target}
          onClick={handleClick}
        >
          {children}
        </Styles.StyleLink>
      )}
      {!isLink && (
        <Styles.Button
          type={type}
          disabled={disabled}
          className={size}
          onClick={handleClick}
        >
          {children}
        </Styles.Button>
      )}
    </>
  );
}
