import Image from "next/image";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// ? image
import SectionBannerHero from "@/assets/images/Header-photo-medium.jpg";
import CheckBox from "@/assets/images/svgs/check-box.svg";
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
                <h1>
                  Your Coolest <br /> Choice for HVAC
                </h1>

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
                <Image
                  src={SectionBannerHero}
                  alt=""
                  width={571}
                  height={710}
                />
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
                <Image
                  src={SectionBannerHero}
                  alt=""
                  width={571}
                  height={710}
                />
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
                <Image
                  src={SectionBannerHero}
                  alt=""
                  width={571}
                  height={710}
                />
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
                <Image
                  src={SectionBannerHero}
                  alt=""
                  width={571}
                  height={710}
                />
              </div>
            </Styles.HeroContainer>
          </SwiperSlide>
        </Swiper>

        <Styles.CardContainer>
          <div className="card-item">
            <h4>
              {" "}
              <Image
                src={CheckBox}
                width={25}
                height={25}
                alt=""
              /> Support{" "}
            </h4>
            <p>Our support, your comfort. Fast and reliable attendance.</p>
          </div>
          <div className="card-item">
            <h4>
              {" "}
              <Image src={CheckBox} width={25} height={25} alt="" />{" "}
              Profissionals{" "}
            </h4>
            <p>
              Experienced Professionals, Expert Solutions. Trust our seasoned
              team.
            </p>
          </div>
          <div className="card-item">
            <h4>
              {" "}
              <Image src={CheckBox} width={25} height={25} alt="" /> Our Reach{" "}
            </h4>
            <p>
              Proudly serving Boston, MA, and Charlotte, NC. Just a call away.
            </p>
          </div>
          <div className="card-item">
            <h4>
              {" "}
              <Image src={CheckBox} width={25} height={25} alt="" /> Total
              Coverage{" "}
            </h4>
            <p>
              Any home. Any commercial building. Elevating comfort everywhere.
            </p>
          </div>
        </Styles.CardContainer>
      </Styles.Container>
    </>
  );
}
