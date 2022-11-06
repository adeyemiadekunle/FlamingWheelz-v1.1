import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Global Style

// Section Overlay
export const SectionOverlay = styled.div`
  background: rgba(0, 0, 0, 0.77);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;
// SectionIMG Background
export const SectionIMG = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;
`;

export const Container = styled.section`
  color: white;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 1400px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const TextUnderline = styled.span`
  color: orange;
  text-decoration: underline;
  font-weight: bold;
`;

// End of Global

// Home Section
export const HomeSection = styled.main``;

// Hero Section
export const HeroSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  height: 100%;
  z-index: -1;
  margin-top: -5rem;
`;

export const SectionBg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
`;

export const HeroSectionIMG = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;
`;

export const HeroContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const HeroHeadingContainer = styled.div`
  width: 100%;
`;

export const HeroHeading = styled.h2`
  font-size: 5rem;
  text-align: left;
  font-weight: 700;
  color: white;
  padding-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const HeroHeadingh3 = styled.h1`
  font-size: 4rem;
  color: #33aaf5;
  padding-bottom: 10px;
  text-align: left;
  font-weight: 700;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroTextContainer = styled.div`
  z-index: 1;
  /* max-width: 1000px; */
  /* margin: 0 auto; */
  width: 100%;
  margin-bottom: 5rem;
  margin-top: 12rem;
  height: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  color: white;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: 900px) {
    padding-top: 30px;
    padding: 0 20px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    padding: 0px 10px;
    font-size: 1.2rem;
  }
`;

export const HeroLink = styled.span`
  color: orange;
  font-weight: bold;
`;

export const HeroDownloadContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(11, 13, 23, 0.5);
  color: white;
  gap: 20px;
  margin-top: 2rem;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-flow: column;
    margin-top: 1rem;
  }
`;

export const HeroDownloadLinkCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const DownloadIcon = styled(FontAwesomeIcon)`
  color: grey;
  font-size: 30px;

  ${(props) => props.google && css``};

  ${(props) =>
    props.apple &&
    css`
      color: white;
    `};

  ${(props) =>
    props.window &&
    css`
      color: #00b6ea;
    `}
`;

export const AppContainer = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  border: 1px solid white;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`;
export const AppHeading = styled.p`
  font-size: 0.6rem;
`;

// End of Hero

// About FlamingWheelz Section
export const About = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
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

export const AboutTextCon = styled.div`
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const AboutHeading = styled.h2`
  padding-top: 20px;
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const AboutHeadingh3 = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const AboutText = styled.p`
  line-height: 1.5;
  font-size: 2.5rem;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.5;
    width: 100%;
  }
`;

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
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
  justify-content: right;
  align-items: right;

  @media screen and (max-width: 900px) {
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const NFTContentCon = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    font-size: 1.2rem;
  }
`;

export const NFTTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  z-index: 1;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const NFTTextRap = styled.div`
  color: white;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

export const NFTText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.5;

  @media screen and (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.5;
  } ;
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

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

// The Cummunity
export const Community = styled.section`
  background: white;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-flow: column;
  overflow: hidden;
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
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-bottom: 70px;

  @media screen and (max-width: 900px) {
    flex-flow: column;
    gap: 30px;
    margin-bottom: 40px;
  }
`;

export const CommunityReadMore = styled.p`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const CommunityReadMoreBtn = styled.button`
  @media screen and (max-width: 900px) {
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

  @media screen and (min-width: 901px) {
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 992px) {
    padding-top: 120px;
    padding-bottom: 130px;
  }
`;

export const PatnerCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    gap: 50px;
  }
`;
export const PatnerInnerCon = styled.div`
  width: 50%;
  height: auto;
  /* border: 1px solid white; */
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const PatnerList = styled.img`
  width: 120px;
  height: 100%;
  margin: 10px;
  max-width: 100%;

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

export const PatnerListcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PatnerHeading = styled.h2`
  color: #33aaf5;
  font-size: 1rem;
`;

// HGT Token
export const HGT = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
  justify-content: center;
  align-items: center;
  background: #0b0d17;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }

  @media screen and (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
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

export const HGTTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const HGTHeadingh2 = styled.h2`
  font-size: 1.5rem;
  text-align: left;
  font-weight: 400;
  color: #fff;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const HGTText = styled.p`
  font-size: 2.5rem;
  color: #fff;
  text-align: left;
  line-height: 1.5;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 1.5;
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
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const RoadMapHeading = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;
export const RoadMapContainer = styled.div`
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
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 50px 10px;
  }
`;

export const RoadMapRow2 = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding: 50px 20px;
  gap: 60px;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 50px 10px;
  }
`;

export const RoadMapDivide = styled.hr`
  margin: 2rem 0;
`;

export const RoadMapYear = styled.div`
  text-align: left;
  display: flex;
  gap: 10px;

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

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  ${(props) =>
    props.morepadding &&
    css`
      margin-top: 60px;
      @media screen and (max-width: 900px) {
        margin-top: 100px;
      }
      @media screen and (max-width: 480px) {
        margin-top: 150px;
      }
    `}
`;

export const ViewDetailRoadmap = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;

  :hover {
    text-decoration: underline;
  }
`;

export const RoadmapTerms = styled.p`
  opacity: 0.8;
  text-align: center;
`;
