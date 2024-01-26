import Image from "next/image";
import { ReactNode } from "react";

// ? image
import Image01 from "@/assets/images/svgs/choose-service.png";
import Image04 from "@/assets/images/svgs/installation.png";
import Image02 from "@/assets/images/svgs/schedule.png";
import Image03 from "@/assets/images/svgs/technical-visit.png";

// ? styles
import { ButtonDefault } from "../ButtonDefault";
import * as Styles from "./styles";

interface SectionHvacServicesProps {
  children: ReactNode;
}

export function SectionHvacServices() {
  return (
    <Styles.Container>
      <Styles.Content>
        <header>
          <div className="description">
            <strong>Effortless Comfort Journey </strong>
            <h2>With Bello HVAC Services</h2>
          </div>
          <ButtonDefault
            isLink
            content="Schedule Service"
            hasStyleButtonType="black"
            includeIcon
          />
        </header>

        <div className="content-item">
          <div className="item">
            <Image src={Image01} width={295} height={386} alt="" />

            <div className="item-description">
              <h3> Choose Service </h3>
              <p>
                In the first step, you decide on the service that best meets
                your needs. Whether it's installation, repair, or maintenance,
                we offer personalized solutions that ensure your optimal
                comfort.
              </p>
            </div>
          </div>
          <div className="item">
            <Image src={Image02} width={295} height={386} alt="" />

            <div className="item-description">
              <h3> Schedule </h3>
              <p>
                After choosing the desired service, scheduling is simple and
                convenient. Our booking process is designed to fit your
                schedule, providing ease and flexibility to meet your needs.
              </p>
            </div>
          </div>
          <div className="item">
            <Image src={Image03} width={295} height={386} alt="" />

            <div className="item-description">
              <h3> Technical Visit </h3>
              <p>
                Our skilled professionals conduct a detailed technical visit,
                ensuring accurate and efficient solutions for the optimal
                performance of your HVAC system.
              </p>
            </div>
          </div>
          <div className="item">
            <Image src={Image04} width={295} height={386} alt="" />

            <div className="item-description">
              <h3> Installation </h3>
              <p>
                Experience a hassle-free installation by our skilled team. We
                prioritize efficiency to maximize your comfort, leaving you to
                enjoy your ideal environment. Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}
