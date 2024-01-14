import styled from "styled-components";

// ? types
export type ButtonPostType = {
  addBottom?: string;
  addLeft?: string;
};

export const Container = styled.button<ButtonPostType>`
  &.btn-back {
    display: flex;
    width: fit-content;
    align-items: center;
    transition: 0.2s;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 1.4rem;
    font-weight: 400;
    transform: translateX(0) !important;

    > span {
      transition: 0.2s;
      &:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1rem;
        border-radius: 50%;

        background: ${({ theme }) => theme.COLORS.GRAY_700};
        > svg {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }
      &:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        font-weight: 600;
      }
    }

    &:hover {
      > span {
        transition: 0.2s;
        &:nth-child(1) {
          background: ${({ theme }) => theme.COLORS.GREEN_500};
          > svg {
            color: ${({ theme }) => theme.COLORS.RED};
          }
        }
        &:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.GREEN_500};
          font-weight: 600;
        }
      }
    }
  }
`;
