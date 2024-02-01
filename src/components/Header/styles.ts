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

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    background: #fff;
    position: fixed;
  }
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
      color: ${theme.colors.text_title};
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

        &.mobile-button {
          display: none;
          > svg {
            margin: 0;
          }
        }
      }
    }
  }

  > button {
    margin-left: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    nav {
      display: none;

      &.active {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 7rem;
        position: fixed;
        height: 100vh;
        width: 100vw;
        left: 0;
        bottom: 0;
        top: 11rem;
        right: 0;
        background: ${({ theme }) => `${theme.colors.white}`};

        ul {
          flex-direction: column;
          li {
            a {
              color: ${({ theme }) => theme.colors.black};
              &:hover,
              &.active {
                border-bottom: 3px solid ${({ theme }) => theme.colors.black};
              }
            }
            button {
              &.mobile-button {
                display: flex;
              }
            }
          }
        }
      }
    }

    > button {
      display: none;
    }
  }
`;

export const HeaderLogoContent = styled.div`
  h1 {
    margin-top: 20px;
  }
`;

export const HamburgerButton = styled.div`
  position: relative;
  display: none;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 30px;
  height: 40px;
  gap: 0.6rem;

  transition: 0.3s;

  span {
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colors.black};
    border-radius: 3px;
    transition: 0.3s;
  }

  &.active {
    transition: 0.3s;
    span {
      position: absolute;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        width: 0%;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    display: flex;
  }
`;
