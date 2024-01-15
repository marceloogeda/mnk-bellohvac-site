import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  .swiper-pagination-progressbar {
    position: absolute;
    width: 320px;
    height: 0.8rem;
    top: 550px;
    left: 50%;
    transform: translate(calc(-50% - 29.2vw), 0);
    border-radius: 100px;
    background: ${theme.colors.white};

    .swiper-pagination-progressbar-fill {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }
  }
`;

export const HeroContainer = styled.div`
  width: 100vw;
  height: 71rem;

  background: ${theme.colors.gray_100};
  overflow: hidden;
  position: relative;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1.6rem;
    width: ${theme.container_desktop};
    height: inherit;

    margin: 0 auto;
    z-index: 1;
    p {
      font-size: ${theme.font_size.md};
    }
    .button-group {
      margin-top: 2.6rem;
      display: flex;
      gap: 1.6rem;
    }
  }

  .banner-image {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: auto;
  }
`;

export const CardContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, 0%);
  z-index: 9999;
  left: 50%;
  height: 17.3rem;
  width: ${theme.container_desktop};
  background: ${theme.colors.white};
  box-shadow: ${theme.box_shadow};
  margin-top: calc(-17.3rem / 2);
`;
