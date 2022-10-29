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
  Container,
} from './Styles';

import Logo from '../../Image/Header/New_Logo_red.webp';
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
              <SocialLinkCon as="a" href="#"
              aria-label="Redirect to flamingwheelz youtube">
              
                <StyledSocialLink icon={faYoutube} />
              </SocialLinkCon>
            </Social>
          </JoinCommunity>

          <FooterNavbar>
            <div>
              <FooterLogo src={Logo} alt="FlamingWheelz Logo" />
              <LogoText> Developed by Hypatia Games</LogoText>
            </div>

            <Row>
              <div>
                <Text >About Us</Text>
                <Text >FAQ</Text>
                <Text >Whitepaper</Text>
              </div>
              <div>
                <Text >Roadmap</Text>
                <Text >Download</Text>
                <Text >Terms of use</Text>
              </div>
              <div>
                <Text >Team</Text>
                <Text >Career</Text>
                <Text >Private Policy</Text>
              </div>
            </Row>
            <div>
              <ContactHeading>CONTACT US</ContactHeading>
              <ContactText>hello@hypatiagames.net</ContactText>
            </div>
          </FooterNavbar>
          <Hr></Hr>
        </FooterContainer>
        <Container>
          <FooterUnder>
            <Copyright>
              @2022 FlamingWheelz | Powered by Hypatia Games
            </Copyright>
            <Allrightreserved>
              All Rights Reserved
              <SocialLink
                as="a"
                href="https://twitter.com/FlmnWheelzAlpha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Redirect to flamingwheelz twitter"
              >
                Twitter
              </SocialLink>
              <SocialLink
                as="a"
                href="https://discord.com/invite/v5R6Cf5NGW"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Redirect to flamingwheelz discord"
              >
                Discord
              </SocialLink>
              <SocialLink
                as="a"
                href="https://t.me/Hypatiatokenofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Redirect to flamingwheelz telegram"
              >
                Telegram
              </SocialLink>
            </Allrightreserved>
          </FooterUnder>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
