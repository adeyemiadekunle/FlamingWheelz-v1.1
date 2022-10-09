import styled, { css } from 'styled-components';

// Global Style

// Button
export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 50px;
  background: #ff0033;
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
      color: white;
      border: 2px solid #ff0033;

      &:hover {
      background: white;
      color: #000;
      border: 2px solid white;
      transition: all  0.5s;
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
  justify-content: space-between;
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
  padding: 0 10px;
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
  margin: 0 auto;
  width: 100%;
  /* padding: 20px 0px; */
`;

export const HeroText = styled.p`
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
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
  padding-top: 40px;
`;

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

export const HeroDownloadContainer = styled.div`
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.5);
color: white;
gap: 20px;

`

export const HeroDownloadLinkCon= styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

export const HeroContentContainer = styled.div`
margin-top: 5rem;

`
// End of Hero




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
`;

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  gap: 30px;
`;

export const AboutFeature = styled.h3`
/* color: #33aaf5; */
color:#ff0033 ;
text-decoration: underline;
`

// End of About Section

// Play with your NFT Section

export const NFTSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  min-height: 90vh;
`;

export const NFTSectionbg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const NFTImg = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  border-style: none;
  object-fit: cover;
  object-position: center;
`;


export const NFTSectionOverlay = styled.div`
height: 100%;
left: 0;
top: 0;
width: 100%;
position: absolute;
z-index: -1;
background: rgba(0, 0, 0, 0.77);
`

export const NFTHeadingContainer = styled.div`
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;

`

export const NFTHeadingh2 = styled.h2`
  font-size: 3.5rem;
  text-align: left;
  font-weight: bold;
  color: white;
  padding-bottom: 10px;

`

export const NFTTextContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: 0 10px;
`;

export const NFTText = styled.p`
  line-height: 1.5rem;
  width: 50%;
  color: white;
`;

export const KleverNFT = styled.span`
  color: rgb(160, 57, 194);
`;

export const NFTLink = styled.div`
color: orange;
font-weight: bold;
cursor: pointer;

`
export const NFTBtnContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding: 0 10px;
  padding-top: 30px;
`

// The Cummunity
export const CommunityContainer = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

`;

export const CommunityHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;
  line-height: 2rem;
`;

export const CommunityHeadingh5 = styled.h5`
  color: #ff0033;
  font-size: 1rem;
`;

export const CommunityRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-bottom: 70px;

`

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
  color: #33aaf5;
  font-size: 1.2rem;
`;



// HGT Token

export const HGTContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  min-height: 90vh;
  
`
export const HGTSectionbg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;

`

export const HGTImg = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  border-style: none;
  object-fit: cover;
  object-position: center;

`
export const HGTSectionOverlay = styled.div`
height: 100%;
left: 0;
top: 0;
width: 100%;
position: absolute;
z-index: -1;
/* background: rgba(0, 0, 0, 0.47); */
`

export const HGTContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;

`

export const HGTTextContainer = styled.div`
  z-index: 1;
  width: 50%;
  padding: 50px 10px;
  background: rgba(0,0,0, 0.8);
  border-radius: 8px;
  display: flex;
  flex-flow: column;

`

export const HGTHeadingh2 = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color: #33aaf5;
  padding-bottom: 10px;

`

export const HGTText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
`;

export const HGTbtnContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 30px;

`
// End of HGT Token
