import styled from "styled-components";

export const MainContainer = styled.main`
position: relative;
margin-top: 70px;


&::-webkit-scrollbar {
    display: block;
    width: 0.3em;
    z-index: 1;
  }
&::-webkit-scrollbar-track {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.3);
  }

&::-webkit-scrollbar-thumb {
   
    border-radius: 10px;
    background-color: white;
  } 
  



`