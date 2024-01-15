import Image from "next/image";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// ? image
import SectionBannerHero from "@/assets/images/Header-photo-medium.jpg";
// ? components
import { ButtonDefault } from "../ButtonDefault";
// ? styles
import "swiper/swiper-bundle.css";
import * as Styles from "./styles";

export function Hero() {
  return (
    <>
      <Styles.Container>
        <Swiper
          modules={[A11y, Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
            // el: "swiper-pagination",
          }}
        >
          <SwiperSlide>
            <Styles.HeroContainer>
              <div className="content">
                <h2>
                  Your Coolest <br /> Choice for HVAC
                </h2>

                <p>
                  Where comfort meets cool business in Boston, MA and Charlotte,
                  NC. <br />
                  We re heating things up Sustainably with electric solutions!
                </p>
                <div className="button-group">
                  <ButtonDefault content="Our services" />
                  <ButtonDefault
                    content="Schedule Service"
                    hasStyleButtonType="outline"
                    includeIcon
                  />
                </div>
              </div>
              <div className="banner-image">
                <Image src={SectionBannerHero} alt="" />
              </div>
            </Styles.HeroContainer>
          </SwiperSlide>
          <SwiperSlide>
            <Styles.HeroContainer>
              <div className="content">
                <h2>
                  Your Coolest <br /> Choice for HVAC
                </h2>

                <p>
                  Where comfort meets cool business in Boston, MA and Charlotte,
                  NC. <br />
                  We re heating things up Sustainably with electric solutions!
                </p>
                <div className="button-group">
                  <ButtonDefault content="Our services" />
                  <ButtonDefault
                    content="Schedule Service"
                    hasStyleButtonType="outline"
                    includeIcon
                  />
                </div>
              </div>
              <div className="banner-image">
                <Image src={SectionBannerHero} alt="" />
              </div>
            </Styles.HeroContainer>
          </SwiperSlide>
          <SwiperSlide>
            <Styles.HeroContainer>
              <div className="content">
                <h2>
                  Your Coolest <br /> Choice for HVAC
                </h2>

                <p>
                  Where comfort meets cool business in Boston, MA and Charlotte,
                  NC. <br />
                  We re heating things up Sustainably with electric solutions!
                </p>
                <div className="button-group">
                  <ButtonDefault content="Our services" />
                  <ButtonDefault
                    content="Schedule Service"
                    hasStyleButtonType="outline"
                    includeIcon
                  />
                </div>
              </div>
              <div className="banner-image">
                <Image src={SectionBannerHero} alt="" />
              </div>
            </Styles.HeroContainer>
          </SwiperSlide>
          <SwiperSlide>
            <Styles.HeroContainer>
              <div className="content">
                <h2>
                  Your Coolest <br /> Choice for HVAC
                </h2>

                <p>
                  Where comfort meets cool business in Boston, MA and Charlotte,
                  NC. <br />
                  We re heating things up Sustainably with electric solutions!
                </p>
                <div className="button-group">
                  <ButtonDefault content="Our services" />
                  <ButtonDefault
                    content="Schedule Service"
                    hasStyleButtonType="outline"
                    includeIcon
                  />
                </div>
              </div>
              <div className="banner-image">
                <Image src={SectionBannerHero} alt="" />
              </div>
            </Styles.HeroContainer>
          </SwiperSlide>
        </Swiper>

        <Styles.CardContainer></Styles.CardContainer>
      </Styles.Container>
    </>
  );
}
