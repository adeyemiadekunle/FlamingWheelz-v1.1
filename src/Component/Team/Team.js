import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebook,
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

export const Team = ({
  ImgUrl,
  FullName,
  Job,
  Twitter,
  Instagram,
  LinkedIn,
  Facebook,
}) => {
  return (
    <TeamCard>
      <TeamInfo>
        <ImgHolder>
          <IMG src={ImgUrl} alt=""></IMG>
        </ImgHolder>
        <div>
          <TeamName>{FullName}</TeamName>
          <TeamDesc>{Job}</TeamDesc>
        </div>
      </TeamInfo>
      <TeamSocial>
        <SocialListCon>
          <SocialList
            as="a"
            href={Twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={faTwitter} />
          </SocialList>
          <SocialList
            as="a"
            href={Instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={faInstagram} />
          </SocialList>
          <SocialList
            as="a"
            href={LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={faLinkedinIn} />
          </SocialList>
          <SocialList
            as="a"
            href={Facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social icon={faFacebook} />
          </SocialList>
        </SocialListCon>
      </TeamSocial>
    </TeamCard>
  );
};
