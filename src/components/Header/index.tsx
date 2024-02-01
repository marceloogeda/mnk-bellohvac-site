import { useState } from "react";

// ? images
import Image from "next/image";

import SectionBanner from "@/assets/images/logo-bellohvac.png";

import { FaChevronRight } from "react-icons/fa6";

// ? components
import ActiveLink from "../ActiveLink";
import { ButtonDefault } from "../ButtonDefault";
// ? styles
import * as Styles from "./styles";

export function Header() {
  const [activeButtonHamburguer, setActiveButtonHamburguer] =
    useState<boolean>(false);
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.HeaderLogoContent>
          <h1>
            <ActiveLink href="/">
              <Image src={SectionBanner} alt="" height={56.17} width={144} />
            </ActiveLink>
          </h1>
        </Styles.HeaderLogoContent>
        <nav className={activeButtonHamburguer ? "active" : ""}>
          <ul>
            <li>
              <ActiveLink href={""}>
                <>Heating</>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href={""}>
                <>Cooling</>
              </ActiveLink>
            </li>
            <li>
              <button>
                For Residences <FaChevronRight />
              </button>
            </li>
            <li>
              <button>
                For Companies <FaChevronRight />
              </button>
            </li>

            <li>
              <ActiveLink href={""}>
                <>About</>
              </ActiveLink>
            </li>
            <li>
              <ButtonDefault
                className="mobile-button"
                content="Schedule Service"
                includeIcon
              />
            </li>
          </ul>
        </nav>
        <ButtonDefault content="Schedule Service" includeIcon />

        <Styles.HamburgerButton
          onClick={() => {
            setActiveButtonHamburguer(!activeButtonHamburguer);
            // setActiveButtonLink(null);
            // setActiveButtonSearch(false);
          }}
          className={activeButtonHamburguer ? "active" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </Styles.HamburgerButton>
      </Styles.Content>
    </Styles.Container>
  );
}
