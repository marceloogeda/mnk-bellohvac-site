import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  .swiper-pagination-progressbar {
    position: absolute;
    width: 320px;
    height: 0.8rem;
    top: 550px;
    left: 50%;
    transform: translate(calc(-50% - 25.5vw), 0);
    border-radius: 100px;
    background: ${theme.colors.white};

    .swiper-pagination-progressbar-fill {
      background: ${theme.colors.blue};
      border-radius: 100px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.xl}) {
    .swiper-pagination-progressbar {
      left: 0;
      transform: translate(60px, 0);
    }
  }
  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    .swiper-pagination-progressbar {
      left: 50%;
      transform: translate(-50%, 0);
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

    h2,
    p {
      color: ${theme.colors.text_title};
    }
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

  align-items: flex-start;
  justify-content: space-between;
  transform: translate(-49.58%, 0%);
  z-index: 9999;
  left: 50%;
  flex-wrap: nowrap;
  overflow: auto;
  width: ${theme.container_desktop};
  min-height: 17.3rem;
  gap: 8rem;
  margin-top: calc(-17.3rem / 2);
  padding: 4rem;

  background: ${theme.colors.white};
  box-shadow: ${theme.box_shadow};
  .card-item {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    h4 {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: ${theme.font_size.xl};
    }
  }
`;
