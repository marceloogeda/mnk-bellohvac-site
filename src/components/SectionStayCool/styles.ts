import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
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
