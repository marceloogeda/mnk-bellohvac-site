import Link from "next/link";
import styled, { css } from "styled-components";

const SameButtonCss = css`
  width: fit-content;
  transition: 0.2s;
  padding: 5px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GREEN_500};

  &.danger {
    background: ${({ theme }) => theme.COLORS.RED};
  }
  &.warning {
    background: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  &:hover {
    background: ${({ theme }) => theme.COLORS.GREEN_700};

    &.danger {
      background: ${({ theme }) => theme.COLORS.RED_DARK};
    }
    &.warning {
      background: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;

export const ButtonDefaultContainer = styled.button`
  ${SameButtonCss}
`;
export const ButtonLinkContainer = styled(Link)`
  ${SameButtonCss}
`;
