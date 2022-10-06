import styled, { css } from 'styled-components';
import HeroImage from '../../Image/Hero/Hero-img.jpg';
import PlayNFT from '../../Image/PlayNFT/Play-NFT.jpg';

// Flexbox Styling
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  /* flex-wrap: wrap; */
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const HomeContainer = styled.div``;

// Hero Section
export const Hero = styled.div`
  height: 700px;
  width: 100%;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.8)
    ),
    url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Herotext = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 150px 20px;
`;

export const HeroHeading = styled.h1`
  font-size: 4rem;
  text-align: left;
  font-weight: bold;
  color: white;

  ${(props) =>
    props.heroh4 &&
    css`
      padding-top: 20px;
      font-size: 1.5rem;
      padding-left: 2px;
      padding-bottom: 10px;
    `}
`;

export const HeroButton = styled.button`
  background: red;
  border-radius: 6px;
  border: 2px solid red;
  color: white;
  padding: 1em 1.5em;
  width: 150px;

  &:hover {
    border: 2px solid white;
    transition: 0s;
    cursor: pointer;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: white;
      border: 2px solid white;

      &:hover {
        border: 2px solid red;
      }
    `}
`;

// Button
export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 50px;
  background: red;
  border-radius: 20px;
  border: red;
  color: white;

  :hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: red;
      border: 2px solid red;

      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const Btncontainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 40px;
  justify-content: left;
  padding-left: 3px;
`;

export const Text = styled.p`
  margin-top: 5px;
  width: 600px;
  text-align: left;
  line-height: 1.4rem;
  color: white;
  padding-left: 3px;
  font-size: 1.2rem;
`;

export const Links = styled.a`
  color: orange;
  font-weight: bold;
`;

// About FlamingWheelz Section

export const AboutCon = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutTextCon = styled.div`
  width: 50%;
  margin-top: -300px;
`;

export const AboutHeading = styled.h2`
  padding-top: 20px;
  font-size: 3rem;
  color: black;
`;
export const AboutH5 = styled.h5`
  color: red;
`;

export const AboutText = styled.p`
  line-height: 1.5rem;
  padding-top: 20px;
  padding-bottom: 30px;
`;

// Play with your NFT Section

export const NFTContainer = styled.div`
  height: 600px;
  background: black;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
    ),
    url(${PlayNFT});
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 50px;
`;

export const NFTHeading = styled.h2`
  padding-top: 20px;
  font-size: 3rem;
  color: white;
`;

export const NFTTextCon = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 140px 20px;
`;

export const NFTText = styled(Text)`
  width: 500px;
  padding: 10px 0;
  line-height: 1.8rem;
  margin-bottom: 20px;
`;

export const KleverNFT = styled.span`
  color: rgb(160, 57, 194);
`;

// The Cummunity

export const Community = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CommunityHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  line-height: 2rem;
`;

export const CommunityH5 = styled.h5`
  color: red;
`;


// The Patner

export const Patner = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid green;
`;
