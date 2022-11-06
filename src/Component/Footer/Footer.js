import {
  StyledFooter,
  JoinCommunity,
  JoinUsHeading,
  JoinUsText,
  FooterContainer,
  Social,
  StyledSocialLink,
  SocialLinkCon,
  FooterUnder,
  Copyright,
  Allrightreserved,
  Links,
  Hr,
  Container,
} from './Styles';

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


          <Hr></Hr>
        </FooterContainer>
        <Container>
          <FooterUnder>
            <Copyright>
              @2022 FlamingWheelz | Powered by Hypatia Games
            </Copyright>
            <Allrightreserved>
              <p>All Rights Reserved</p>
              <Links to='/about'>About Us</Links>
              <Links to='/about'>Team</Links>
            </Allrightreserved>
          </FooterUnder>
        </Container>
      </StyledFooter>
    </>
  );
}

export default Footer;
