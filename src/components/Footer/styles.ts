import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6rem 8rem;
  background: ${theme.colors.blue_dark};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
  width: ${theme.container_desktop};
  .footer-container {
    display: flex;
    flex-direction: column;
    width: inherit;
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      strong,
      a {
        color: ${theme.colors.white};
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        .contact-infos {
          display: flex;
          gap: 5rem;
          .contact-item {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            \ a {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
          }
        }
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 34px;
        background: ${theme.colors.white};

        width: min(52.6rem, 100%);
        border-radius: 8px;
        input,
        textarea {
          border: 1px solid ${theme.colors.gray_200};
          padding: 1.6rem;
          width: 100%;
          border-radius: 8px;
        }
        textarea {
          max-width: 100%;
          height: 100px;
          resize: vertical;
        }
        label,
        span {
          font-weight: 600;
        }

        span {
          color: ${theme.colors.red};
          font-size: ${theme.font_size.xs};
        }

        button {
          width: 100%;
        }

        h3 {
          color: ${theme.colors.green_500};
          text-align: center;
          min-height: 2rem;
        }
        .form-content {
          display: flex;
          gap: 1.8rem;
          > div {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }
        }

        .form-content-messsage {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
      }
    }
  }

  footer {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: ${theme.font_size.xs};
      color: ${theme.colors.white};
    }

    .logo-agency {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.rules.md}) {
    .footer-container {
      .footer-content {
        flex-direction: column-reverse;
        gap: 8rem;
      }
    }
  }
`;
