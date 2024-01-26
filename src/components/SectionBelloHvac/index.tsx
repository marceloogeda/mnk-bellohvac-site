import Image from "next/image";

// ? image
import SectionBannerHero from "@/assets/images/photo-1.jpg";

// ? styles
import { ButtonDefault } from "../ButtonDefault";
import * as Styles from "./styles";

export function SectionBelloHvac() {
  return (
    <Styles.ContainerSectionBelloHvac>
      <Styles.Content>
        <div className="banner-image">
          <Image src={SectionBannerHero} alt="" width={640} height={615} />
        </div>
        <div className="description">
          <strong>BELLO HVAC</strong>
          <h2>
            Elevating Comfort, Sustaining <br /> Excellence
          </h2>
          <p>
            At Bello, our commitment is simple: to provide you with reliable,
            efficient, and tailored HVAC services that prioritize your comfort
            and satisfaction. Our team of skilled professionals is dedicated to
            delivering top-tier installations, repairs, and maintenance,
            ensuring your systems operate at peak performance year-round.
          </p>
          <p>
            We also place a strong emphasis on sustainability and environmental
            care, reflecting our commitment to a greener future. Your comfort is
            our priority, and we take pride in delivering exceptional service
            that exceeds your expectations.
          </p>

          <div className="button-container">
            <ButtonDefault content="KNOW MORE" isLink url="" />
            <ButtonDefault
              content="TESTEMONIALS"
              hasStyleButtonType="outline"
              isLink
              url=""
            />
          </div>
        </div>
      </Styles.Content>
    </Styles.ContainerSectionBelloHvac>
  );
}
