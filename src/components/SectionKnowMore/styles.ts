import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  height: 874px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    height: unset;
    padding: 8rem 0;
  }
`;

export const Content = styled.div`
  display: flex;

  gap: 4rem;
  margin: 0 auto;
  width: ${theme.container_desktop};

  .item {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-banner,
    .description,
    .button-content {
      transition: ${theme.transition};
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      position: absolute;
      padding: 0 4rem;
      top: 50%;
      width: min(626px, 100%);
      h2,
      p {
        z-index: 10;
        color: ${theme.colors.white};
      }
    }
    .button-content {
      display: flex;
      align-items: center;
      position: absolute;
      height: 100px;
      width: min(626px, 100%);
      bottom: 0;
      gap: 0.8rem;
      padding: 0 4rem;
      background: ${theme.colors.blue};

      strong {
        font-size: ${theme.font_size.sm};
        color: ${theme.colors.white};
      }
      > svg {
        color: ${theme.colors.white};
      }
    }

    &:hover {
      .item-banner {
        transform: scale(1.05);
      }
      .button-content {
        gap: 0.8rem;
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    flex-direction: column;
    height: unset;

    .item {
      .description {
        top: 30%;
      }
      &:hover {
        .button-content {
          gap: 1.5rem;
        }
      }
    }
  }
`;
