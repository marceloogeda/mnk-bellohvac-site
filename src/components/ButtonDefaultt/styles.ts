import Link from "next/link";
import styled, { css } from "styled-components";

const btnStyles = css`
  display: flex;
  transition: 0.3s;
  padding: 1.6rem 3rem;
  font-size: 1.8rem;
  border-radius: 10px;
  margin-top: 4rem;
  font-weight: 500;
  color: ${(props) => props.theme.COLORS.GRAY_300} !important;
  text-decoration: none;
  background: ${(props) => props.theme.COLORS.GRAY_300};
  width: fit-content;
  &:hover {
    color: ${(props) => props.theme.COLORS.GRAY_300};
    background: ${(props) => props.theme.COLORS.RED};
  }
  &.xs {
    padding: 0.6rem 1.7rem;
    font-size: 1.2rem;
    border-radius: 5px;
  }
  &.s {
    padding: 0.9rem 2.7rem;
    font-size: 1.4rem;
    border-radius: 8px;
  }
  &.l {
    padding: 1.9rem 5rem;
    font-size: 2.8rem;
    border-radius: 12px;
  }
  .outline {
    border: 1px solid ${(props) => props.theme.COLORS.GRAY_300};
    background-color: 1px solid ${(props) => props.theme.COLORS.RED};
  }
  &:disabled,
  &.disabled,
  &.disabled:hover {
    background-color: ${(props) => props.theme.COLORS.RED};
    color: ${(props) => props.theme.COLORS.GRAY_300};
    cursor: no-drop;
  }
`;

export const Button = styled.button`
  ${btnStyles}
`;
export const StyleLink = styled(Link)`
  ${btnStyles}
`;
