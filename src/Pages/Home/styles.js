import styled, { css } from 'styled-components';
import HeroImage from '../../Image/Hero/Hero-img.jpg';

export const HomeContainer = styled.div``;

// Hero Section

export const Hero = styled.div`
  height: 600px;
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
  /* display: flex; */
  /* justify-content: left; */
  /* align-items:center; */
`;

export const Herotext = styled.div`
  text-align: center;
  position: absolute;
  top: 18%;
  left: 8%;
  color: white;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  text-align: left;
  font-weight: bold;
  /* letter-spacing: 5px; */
  color: white;

  ${(props) =>
    props.h3 &&
    css`
      padding-top: 20px;
      font-size: 1rem;
    `}

  ${(props) =>
    props.h2 &&
    css`
      font-size: 2rem;
    `}
`;

export const HeroButton = styled.button`
  background: ${(props) => props.theme.red};
  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.red};
  color: ${(props) => props.theme.color};
  padding: 1em 1.5em;
  width: 150px;

  &:hover {
    border: 2px solid #ffffff;
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

// Button
export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 50px;
  background: ${(props) => props.theme.red};
  border-radius: 20px;
  border: ${(props) => props.theme.red};
  color: ${props=> props.theme.color};

  :hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: ${(props) => props.theme.red};
      border: 2px solid ${(props) => props.theme.red};

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
`;

export const Text = styled.p`
  margin-top: 5px;
  width: 600px;
  text-align: left;
  line-height: 1.4rem;
  color:${props=>props.theme.color}
`;

export const Links = styled.a`
  color: Orange;
  font-weight: bold;
`;

// Latest Map Section

export const NewExpCon = styled.div`
  margin: 40px 30px 40px 30px;
  padding: 0 20px;
  display: flex;
  padding: 20px 60px;
  justify-content: space-between;
  flex-direction: column;
 
`;

export const NewExpHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  line-height: 2rem;
 
`;

export const NewExpH5 = styled.h5`
  color: ${(props) => props.theme.red};

`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

`;

// Play with your NFT Section

export const NFTContainer = styled.div`
  height: 600px;
  width: 100%;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.3)
    ),
    url(${HeroImage});
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-bottom: 50px;
`;
export const NFTTextCon = styled.div`
  text-align: left;
  position: absolute;
  top: 30%;
  right: 8%;
  color: white;
`;

export const NFTText = styled(Text)`
  width: 500px;
  padding: 10px 0;
`;

// The Cumminity

export const Community = styled.div`
margin: 40px 30px 40px 30px;
 padding: 0 20px;
  display: flex;
  padding: 20px 60px;
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
  color: ${(props) => props.theme.red};
`;


// The Patner

 export const Patner = styled.div`
 width: 100%;
 height: 400px;
 border: 1px solid green;
 
 ` 
