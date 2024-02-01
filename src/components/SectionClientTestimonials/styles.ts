import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    padding: 0 0 8rem;
  }
`;

export const Content = styled.div`
  width: ${theme.container_desktop};
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc((130rem / 2) - 3rem), 1fr)
  );
  gap: 3rem;

  .slider-content {
    header {
      display: flex;
      margin-bottom: 4rem;

      .buttons-container {
        display: flex;
        margin-left: auto;
        justify-content: space-between;
        width: 10rem;
      }
    }

    .swiper {
      .swiper-slide {
        .slider-item {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    .banner-image {
      width: 90vw;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;
