import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: white;
  display: block;
  margin: 1.3rem 0;
  font-size: 1rem;

  &:hover {
    transition: all 0.1s;
    font-weight: bold;
    color: #33aaf5;
  }
`;

// Header
export const HeaderContainer = styled.header`
  height: 4rem;
  /* box-shadow: 0 4px 4px rgb(0 0 0 /25%); */
`;

export const Head = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background-color: white;
  padding: 0 2rem;
  width: 100%;
  height: 4rem;
`;

export const Img = styled.img`
  width: 150px;
`;

export const ImgCon = styled.div`
  /* padding-left: 10px; */
`;

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
  background-color: transparent;
  user-select: none;
  background-color: black;
  pointer-events: none;
`;

export const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: flex-end;
  color: white;
  font-size: 1.8rem;
  padding: 16px 2rem;
 
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
  font-size: 1.8rem;
`;

export const MenuIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
`

export const SideMenuOverlay = styled.div`
height: 100vh;
position: fixed;
right: 0;
top: 0;
left: 0;
z-index: 9;
background: rgba(0,0,0,0.8);
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
gap: 5px;
padding-top: 20px;

`