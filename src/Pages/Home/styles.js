import styled, { css } from 'styled-components';
import Hero_IMG from '../../Image/Hero/Hero_IMG.webp';
import NFTIMG from '../../Image/PlayNFT/Play-NFT.webp';

// Global Style

// Button
export const Button = styled.button`
  margin-top: 10px;
  padding: 15px 50px;
  background: #ff0033;
  border-radius: 100px;
  border: #ff0033;
  color: white;
  font-weight: bold;

  :hover {
    opacity: 0.8;
    border-radius: 25px;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: white;
      border: 2px solid #ffffff;
      font-size: 1.5rem;

      &:hover {
        background: white;
        color: #0b0d17;
        border: 2px solid white;
        transition: all 0.2s;
      }
    `};

  ${(props) =>
    props.normal &&
    css`
      background: white;
      color: #ff0033;
      border: 2px solid white;

      &:hover {
        transition: 0.2s;
        color: #0b0d17;
      }
    `}
`;

export const TextUnderline = styled.span`
  color: orange;
  text-decoration: underline;
  font-weight: bold;
`;
// End of Global

// Home Section
export const HomeSection = styled.section`
  margin: auto;
`;

// Hero Section
export const HeroSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 480px) {
    height: 90vh;
  }
`;

export const HeroSectionBg = styled.div`
  background-image: linear-gradient(
      rgba(11, 13, 23, 0),
      rgba(11, 13, 23, 80)
    ),
    url(${Hero_IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const HeroHeadingContainer = styled.div`
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;
`;

export const HeroHeading = styled.h1`
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  color: white;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    /* text-align: center; */
    font-size: 3rem;
  }
`;

export const HeroHeadingh1 = styled.h1`
  font-size: 1.8rem;
  color: #33aaf5;
  padding-bottom: 10px;
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroTextContainer = styled.div`
  z-index: 1;
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0 22px;
  }
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  color: white;
  line-height: 2.5rem;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const HeroLink = styled.span`
  color: orange;
  font-weight: bold;
`;

export const HeroBtnContainer = styled.div`
  margin-top: 40px;
`;

export const HeroButton = styled.button`
  border-radius: 100px;
  padding: 1.2rem 2.5rem;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  background: transparent;
  border: 1px solid #33aaf5;

  &:hover {
    transition: 0s;
    cursor: pointer;
    color: #33aaf5;
  }
`;

export const HeroDownloadContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(11, 13, 23, 0.5);
  color: white;
  gap: 20px;

  @media screen and (max-width: 480px) {
    flex-flow: column;
  }
`;

export const HeroDownloadLinkCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HeroContentContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;
// End of Hero

// About FlamingWheelz Section
export const AboutContainer = styled.section`
  padding: 40px 20px;
  max-width: 1300px;
  margin: 0 auto;
  color: white;
`;

export const AboutTextCon = styled.div`
  width: 50%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const AboutHeading = styled.h1`
  padding-top: 20px;
  font-size: 3rem;
  /* color: #33aaf5; */
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const AboutHeadingh5 = styled.h5`
  color: #fff;
  font-size: 1rem;
`;

export const AboutText = styled.p`
  /* line-height: 1.5rem; */
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 90%;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 900px) {
    flex-flow: column;
  } ;
`;

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const AboutFeature = styled.h3`
  color: #fff;
  text-decoration: underline;

  @media screen and (max-width: 480px) {
    padding-top: 10px;
  }
`;

// End of About Section

// Play with your NFT Section

export const NFTSection = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 90vh;

  justify-content: right;
  align-items: right;

  @media screen and (max-width: 480px) {
    text-align: center;
    gap: 20px;
    height: 80vh;
  }
`;

export const NFTSectionbg = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(11, 13, 23, 0),
      rgba(11, 13, 23, 90)
    ),
    url(${NFTIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const NFTContentCon = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
export const NFTHeadingContainer = styled.div`
  z-index: 1;
  width: 100%;
`;

export const NFTHeadingh2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  padding-bottom: 10px;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const NFTTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  z-index: 1;
  padding: 50px 20px;
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NFTTextRap = styled.div`
  color: white;
  line-height: 1.5;
  text-align: left;

  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

export const NFTText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.6;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.5;
  }
`;

export const KleverNFT = styled.span`
  color: rgb(160, 57, 194);
`;

export const NFTLink = styled.div`
  color: orange;
  font-weight: bold;
  cursor: pointer;
`;
export const NFTBtnContainer = styled.div`
  width: 100%;
  z-index: 1;
  padding-top: 30px;
`;

// The Cummunity
export const Community = styled.div`
  background: white;
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
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

  @media screen and (max-width: 768px) {
    flex-flow: column;
    gap: 30px;
    margin-bottom: 40px;
  }
`;

export const CommunityReadMore = styled.p`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CommunityReadMoreBtn = styled.button`
  @media screen and (max-width: 768px) {
    padding: 15px 40px;
    background: #ff0033;
    border-radius: 8px;
    border: #ff0033;
    color: white;
    font-weight: bold;

    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CommBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
// End of Community

// The Patner
export const Patner = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

  @media screen and (max-width: 480px) {
  }
`;

export const PatnerCon = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PatnerList = styled.img`
  width: 120px;
  height: 100%;
  margin: 20px;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
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
export const HGTContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  height: 90vh;
  background-color: #0b0d17;

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 80vh;
  }
`;
export const HGTSectionbg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const HGTImg = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  top: 0;
  border-style: none;
  object-fit: cover;
  object-position: center;
`;
export const HGTSectionOverlay = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const HGTContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const HGTTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px 20px;
  display: flex;
  flex-flow: column;
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HGTHeadingh2 = styled.h4`
  font-size: 1.5rem;
  text-align: left;
  font-weight: 300;
  color: #fff;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HGTText = styled.p`
  font-size: 2.5rem;
  color: #fff;
  text-align: left;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HGTbtnContainer = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 30px;
`;
// End of HGT Token

// RoadMap
export const RoadMap = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 60px 0;
`;

export const RoadMapHeading =styled.h3`
 font-size: 1.5rem;
 font-weight: bold;
`
export const RoadMapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;
  display: flex;
  height: 100%;
`;
export const RoadMapRow1 = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding: 60px 20px;
  gap: 60px;

  align-items: flex-end;

  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
`;

export const RoadMapRow2 = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding: 50px 20px;
  gap: 60px;
`;

export const RoadMapDivide = styled.hr`
  margin: 2rem 0;
`;

export const RoadMapYear = styled.div`
  text-align: left;
  display: flex;
  gap: 10px;

  padding: 10px;

  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
`;

export const RoadMapText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  width: 80%;
  padding: 10px;

  ${(props) =>
    props.morepadding &&
    css`
      padding-top: 150px;
    `}
`;

export const ViewDetailRoadmap = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const RoadmapTerms = styled.p`
  opacity: 0.8;
`;
