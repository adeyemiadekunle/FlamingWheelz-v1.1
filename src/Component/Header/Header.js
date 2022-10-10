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
              <FontAwesomeIcon icon={faBars} />
            </OpenMenu>
          </TopHeader>

          <div className="sticky_Icon"></div>

          <div>
            {isOpen && (
              <SideMenuContainer>
                <SideMenuHeader>
                  <CloseMenu onClick={closeMenu}>
                    {' '}
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
                      <SocialLinkCon as="a" href='https://twitter.com'>
                        <StyledSocialLink icon={faTwitter} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a"  href=''>
                        <StyledSocialLink icon={faDiscord} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a"   href=''>
                        <StyledSocialLink icon={faTelegram} />
                      </SocialLinkCon>
                      <SocialLinkCon as="a" href=''>
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
