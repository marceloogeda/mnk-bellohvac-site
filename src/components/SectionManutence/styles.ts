import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  background: ${theme.colors.blue};
  width: ${theme.container_desktop};
  margin: 0 auto;
  border-radius: 2rem;
  height: 365px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  gap: 10rem;

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    h4 {
      color: ${theme.colors.white};
    }
    h2 {
      font-weight: 700;
    }
    a {
      margin-top: 3rem;
    }
  }
`;
