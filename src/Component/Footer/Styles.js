import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: black;
  color: white;
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const FooterContainer = styled.div`
  padding: 0px 20px;
  /* height: 50vh; */
 
`;

// Join the Community
export const JoinCommunity = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 30vh; */
  margin-top: 2rem ;
  padding-top: 50px 0px;
 

  @media screen and (max-width: 756px){
  flex-flow: column;
  justify-content: center;
  align-items: center;

  }
`;

export const JoinUsHeading = styled.h1`
  color: white;
  font-size: 4rem;
  text-align: left;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const JoinUsText = styled.p`
  text-align: left;
  width: 500px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 20px;
    font-size: 0.9rem;
  }
`;

export const Social = styled.span`
  color: white;
`;

export const Row = styled.div`
display: flex;
gap: 50px;

@media screen and (max-width: 756px) {
 justify-content: flex-start;
 align-items: center;
 padding-top: 20px;
 padding-bottom: 40px;
}
`

export const FooterNavbar = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  /* height: 45vh; */


  @media screen  and (max-width: 756px){
     flex-flow: column; 
     
  }
 
`;

export const FooterLogo = styled.img`
width: 200px;
margin-left: -10px;
`;


export const ContactHeading = styled.h5`
color: white;
font-size: 90%;
padding-bottom: 10px;
`
export const ContactText = styled.p`
font-size: 80%;
`


export const Text = styled.p`
color: white;
display: block;
padding: 10px 0px;
font-size: 0.9rem;
`
export const LogoText = styled.p`
color: white;
font-size: 0.6rem;
font-style: italic;
margin-top: -10px;
`

// Under
export const FooterUnder = styled.div`
   max-width: 1300px;
   width: 100%;
   margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;

 
 

  @media screen and (max-width: 765px) {
    display: flex;
    flex-flow: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

  }
`;

export const Hr = styled.div`
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Copyright = styled.div`
  color: grey;
  font-size: 80%;
`;

export const Allrightreserved = styled.div`
  font-size: 80%;
  color: lightgrey;
`;

export const SocialLink = styled.span`
  color: lightgrey;
  font-size: 90%;
  padding-left: 10px;
`;
