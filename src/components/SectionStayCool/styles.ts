import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    gap: 4rem;
    img {
      width: 100vw;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const Content = styled.div`
  width: ${theme.container_desktop};
  display: flex;
  .description {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`;
