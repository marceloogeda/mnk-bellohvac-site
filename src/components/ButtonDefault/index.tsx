import { LuCalendar } from "react-icons/lu";

// ? styles
import * as Styles from "./styles";

interface ButtonDefaultProps {
  hasStyleButtonType?: "white" | "outline" | "black";
  includeIcon?: boolean;
  isLink?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  url?: string;
  content: string;
  disabled?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
  title?: string;
}

export function ButtonDefault({
  onClick,
  includeIcon,
  hasStyleButtonType,
  isLink,
  target,
  disabled,
  url,
  type,
  title,
  content,
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
          {includeIcon && <LuCalendar />} {content}
        </Styles.ButtonLinkContainer>
      )}

      {!isLink && (
        <Styles.ButtonDefaultContainer
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={hasStyleButtonType}
        >
          {includeIcon && <LuCalendar />} {content}
        </Styles.ButtonDefaultContainer>
      )}
    </>
  );
}
