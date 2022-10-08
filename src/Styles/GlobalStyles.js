import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #f3f3f3;
      
  }

  body, input, textarea, button {
    font: 500 1rem Montserrat, sans-serif;
   
  }

  input {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }


  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  a, u {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
    
  
  ::-webkit-scrollbar {
    display: none;
    width: 0.3em;
    z-index: 1;
  }

  
  /* 
  ::-webkit-scrollbar-track {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
   
    border-radius: 10px;
    background-color: white;
  }  */
  
`;

