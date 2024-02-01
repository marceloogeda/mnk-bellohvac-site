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

  @media screen and (max-width: ${(props) => props.theme.rules.sm}) {
    flex-direction: column;
    height: unset;
    padding: 4rem 3rem;
    gap: 1rem;

    br {
      display: none;
    }

    .banner-image {
      width: 100%;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;
