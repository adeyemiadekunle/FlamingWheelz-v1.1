import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Head,
  ImgCon,
  OpenMenu,
  MenuContent,
  CloseMenu,
  FindUsContainer,
  FindUsLinkCon,
  StyledSocialLink,
  SocialLinkCon,
  StyledA,
} from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../Image/Header/latest_logo_red.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faDiscord,
  faTelegram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //  To Toggle Menu and Close it
  const menuOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const Menu = () => {
    return(
      <nav>
        <StyledLink to="/" end onClick={closeMenu}>HOME</StyledLink>
        <StyledLink to="/about" onClick={closeMenu}>ABOUT</StyledLink>
        <StyledLink to="/event" onClick={closeMenu}>EVENT</StyledLink>
        <StyledA as='a' href='https://www.klevernft.com/marketplace/FWZG-2Y4P?page=1' target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Redirect to klevernft" onClick={closeMenu}>MARKET</StyledA>
      </nav>
    )
  }
  return (
    <>
      <Head>
        <TopHeader>
          <NavContainer>
            {/* Logo */}
            <ImgCon>
              <Link to="/" aria-label="to homepage">
                <Img src={Logo} alt="flamingwheelz logo" />
              </Link>
            </ImgCon>
            {/* Nav Links */}
            <DesktopContent>
              <Menu/>
            </DesktopContent>
            {/* Menubar */}

            <OpenMenu onClick={menuOpen}>
              <FontAwesomeIcon icon={faBars} />
            </OpenMenu>
          </NavContainer>
        </TopHeader>

        {/* <div className="sticky_Icon"></div> */}
        <AnimatePresence>
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
                  <Menu/>
                </MenuContent>
                <FindUsContainer>
                  <motion.div>Find us on</motion.div>
                  <FindUsLinkCon>
                    <SocialLinkCon
                      as="a"
                      href="https://twitter.com/FlmnWheelzAlpha"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Redirect to flamingwheelz twitter"
                    >
                      <StyledSocialLink icon={faTwitter} />
                    </SocialLinkCon>
                    <SocialLinkCon
                      as="a"
                      href="https://discord.com/invite/v5R6Cf5NGW"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Redirect to flamingwheelz discord"
                    >
                      <StyledSocialLink icon={faDiscord} />
                    </SocialLinkCon>
                    <SocialLinkCon
                      as="a"
                      href="https://t.me/Hypatiatokenofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Redirect to flamingwheelz telegram"
                    >
                      <StyledSocialLink icon={faTelegram} />
                    </SocialLinkCon>
                    <SocialLinkCon
                      as="a"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Redirect to flamingwheelz youtube"
                    >
                      <StyledSocialLink icon={faYoutube} />
                    </SocialLinkCon>
                  </FindUsLinkCon>
                </FindUsContainer>
              </SideMenuWrapper>
            </SideMenuContainer>
          )}
        </AnimatePresence>
      </Head>
    </>
  );
}

export default Header;
