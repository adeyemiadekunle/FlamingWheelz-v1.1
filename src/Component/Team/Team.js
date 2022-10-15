import {
  TeamCard,
  TeamInfo,
  TeamDesc,
  TeamName,
  ImgHolder,
  IMG,
  TeamSocial,
  SocialList,
} from './Styles';
import CardSampleIMG from '../../Image/About_Page/TeamSample.jpg';

export const Team = () => {
  return (
    <TeamCard >
      <TeamInfo >
        <ImgHolder >
          <IMG src={CardSampleIMG} alt=""></IMG>
        </ImgHolder>
        <div >
          <TeamName>John Doe</TeamName>
          <TeamDesc>Software Developer</TeamDesc>
        </div>
      </TeamInfo>
      <TeamSocial>
        <SocialList>
          <li>Twiter</li>
          <li>Linkedin</li>
          <li>Instagram</li>
        </SocialList>
      </TeamSocial>
    </TeamCard>
  );
};
