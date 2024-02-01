import theme from "@/styles/theme";
import styled from "styled-components";

export const ContainerSectionBelloHvac = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 151px 70px 57px 70px;
  @media screen and (max-width: ${(props) => props.theme.rules.lg}) {
    padding: 151px 0px 57px 0px;
  }
`;

export const Content = styled.div`
  width: ${theme.container_desktop};
  display: flex;
  gap: 8rem;
  .banner-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(640px, 90vw);
    height: auto;

    overflow: hidden;

    img {
      width: 102% !important;
      height: auto;
      object-fit: contain;
    }
  }

  .description {
    flex: 1;
    max-width: 57rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.8rem;
    strong {
      font-weight: 600;
      font-size: ${theme.font_size.md};
      color: ${theme.colors.text_blue};
    }

    .button-container {
      display: flex;
      gap: 1.5rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.lg}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .banner-image {
      width: 100%;
      height: 400px;
      align-items: end;
      margin-top: 100px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .description {
      max-width: unset;
      h2,
      p {
        br {
          display: none;
        }
      }
    }
  }
`;
