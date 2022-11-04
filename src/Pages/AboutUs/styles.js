import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';

// Button
export const Button = styled(motion.button)`
  margin-top: 10px;
  padding: 15px 30px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid #fff;
  color: #ff0033;
  font-weight: bold;
  outline-offset: 2px;
  width: fit-content;
  max-width: 100%;
  font-size: 1.2rem;

  :hover {
    opacity: 0.8;
    background: transparent;
    color: #fff;
    border: 2px solid #ff0033;
  }

  ${(props) =>
    props.primary &&
    css`
      color: white;

      &:hover {
        border: 2px solid #ff0033;
        transition: all 0.2s;
        background: transparent;
      }
      /* @media screen and (max-width: 480px) {
        font-size: 1rem;
        padding: 15px 30px;
      } */
    `};
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

export const SectionOverlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

// Section Background

export const SectionBg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
`;

export const StyledAbout = styled.main`
 
  margin: auto;
 
`;

// About FlamingWheelz
export const FlamingSection = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  margin-top: -5rem;
  z-index: -1;

  @media screen and (max-width: 900px) {
    justify-content: center;
  } ;
`;

export const FlamingSectionIMG = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;
`;

export const FlamingContentContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 5rem;
`;

export const FlamingTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const FlamingHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FlamingText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FlamingbtnContainer = styled.div`
  display: flex;
  justify-content: left;
  padding-top: 30px;
  ;
 
`;
// End of FlamingWheelz

// Hypatia Games
export const HypatiaContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const HypatiaSectionOverlay = styled.div`
  background-image: linear-gradient(
    to left,
    rgba(11, 13, 23, 0.2),
    rgba(11, 13, 23, 1),
    rgba(11, 13, 23, 1)
  );
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;

  @media screen and (max-width: 900px) {
    background-image: linear-gradient(
      rgba(11, 13, 23, 0),
      rgba(11, 13, 23, 1)
    );
  }
`;
export const HypatiaSectionIMG = styled.img`
  object-fit: contain;
  object-position: right;
  height: 100%;
  left: 0;
  width: 100%;
  position: absolute;

  @media screen and (max-width: 900px) {
    object-fit: cover;
    object-position: center;
  }
`;

export const HypatiaContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HypatiaTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const HypatiaHeadingh3 = styled.h3`
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const HypatiaHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HypatiaText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Flaming Features

export const FlamingFeatureContainer = styled.section`
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: relative;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const FeatureSectionbg = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FeatureTextContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-flow: column;
  width: 60%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const FeatureHeadingh2 = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  font-weight: bold;
  color: #f3f3f3;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeatureText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: left;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FeatureLists = styled.li`
  list-style-type: square;
  margin-left: 20px;
  margin-top: 10px;
`;
// End of Features

// The Team
export const StyledTeam = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding: 60px 16px;
  }
`;

export const TeamContainer = styled.div``;

export const TeamListCon = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const TeamHeadingCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
export const TeamHeadingh3 = styled.h3`
  color: white;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
