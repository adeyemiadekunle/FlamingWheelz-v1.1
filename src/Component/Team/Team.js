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
    <TeamCard
      whileHover={{
        scale: 1.02,
        transition: 0.3,
        border: 'solid #ff0033',
      }}
      whileTap={{
        scale: 0.9,
        transition: 0.3,
        border: 'solid #ff0033',
      }}
    >
      <TeamInfo>
        <ImgHolder>
          <IMG src={ImgUrl} alt="The Team" loading="lazy"></IMG>
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
            aria-label="Redirect to the team twitter"
          >
            <Social icon={faTwitter} />
          </SocialList>
          <SocialList
            as="a"
            href={Instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Redirect to the team instagram"
          >
            <Social icon={faInstagram} />
          </SocialList>
          <SocialList
            as="a"
            href={LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Redirect to the team linkedin"
          >
            <Social icon={faLinkedinIn} />
          </SocialList>
          <SocialList
            as="a"
            href={Facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Redirect to the team facebook"
          >
            <Social icon={faFacebook} />
          </SocialList>
        </SocialListCon>
      </TeamSocial>
    </TeamCard>
  );
};
