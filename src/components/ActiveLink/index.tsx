import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  title?: string;
  children: ReactElement;
  activeClassName?: string;
  activeIdClassName?: string;
  abrirEmNovaAba?: boolean;
}

function ActiveLink({
  title,
  children,
  activeClassName,
  activeIdClassName,
  abrirEmNovaAba = false,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useRouter();

  const verifyActiveLink = (loopPath: string) => {
    if (loopPath === "/" && pathname !== "/") {
      return null;
    }

    if (pathname.indexOf(`${loopPath}`) === 0) {
      return activeClassName;
    }
    return null;
  };

  const className = verifyActiveLink(rest.href as string);

  return (
    <Link
      {...rest}
      className={`${className}`}
      title={title}
      target={abrirEmNovaAba ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
