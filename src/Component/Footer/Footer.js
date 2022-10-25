import {
  StyledFooter,
  JoinCommunity,
  JoinUsHeading,
  JoinUsText,
  FooterContainer,
  Social,
  StyledSocialLink,
  SocialLinkCon,
  FooterNavbar,
  FooterUnder,
  Copyright,
  Allrightreserved,
  SocialLink,
  FooterLogo,
  LogoText,
  ContactHeading,
  ContactText,
  Row,
  Text,
  Hr,
} from './Styles';

import Logo from '../../Image/Header/New_Logo.png';
import {
  faTwitter,
  faDiscord,
  faTelegram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <JoinCommunity>
            <div>
              <JoinUsHeading> Join Our Community</JoinUsHeading>
              <JoinUsText>
                To stay on top of your game, join our family. For the
                latest chatter, updates and sneak peeks on what the
                FlamingWheelz team is working on.
              </JoinUsText>
            </div>

            <Social>
              <SocialLinkCon as="a" href="https://twitter.com/FlmnWheelzAlpha" target="_blank"
          rel="noopener noreferrer">
                <StyledSocialLink icon={faTwitter} />
              </SocialLinkCon>
              <SocialLinkCon as="a" href="https://discord.com/invite/v5R6Cf5NGW" target="_blank"
          rel="noopener noreferrer">
                <StyledSocialLink icon={faDiscord} />
              </SocialLinkCon>
              <SocialLinkCon as="a" href="https://t.me/Hypatiatokenofficial" target="_blank"
          rel="noopener noreferrer">
                <StyledSocialLink icon={faTelegram} />
              </SocialLinkCon>
              <SocialLinkCon as="a" href="#">
                <StyledSocialLink icon={faYoutube} />
              </SocialLinkCon>
            </Social>
          </JoinCommunity>

          <FooterNavbar>
            <div>
              <FooterLogo src={Logo} alt="" />
              <LogoText> Developed by Hypatia Games</LogoText>
            </div>

            <Row>
              <div>
                <Text as="a">About Us</Text>
                <Text as="a">FAQ</Text>
                <Text as="a">Whitepaper</Text>
              </div>
              <div>
                <Text as="a">Roadmap</Text>
                <Text as="a">Download</Text>
                <Text as="a">Terms of use</Text>
              </div>
              <div>
                <Text as="a">Team</Text>
                <Text as="a">Career</Text>
                <Text as="a">Private Policy</Text>
              </div>
            </Row>
            <div>
              <ContactHeading>CONTACT US</ContactHeading>
              <ContactText>hello@hypatiagames.net</ContactText>
            </div>
          </FooterNavbar>
          <Hr></Hr>
        </FooterContainer>

        <FooterUnder>
          <Copyright>
            @2022 FlamingWheelz | Powered by Hypatia Games
          </Copyright>
          <Allrightreserved>
            All Rights Reserved
            <SocialLink as="a" href='https://twitter.com/FlmnWheelzAlpha' target="_blank"
          rel="noopener noreferrer">Twitter</SocialLink>
            <SocialLink as="a" href='https://discord.com/invite/v5R6Cf5NGW' target="_blank"
          rel="noopener noreferrer">Discord</SocialLink>
            <SocialLink as="a" href='https://t.me/Hypatiatokenofficial' target="_blank"
          rel="noopener noreferrer">Telegram</SocialLink>
          </Allrightreserved>
        </FooterUnder>
      </StyledFooter>
    </>
  );
}

export default Footer;
