import { useEffect, useState } from "react";
import useWindowScroll from "react-use/lib/useWindowScroll";

// ? icons
import * as IconFi from "react-icons/fi";

// ? styles
import * as Styles from "./styles";

export function ButtonBackToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (pageYOffset > 300) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [pageYOffset]);

  const handleButtonBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Styles.ButtonBackToTopContent
        onClick={handleButtonBackToTop}
        className={!visible ? "show-button" : ""}
      >
        <span>
          <IconFi.FiChevronUp />
        </span>
      </Styles.ButtonBackToTopContent>
    </>
  );
}
