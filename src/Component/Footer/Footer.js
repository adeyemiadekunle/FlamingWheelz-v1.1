import {
  StyledFooter,
  JoinCommunity,
  JoinUsHeading,
  JoinUsText,
  FooterContainer,
  Social,
  FooterNavbar,
  FooterUnder,
  Copyright,
  Allrightreserved,
  SocialLink,
  FooterLogo,
  Hr,
} from './Styles';

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
            <div>
              <Social>Icon Icon Icon</Social>
            </div>
          </JoinCommunity>

          <FooterNavbar>
            <FooterLogo>
              <img src="" alt="" />
            </FooterLogo>
            <div></div>
            <div></div>
            <div></div>
          </FooterNavbar>
          <Hr></Hr>
        </FooterContainer>
        <FooterUnder>
          <Copyright>
            @2022 FlamingWheelz | Powered by Hypatia Games Studio
          </Copyright>
          <Allrightreserved>
            All Rights Reserved
            <SocialLink as="a">Twitter</SocialLink>
            <SocialLink as="a">Discord</SocialLink>
            <SocialLink as="a">Telegram</SocialLink>
            <SocialLink as="a">Youtube</SocialLink>
          </Allrightreserved>
        </FooterUnder>
      </StyledFooter>
    </>
  );
}

export default Footer;
