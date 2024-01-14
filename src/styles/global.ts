import { createGlobalStyle, css } from "styled-components";

// ? types

const IconsCss = css`
  font:
    400 1.4rem Inter,
    sans-serif;
  border: none;
  outline: none;
`;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

:focus{
    outline:0;
}

body{
    
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
    overflow-x: hidden;
}

html {
    font-size: 62.5%  ;
    scroll-behavior: smooth;
    overflow-x:hidden ;
}





body,
input,
textarea,
select{
    ${IconsCss}
}

h2 {
    font-size: 3.2rem;
    font-weight: bold;
}

h4.article-title{
    font-size: 1.4rem;
}

button{
    cursor: pointer;
    ${IconsCss}
    background: unset ;
    color: unset  ;
    display: flex;
    align-items: center;
    &:hover {
        transition: 0.2s;
        
    }
}



svg{
    font-size:inherit ;
}

ul{
    list-style:none;
    padding:0;
}



a{
    color: inherit;
    text-decoration: none ;
}


.container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;

  }


::-webkit-scrollbar {
    width:10px;
    height: 10px;
}


::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray_100};
}


::-webkit-scrollbar-thumb {
    
    background: ${({ theme }) => theme.colors.gray_400};
    border-radius: 5px;
}


                 
                    
`;
