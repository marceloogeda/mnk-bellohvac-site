import styled from "styled-components";

export const ButtonBackToTopContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  position: fixed;
  right: 40px;
  bottom: 40px;

  width: 40px;
  height: 40px;
  visibility: hidden;
  background: black;
  opacity: 0;
  border: none;
  border-radius: 8px;
  span {
    > svg {
      font-size: 30px;
      font-weight: 900;
      color: white;
    }
  }
  transition: all 0.2s;
  &.show-button {
    visibility: visible;
    transition: 0.2s;
    opacity: 1;
  }
`;
