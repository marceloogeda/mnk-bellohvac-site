/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper/types";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// ? image
import BannerMap from "@/assets/images/map.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// ? styles
import { useCallback, useState } from "react";
import "swiper/swiper-bundle.css";
import * as Styles from "./styles";

export function SectionClientTestimonials() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [hiddenArrowLeft, setHiddenArrowLeft] = useState<boolean>(true);
  const [hiddenArrowRight, setHiddenArrowRight] = useState<boolean>(false);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
    managerArrows();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
    managerArrows();
  }, [swiperRef]);

  const managerArrows = () => {
    setHiddenArrowLeft(!swiperRef!.activeIndex);
    setHiddenArrowRight(swiperRef!.isEnd);
  };
  return (
    <Styles.Container>
      <Styles.Content>
        <div className="banner-image">
          <Image src={BannerMap} alt="" width={549} height={423} />
        </div>

        <div className="slider-content">
          <header>
            <h2>Client Testimonials</h2>
            <div className="buttons-container">
              <button
                hidden={hiddenArrowLeft}
                onClick={() => {
                  handlePrevious();
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                hidden={hiddenArrowRight}
                onClick={() => {
                  handleNext();
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          </header>

          <Swiper
            modules={[A11y, Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={50}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // pagination={{}}
            onSwiper={setSwiperRef}
          >
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  Working with Bellohvac has been an absolute game-changer for
                  our business. Their expertise in HVAC solutions has
                  significantly improved our office environment. The seamless
                  installation and top-notch service were beyond our
                  expectations. Bellohvac's professionalism and dedication to
                  quality truly set them apart in the industry. We highly
                  recommend their services to any company seeking reliable HVAC
                  solutions.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  I recently had the pleasure of working with Bellohvac for my
                  home's HVAC needs. From the initial consultation to the final
                  installation, their team was incredibly knowledgeable,
                  courteous, and efficient. They listened to my concerns and
                  provided a tailored solution that perfectly met my
                  requirements. Bellohvac's attention to detail and commitment
                  to customer satisfaction were impressive. I'm delighted with
                  the results and would wholeheartedly endorse their services to
                  anyone.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  Working with Bellohvac has been an absolute game-changer for
                  our business. Their expertise in HVAC solutions has
                  significantly improved our office environment. The seamless
                  installation and top-notch service were beyond our
                  expectations. Bellohvac's professionalism and dedication to
                  quality truly set them apart in the industry. We highly
                  recommend their services to any company seeking reliable HVAC
                  solutions.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  I recently had the pleasure of working with Bellohvac for my
                  home's HVAC needs. From the initial consultation to the final
                  installation, their team was incredibly knowledgeable,
                  courteous, and efficient. They listened to my concerns and
                  provided a tailored solution that perfectly met my
                  requirements. Bellohvac's attention to detail and commitment
                  to customer satisfaction were impressive. I'm delighted with
                  the results and would wholeheartedly endorse their services to
                  anyone.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  Working with Bellohvac has been an absolute game-changer for
                  our business. Their expertise in HVAC solutions has
                  significantly improved our office environment. The seamless
                  installation and top-notch service were beyond our
                  expectations. Bellohvac's professionalism and dedication to
                  quality truly set them apart in the industry. We highly
                  recommend their services to any company seeking reliable HVAC
                  solutions.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <p>
                  I recently had the pleasure of working with Bellohvac for my
                  home's HVAC needs. From the initial consultation to the final
                  installation, their team was incredibly knowledgeable,
                  courteous, and efficient. They listened to my concerns and
                  provided a tailored solution that perfectly met my
                  requirements. Bellohvac's attention to detail and commitment
                  to customer satisfaction were impressive. I'm delighted with
                  the results and would wholeheartedly endorse their services to
                  anyone.
                </p>

                <strong>TechGlow Solutions</strong>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}
