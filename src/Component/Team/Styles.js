import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TeamCard = styled(motion.div)`
  width: 400px;
  border: 2px solid grey;
  border-radius: 5px;
  transition: 0.3s;
  background: #0b0d17;
`;

export const TeamInfo = styled.div`
  padding: 50px 50px 22px;
  text-align: center;
  color: white;
`;

export const ImgHolder = styled.div`
  width: 100%;
  max-width: 240px;
  margin: 0 auto 26px;
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  vertical-align: middle;
  max-width: 100%;
`;

export const TeamName = styled.h3`
  margin: 0 0 8px;
  padding: 0;
  font-size: 22px;
  font-weight: 500px;
  /* white-space: nowrap; */
 
`;

export const TeamDesc = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: lightgrey;
`;

export const TeamSocial = styled.div`
  color: white;
  justify-content: center;
  align-items: center;
  color: #0b0d17;
  padding-top: 10px;
`;

export const SocialListCon = styled.div`
  list-style-type: none;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0px 30px;
  background-color: #252525;
  border-radius: 5px 5px 0 0;
`;

export const Social = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: grey;

  :hover {
    color: lightgrey;
    transition: 0.3s;
  }
`;


export const SocialList = styled.div`

`;
