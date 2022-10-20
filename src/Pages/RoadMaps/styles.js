import styled, { css } from 'styled-components';

export const StyledRoadmap = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  /* height: 100vh; */
`;

export const RoadMapsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: white;
`;

export const RoadMapsHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  font-weight: 600;
`;

export const RoadmapSection = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row;
  gap: 10rem;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    gap: 2rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`;

export const RoadmapDetail = styled.div`
  display: flex;
  flex-grow: row;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    flex-flow: column;
    gap: 1rem;
  }
`;

export const RoadmapYear = styled.div`
  font-size: 2rem;
  font-weight: 600;
  border: 1px solid white;

`;

export const RoadmapQuarter = styled.div`
  font-size: 1.5rem;
  opacity: 0.8;
  border: 1px solid red;


  ${(props) =>
    props.sameyear &&
    css`
      margin-left: 4.8rem;

      @media screen and (max-width: 768px) {
        margin-left: 0rem;
      }
    `}
`;

export const RoadmapList = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

export const ListCon = styled.div`
  padding-top: 3px;
`;

export const ViewDetailRoadmap = styled.h2`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ViewDetailCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const RoadmapTerms = styled.p`
  opacity: 0.8;
`;
