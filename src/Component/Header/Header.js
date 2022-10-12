import React, { useState } from 'react';
import {
  Head,
  TopHeader,
  DesktopContent,
  SideMenuContainer,
  SideMenuHeader,
  SideMenuWrapper,
  SideMenuOverlay,
  Img,
  StyledLink,
  HeaderContainer,
  ImgCon,
  OpenMenu,
  MenuContent,
  CloseMenu,
  FindUsContainer,
  FindUsLinkCon,
  StyledSocialLink,
  SocialLinkCon,
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
        <StyledLink  onClick={closeMenu} to="/" >
          <span></span>HOME
        </StyledLink>
        <StyledLink  onClick={closeMenu} to="/nft" >
          {' '}
          <span></span> NFT
        </StyledLink>
        <StyledLink   onClick={closeMenu} to="/about">
          {' '}
          <span></span>ABOUT
        </StyledLink>
        <StyledLink  onClick={closeMenu} to="/marketplace" >
          <span></span>MARKET
        </StyledLink>
        <StyledLink onClick={closeMenu}  to="/ecosystem" >
          <span></span>ECOSYSTEM
        </StyledLink>
      </div>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  //  To Toggle Menu and Close it
  const menuOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <HeaderContainer>
        <Head>
          <TopHeader>
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
                        href="https://twitter.com"
                      >
                        <StyledSocialLink icon={faTwitter} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="">
                        <StyledSocialLink icon={faDiscord} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="">
                        <StyledSocialLink icon={faTelegram} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href="">
                        <StyledSocialLink icon={faYoutube} />
                      </SocialLinkCon>
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
