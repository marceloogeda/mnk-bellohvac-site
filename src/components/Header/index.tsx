import Image from "next/image";

import SectionBanner from "@/assets/images/logo-bellohvac.png";

import { FaChevronRight } from "react-icons/fa6";

// ? components
import ActiveLink from "../ActiveLink";
import { ButtonDefault } from "../ButtonDefault";
// ? styles
import * as Styles from "./styles";

export function Header() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.HeaderLogoContent>
          <h1>
            <ActiveLink href="/">
              <Image src={SectionBanner} alt="" height={55} width={146} />
            </ActiveLink>
          </h1>
        </Styles.HeaderLogoContent>
        <nav>
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
          </ul>
        </nav>
        <ButtonDefault content="Schedule Service" includeIcon />
      </Styles.Content>
    </Styles.Container>
  );
}
