import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Container = styled.section`
    color: white;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
   
  }
`;

export const StyledLink = styled(Link)`
  color: #0b0d17;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px;
  margin-left: 1.3rem;

  &:hover {
    transition: all 0.1s;
    color: #33aaf5;
  }

  @media screen and (max-width: 768px) {
    color: white;
    display: block;
    margin: 1.3rem 0;
  }
`;


export const StyledA = styled.a`
 color: #0b0d17;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px;
  margin-left: 1.3rem;

  &:hover {
    transition: all 0.1s;
    color: #33aaf5;
  }

  @media screen and (max-width: 768px) {
    color: white;
    display: block;
    margin: 1.3rem 0;
  }

`

// Header
export const Head = styled.header`
  height: 4rem;
  background: red;
  
`;



export const NavContainer = styled.div`
    color: white;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
   
  }
 
`;

export const TopHeader = styled.div`
  /* position: fixed; */
  /* left: 0; */
  /* top: 0; */
  /* z-index: 5; */
  background-color: white;
   width: 100%;
  height: 4rem;
  -webkit-box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
  box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
  
`;

export const Img = styled.img`
  width: 160px;

`;

export const ImgCon = styled.div`
  /* padding-left: 10px; */

  @media screen and (max-width: 480px) {
    margin-left: -10px;
  }
`;

export const DesktopContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 768px) {
  display: none;
}
`




// The Side Menu
export const SideMenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  transition: all 0.25s linear;
  height: 100%;
  max-width: 380px;
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 10;
  user-select: none;
  background-color: rgba(11,13,23);
  pointer-events: none;

  @media screen and (min-width:768px) {
    display: none;
  }
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: flex-end;
  color: white;
  font-size: 1.8rem;
  padding: 16px 2rem;

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
 
`;

export const SideMenuWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 2rem 3rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  pointer-events: all;
  color: white;

`;

export const MenuContent = styled.div`
  width: 100%;

`;

export const OpenMenu = styled.div`

display: none;
@media screen and (max-width: 768px) {
  display: contents;
  font-size: 2rem;
  color: #0b0d17;
}
  
`;

export const CloseMenu = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
font-size: 2rem;
`

export const SideMenuOverlay = styled.div`
height: 100vh;
position: fixed;
right: 0;
top: 0;
left: 0;
z-index: -1;
background: rgba(0,0,0,0.85);
`


export const FindUsContainer = styled.div`
padding: 40px;
display: flex;
flex-flow: column;
background: rgba(255,255,255,0.1);
border-radius: 8px;
font-size: 80%;
justify-content: center;
align-items: center;
`

export const FindUsLinkCon = styled.div`
display: flex;
padding-top: 20px;
gap: 20px;

`

export const StyledSocialLink = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
`

export const SocialLinkCon = styled.div`

`