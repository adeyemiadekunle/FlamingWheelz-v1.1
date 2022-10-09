import React, { useState } from 'react';
import {
  Head,
  TopHeader,
  SideMenuContainer,
  SideMenuHeader,
  SideMenuWrapper,
  Img,
  StyledLink,
  HeaderContainer,
  SideMenuOverlay,
  ImgCon,
  OpenMenu,
  MenuContent,
  MenuIcon,
  FindUsContainer,
  FindUsLinkCon,
} from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../Image/Header/New_Logo_red.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = () => {
  return (
    <>
      <StyledLink to="/" end>
        <span></span>Home
      </StyledLink>
      <StyledLink to="/nft">
        {' '}
        <span></span> NFT
      </StyledLink>
      <StyledLink to="/about">
        {' '}
        <span></span>About
      </StyledLink>
      <StyledLink to="/marketplace">
        <span></span>Market
      </StyledLink>
      <StyledLink to="/ecosystem">
        <span></span>Ecosystem
      </StyledLink>
    </>
  );
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //  To Toggle Menu and Close it
  const menuOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <HeaderContainer>
        <Head>
          <TopHeader>
            <ImgCon>
              <Link to="/">
                <span>
                  <Img src={Logo} Img />
                </span>
              </Link>
            </ImgCon>
            <OpenMenu onClick={menuOpen}>
              <FaBars />
            </OpenMenu>
          </TopHeader>

          <div className="sticky_i=Icon"></div>

          {/* <div>{!isOpen && (<Side_Menu_Overlay></Side_Menu_Overlay>)}</div> */}
          <div>
            {isOpen && (
              <SideMenuContainer>
                <SideMenuHeader>
                  <MenuIcon onClick={closeMenu}>
                    {' '}
                    <FaTimes />
                  </MenuIcon>
                </SideMenuHeader>

                <SideMenuWrapper>
                  <MenuContent>
                    <Menu />
                  </MenuContent>
                  <FindUsContainer>
                    <div>Find us on</div>
                    <FindUsLinkCon>
                      <div>Youtube</div>
                      <div>Discord</div>
                      <div>Twitter</div>
                      <div>Telegram</div>
                    </FindUsLinkCon>
                  </FindUsContainer>
                </SideMenuWrapper>
              </SideMenuContainer>
            )}
          </div>
        </Head>
      </HeaderContainer>
    </>
  );
}

export default Header;
