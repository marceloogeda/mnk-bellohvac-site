import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 747px;
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
    .description {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
