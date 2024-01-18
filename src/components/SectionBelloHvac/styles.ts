import theme from "@/styles/theme";
import styled from "styled-components";

export const ContainerSectionBelloHvac = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 823px;
  padding: 151px 70px 57px 70px;
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
      width: 150% !important;
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
`;