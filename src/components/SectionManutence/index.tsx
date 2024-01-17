import Image from "next/image";

// ? image
import SectionBannerHero from "@/assets/images/fixing-air.jpg";

// ? components
import { ButtonDefault } from "../ButtonDefault";

// ? styles
import * as Styles from "./styles";

export function SectionManutence() {
  return (
    <Styles.Container>
      <div className="banner-image">
        <Image src={SectionBannerHero} alt="" width={703} height={365} />
      </div>
      <div className="content">
        <h2>Is time to manutence your air?</h2>

        <h4>
          We can help you, schedule a day, hour and our team will fix for you.
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
