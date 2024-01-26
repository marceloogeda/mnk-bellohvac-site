import theme from "@/styles/theme";
import Link from "next/link";
import styled, { css } from "styled-components";

const SameButtonCss = css`
  width: fit-content;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: 0.2s;
  padding: 1.5rem 1.8rem;
  border-radius: 0.8rem;
  background: ${theme.colors.blue};
  font-weight: 600;
  color: ${theme.colors.white};
  gap: 1.5rem;
  > svg {
    font-size: ${theme.font_size.md};
  }
  &.white {
    background: ${({ theme }) => theme.colors.white};
    color: ${theme.colors.text_blue};
  }
  &.outline {
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.black};
    padding: 1.3rem 1.6rem;
  }
  &.black {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
  }
  &.link-blue {
    background: transparent;
    padding: 1.5rem 0rem;
    gap: 1rem;
    color: ${theme.colors.text_blue};
    > svg {
      color: ${theme.colors.text_blue};
    }
  }
  &.link-white {
    background: transparent;
    padding: 1.5rem 0rem;
    gap: 1rem;
    color: ${theme.colors.white};
    > svg {
      color: ${theme.colors.white};
    }
  }
  &:hover {
    background: ${theme.colors.blue_effect};

    &.white {
      background: ${({ theme }) => theme.colors.black};
      color: ${theme.colors.white};
    }
    &.outline {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
    }
    &.black {
      background: ${theme.colors.blue};
      color: ${theme.colors.white};
    }

    &.link-blue {
      background: transparent;
      gap: 1.5rem;
      color: ${theme.colors.text_blue_effect};
      > svg {
        color: ${theme.colors.text_blue_effect};
      }
    }
  }
`;

export const ButtonDefaultContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${SameButtonCss}
`;
export const ButtonLinkContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${SameButtonCss}
`;
