import React, { useState } from 'react';
import {
  NavContainer,
  TopHeader,
  DesktopContent,
  SideMenuContainer,
  SideMenuHeader,
  SideMenuWrapper,
  SideMenuOverlay,
  Img,
  StyledLink,
  StyledA,
  Head,
  ImgCon,
  OpenMenu,
  MenuContent,
  CloseMenu,
  FindUsContainer,
  FindUsLinkCon,
  StyledSocialLink,
  SocialLinkCon,
  Container,
} from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../Image/Header/New_Logo_red.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faDiscord,
  faTelegram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  const Menu = () => {
    return (
      <div>
        <StyledLink onClick={closeMenu} to="/">HOME</StyledLink>
        <StyledLink onClick={closeMenu} to="/about">ABOUT</StyledLink>
        <StyledLink onClick={closeMenu} to="/event">EVENTS</StyledLink>
        <StyledA onClick={closeMenu}
          href="https://www.klevernft.com/marketplace/FWZG-2Y4P?page=1"
          target="_blank"
          rel="noopener noreferrer">MARKET</StyledA>
      </div>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  //  To Toggle Menu and Close it
  const menuOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Head>
    
          <TopHeader>
            <NavContainer>
            {/* Logo */}
            <ImgCon>
              <Link to="/">
                <span>
                  <Img src={Logo} Img />
                </span>
              </Link>
            </ImgCon>
            {/* Nav Links */}
            <DesktopContent>
              <Menu />
            </DesktopContent>
            {/* Menubar */}
            <OpenMenu onClick={menuOpen}>
              <FontAwesomeIcon icon={faBars} />
            </OpenMenu>
            </NavContainer>
          </TopHeader>
      
          

          {/* <div className="sticky_Icon"></div> */}

          <div>
            {isOpen && (
              <SideMenuContainer>
                <SideMenuOverlay />
                <SideMenuHeader>
                  <CloseMenu onClick={closeMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                  </CloseMenu>
                </SideMenuHeader>
                <SideMenuWrapper>
                  <MenuContent>
                    <Menu />
                  </MenuContent>
                  <FindUsContainer>
                    <div>Find us on</div>
                    <FindUsLinkCon>
                      <SocialLinkCon
                        as="a"
                        href="https://twitter.com/FlmnWheelzAlpha"
                        target="_blank"
          rel="noopener noreferrer"
                      >
                        <StyledSocialLink icon={faTwitter} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="https://discord.com/invite/v5R6Cf5NGW" target="_blank"
          rel="noopener noreferrer">
                        <StyledSocialLink icon={faDiscord} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="https://t.me/Hypatiatokenofficial"
                      target="_blank"
                      rel="noopener noreferrer">
                        <StyledSocialLink icon={faTelegram} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="#"
                      target="_blank"
                      rel="noopener noreferrer">
                        <StyledSocialLink icon={faYoutube} />
                      </SocialLinkCon>
                    </FindUsLinkCon>
                  </FindUsContainer>
                </SideMenuWrapper>
              </SideMenuContainer>
            )}
          </div>
          </Head>
    </>
  );
}

export default Header;
