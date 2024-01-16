import Image from "next/image";

// ? image
import SectionBanner from "@/assets/images/top-building.jpg";

// ? components

// ? styles
import * as Styles from "./styles";

export function SectionSustainable() {
  return (
    <Styles.ContainerSectionSustainable>
      <Styles.Content>
        <div className="description">
          <strong>SUSTAINABLE</strong>
          <h2>We are committed to sustainability</h2>
          <p>
            At Bello, we prioritize the environment by exclusively utilizing
            eco-friendly HVAC equipment. Our dedication to sustainable solutions
            ensures energy-efficient systems that minimize environmental impact
            while maximizing comfort.
          </p>
          <p>
            Join us in our mission for a greener future, where every cooling and
            heating solution we provide aligns with our commitment to a
            sustainable tomorrow.
          </p>
        </div>
        <div className="banner-image">
          <Image src={SectionBanner} alt="" width={646} height={403} />
        </div>
      </Styles.Content>
    </Styles.ContainerSectionSustainable>
  );
}
