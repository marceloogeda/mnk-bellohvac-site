import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 747px;
  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    height: unset;
    padding: 8rem 0;
  }
`;

export const Content = styled.article`
  width: ${theme.container_desktop};
  display: flex;
  gap: 4.8rem;
  .article {
    width: min(626px, 100%);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    .banner-image {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    flex-direction: column;
  }
`;
