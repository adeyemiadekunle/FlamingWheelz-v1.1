import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import {
  TeamCard,
  TeamInfo,
  TeamDesc,
  TeamName,
  ImgHolder,
  IMG,
  TeamSocial,
  SocialListCon,
  SocialList,
  Social,
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
        <SocialListCon>
          <SocialList as=''><Social icon={faTwitter}/></SocialList>
          <SocialList as=''><Social icon={faInstagram}/></SocialList>
          <SocialList as=''><Social icon={faLinkedinIn}/></SocialList>
          <SocialList as=''><Social icon={faFacebook}/></SocialList>
        </SocialListCon>
      </TeamSocial>
    </TeamCard>
  );
};
