import Image from "next/image";

// ? image
import SectionBannerHero from "@/assets/images/fixing-air.png";

// ? components
import { ButtonDefault } from "../ButtonDefault";

// ? styles
import * as Styles from "./styles";

export function SectionManutence() {
  return (
    <Styles.Container>
      <div className="banner-image">
        <Image src={SectionBannerHero} alt="" width={375} height={274} />
      </div>
      <div className="content">
        <h2>Schedule a Service</h2>

        <h4>
          We can help you, schedule a day, hour and our team <br /> will fix for
          you.
        </h4>
        <ButtonDefault
          content="Schedule a manutence"
          hasStyleButtonType="white"
          includeIcon
          isLink
          url=""
        />
      </div>
    </Styles.Container>
  );
}
