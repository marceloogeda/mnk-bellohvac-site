/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

// ? image
import BannerKnowMore02 from "@/assets/images/companie-right.jpg";
import BannerKnowMore01 from "@/assets/images/residence-left.jpg";

// ? styles
import * as Styles from "./styles";

export function SectionKnowMore() {
  return (
    <Styles.Container>
      <Styles.Content>
        <Link href={""} className="item">
          <Image
            src={BannerKnowMore01}
            alt=""
            width={626}
            height={734}
            className="item-banner"
          />
          <div className="description">
            <h2>For Residences</h2>
            <p>
              At Bello, we bring a touch of comfort to your home. Our
              specialized residential services focus on creating refreshing and
              cozy environments. From precise installations to swift repairs and
              ongoing maintenance of cooling and heating systems, our skilled
              technicians are dedicated to ensuring your home remains a haven of
              comfort throughout the seasons.
            </p>
          </div>
          <div className="button-content">
            <strong>KNOW MORE</strong>
            <FaArrowRight />
          </div>
        </Link>
        <Link href={""} className="item">
          <Image
            src={BannerKnowMore02}
            alt=""
            width={626}
            height={734}
            className="item-banner"
          />
          <div className="description">
            <h2>For Companies</h2>
            <p>
              Bello understands the importance of a comfortable and productive
              workspace. Our tailored commercial HVAC services are designed to
              meet the unique needs of businesses. From efficient installations
              to prompt repairs and scheduled maintenance, our expert team
              ensures that your company's heating and cooling systems operate
              seamlessly. Trust Bello for a climate that enhances both the
              comfort and productivity of your business environment.
            </p>
          </div>
          <div className="button-content">
            <strong>KNOW MORE</strong>
            <FaArrowRight />
          </div>
        </Link>
      </Styles.Content>
    </Styles.Container>
  );
}
