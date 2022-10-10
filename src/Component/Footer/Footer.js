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
  LogoText,
  ContactHeading,
  ContactText,
  Row,
  Text,
  Hr,
} from './Styles';

import Logo from '../../Image/Header/New_Logo_red.png';

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
            <div>
              <FooterLogo src={Logo} alt="" />
              <LogoText> Developed by Hypatia Games</LogoText>
            </div>

            <Row>
              <div>
                <Text as='a'>About Us</Text>
                <Text as='a'>Team</Text>
                <Text as='a'>Market</Text>
                <Text as='a'>Whitepaper</Text>
              </div>
              <div>
                <Text as='a'>Roadmap</Text>
                <Text as='a'>News</Text>
                <Text as='a'>Download</Text>
                <Text as='a'>Terms of use</Text>
              </div>
              <div>
                <Text as='a'>FAQ</Text>
                <Text as='a'>Career</Text>
                <Text as='a'>License</Text>
                <Text as='a'>Private Policy</Text>
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
            <SocialLink as="a">Twitter</SocialLink>
            <SocialLink as="a">Discord</SocialLink>
            <SocialLink as="a">Telegram</SocialLink>
          </Allrightreserved>
        </FooterUnder>
      </StyledFooter>
    </>
  );
}

export default Footer;
