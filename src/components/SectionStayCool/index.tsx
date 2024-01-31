import Image from "next/image";

import SectionBanner from "@/assets/images/gallery.png";

// ? styles
import * as Styles from "./styles";

export function SectionStayCool() {
  return (
    <Styles.Container>
      <Styles.Content>
        <div className="description">
          <h2>Stay cool with expert help.</h2>
          <p>
            Experience unmatched comfort and efficiency with our expert HVAC
            solutions. Whether it's your home or commercial space, we're here to
            keep things cool and worry-free. Discover a new standard of
            reliability and excellence in every service we provide.
          </p>
        </div>
      </Styles.Content>
      <Image src={SectionBanner} alt="" height={634} width={1980} />
    </Styles.Container>
  );
}
