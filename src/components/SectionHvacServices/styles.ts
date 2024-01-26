import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12rem 7rem;
  background: ${theme.colors.blue};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  strong,
  h2,
  h3,
  p {
    color: ${theme.colors.white};
  }

  h3 {
    font-size: ${theme.font_size.xl2};
  }

  width: ${theme.container_desktop};

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;

    .description {
      display: flex;
      flex-direction: column;

      gap: 1.6rem;
      flex: 1;
    }
    a {
      height: fit-content;
      margin-left: auto;
    }
  }

  .content-item {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc((130rem / 4) - 3rem), 1fr)
    );
    gap: 3rem;

    .item {
      .item-description {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }
    }
  }
`;
