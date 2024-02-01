import { FaArrowRight } from "react-icons/fa6";
import { LuCalendar } from "react-icons/lu";

// ? styles
import * as Styles from "./styles";

interface ButtonDefaultProps {
  hasStyleButtonType?: "white" | "outline" | "black" | "link-blue";
  includeIcon?: boolean;
  includeArrow?: boolean;
  className?: string;
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
  includeArrow,
  hasStyleButtonType,
  className,
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
          className={`${hasStyleButtonType} ${className}`}
        >
          {includeIcon && <LuCalendar />} {content}{" "}
          {includeArrow && <FaArrowRight />}
        </Styles.ButtonLinkContainer>
      )}

      {!isLink && (
        <Styles.ButtonDefaultContainer
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={`${hasStyleButtonType} ${className}`}
        >
          {includeIcon && <LuCalendar />} {content}{" "}
          {includeArrow && <FaArrowRight />}
        </Styles.ButtonDefaultContainer>
      )}
    </>
  );
}
