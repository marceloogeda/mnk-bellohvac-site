import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  height: 11rem;
  width: 100vw;
  top: 0;
  left: 0;

  position: absolute;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

export const Content = styled.div`
  display: flex;
  height: inherit;
  width: ${theme.container_desktop};
  gap: 8rem;
  align-items: center;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3.5rem;
      li,
      button {
        font-size: ${theme.font_size.sm};
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        > svg {
          font-size: ${theme.font_size.xs};
          margin: 0.25rem 0 0 1rem;
        }
      }
    }
  }

  > button {
    margin-left: auto;
  }
`;

export const HeaderLogoContent = styled.div``;
