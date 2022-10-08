import styled, { css } from 'styled-components';
import PlayNFT from '../../Image/PlayNFT/Play-NFT.jpg';
import HGTToken from '../../Image/HGT/HGT.png';

// Global Style

// Button
export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 50px;
  background: red;
  border-radius: 20px;
  border: #ff0033;
  color: white;

  :hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: red;
      border: 2px solid #ff0033;

      &:hover {
        opacity: 0.8;
      }
    `}
`;

// End of Global

// Home Section
export const HomeSection = styled.div`
  margin: auto;
`;

// Hero Section
export const HeroSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;

export const HeroSectionBg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const HeroImg = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  border-style: none;
  object-fit: cover;
  object-position: center;
`;

export const HeroSectionOverlay = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
  background: rgba(0, 0, 0, 0.47);
`;

export const HeroHeadingContainer = styled.div`
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding:  0 10px;

`;

export const HeroHeadingh1 = styled.h1`
  font-size: 5rem;
  text-align: left;
  font-weight: bold;
  color: white;
  padding-bottom: 10px;
 


`;

export const HeroHeadingh4 = styled.h4`
  font-size: 1.8rem;
  color: #33aaf5;
  padding-bottom: 10px;
`;

export const HeroTextContainer = styled.div`
  z-index: 1;
  max-width: 1200px;
  padding: 0 10px;
  margin:  0 auto;
  width: 100%;
  /* padding: 20px 0px; */

`;

export const HeroText = styled.div`
  line-height: 1.5rem;
  width: 50%;
  color: white;
`;

export const HeroLink = styled.span`
  color: orange;
  font-weight: bold;
`;


export const HeroBtnContainer = styled.div`
  z-index: 1;
  max-width: 1200px;
  margin:  0 auto;
  width: 100%;
  padding: 0 10px;
  padding-top: 40px;
`

export const HeroButton = styled.button`
  background: red;
  border-radius: 6px;
  border: 2px solid #ff0033;
  color: white;
  padding: 1em 1.5em;
  width: 150px;
  text-align: center;

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
        border: 2px solid #ff0033;
      }
    `}
`;

// End of Hero




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
export const AboutContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutTextCon = styled.div`
  width: 50%;
`;

export const AboutHeading = styled.h2`
  padding-top: 20px;
  font-size: 3rem;
  color: black;
`;
export const AboutHeadingh5 = styled.h5`
  color: #ff0033;
  font-size: 1rem;
`;

export const AboutText = styled.p`
  line-height: 1.5rem;
  padding-top: 20px;
  padding-bottom: 30px;
`;


export const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;


// End of About Section



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
  color: #ff0033;
  font-size: 1rem;
`;

// The Patner
export const Patner = styled.div`
  width: 100%;
  height: 500px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PatnerCon = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PatnerList = styled.img`
  width: 120px;
  height: 100%;
  margin: 20px;
`;

export const PatnerListcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const PatnerHeading = styled.h5`
  color: #ff0033;
  font-size: 1rem;
`;

// HGT Token

export const HGTCon = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${HGTToken});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
`;
export const HGTTextCon = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  text-align: right;
  padding: 140px 20px;
`;

export const HGTText = styled.h2`
  font-size: 3rem;
  color: black;
`;

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
