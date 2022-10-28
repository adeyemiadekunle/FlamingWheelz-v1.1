
import { Button } from '../Home/styles';
import { Team } from '../../Component/Team/Team';
import {
  SectionBg,
  SectionOverlay,
  FlamingSectionIMG,
  StyledAbout,
  FlamingContainer,
  FlamingContentContainer,
  FlamingTextContainer,
  FlamingHeadingh2,
  FlamingText,
  HypatiaContainer,
  HypatiaSectionIMG,
  HypatiaContentContainer,
  HypatiaTextContainer,
  HypatiaHeadingh2,
  HypatiaHeadingh3,
  HypatiaText,
  FlamingFeatureContainer,
  FeatureSectionbg,
  FeatureContentContainer,
  FeatureTextContainer,
  FeatureHeadingh2,
  FeatureText,
  FeatureLists,
  FlamingbtnContainer,
  StyledTeam,
  TeamContainer,
  TeamListCon,
  TeamHeadingCon,
  TeamHeadingh3,
  HypatiaSectionOverlay,
  Container,
} from './styles';

import Flaming_437 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_437.jpg';
import Flaming_632 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_632.jpg';
import Flaming_815 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_815.jpg';
import Flaming_1013 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_1013.jpg';
import Flaming_1275 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_1275.jpg';
import Flaming_1400 from '../../Image/About_Page/About_Flaming_hopgxp_c_scale,w_1400.jpg';

import Hypatia_200 from '../../Image/About_Page/Hypatia_rcvdfg_c_scale,w_200.jpg';
import Hypatia_793 from '../../Image/About_Page/Hypatia_rcvdfg_c_scale,w_793.jpg';
import Hypatia_1040 from '../../Image/About_Page/Hypatia_rcvdfg_c_scale,w_1040.jpg';

import CEO from '../../Image/Team/CEO.jpg'
import GameDeveloper from '../../Image/Team/Game Developer.jpg'
import ProjectManager from '../../Image/Team/Project Manager.jpg'
import Advisor from '../../Image/Team/Advisor.jpg'
import FrontEndDeveloper from '../../Image/Team/Software Developer.jpg'
import GraphicDesigner from '../../Image/Team/Graphic Designer.jpg'
import SocialManager from '../../Image/Team/Social Manager.jpg'

function AboutUs() {
  const TeamDatas = [
    {
      id: 0,
      ImgUrl: CEO,
      full_name: 'Samuel Dechi',
      Job: 'Founder and CEO',
      Social: {
        twitter: 'https://twitter.com/SamTheKleverian',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/in/nanadechi',
        facebook: '',
      },
    },
    {
      id: 1,
      ImgUrl: GameDeveloper,
      full_name: 'Adam Harimeche',
      Job: 'Co-Founder & Game Developer',
      Social: {
        twitter: 'https://twitter.com/thealoneadam',
        instagram: '',
        linkedIn: '',
        facebook: '',
      },
    },
    {
      id: 2,
      ImgUrl: ProjectManager,
      full_name: 'Gideon Uchechukwu',
      Job: 'Co-Founder & Project Manager',
      Social: {
        twitter: '',
        instagram: '',
        linkedIn: '',
        facebook: '',
      },
    },
    {
      id: 3,
      ImgUrl: Advisor,
      full_name: 'Fred Blake',
      Job: 'Advisor',
      Social: {
        twitter: '',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/in/samuel-fred-58935329',
        facebook: '',
      },
    },
    {
      id: 4,
      ImgUrl: FrontEndDeveloper,
      full_name: 'Adeyemi Adekunle',
      Job: 'Software Developer',
      Social: {
        twitter: 'https://twitter.com/iamadeyemidev',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/in/adeyemi-adekunle-38361b114/',
        facebook: '',
      },
    },
    {
      id: 5,
      ImgUrl: GraphicDesigner,
      full_name: 'Kay Amire',
      Job: 'Graphic Designer',
      Social: {
        twitter: '',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/in/kay-amire-14a994249',
        facebook: '',
      },
    },
    {
      id: 6,
      ImgUrl: SocialManager,
      full_name: 'Benamba B. Victor',
      Job: 'Social Manager',
      Social: {
        twitter: 'https://twitter.com/bossbouncy',
        instagram: '',
        linkedIn: 'https://www.linkedin.com/in/victor-benamba-409883246',
        facebook: '',
      },
    },
  ];


  return (
    <>
      <StyledAbout>
        <FlamingContainer>
          <SectionBg>
            <FlamingSectionIMG
            sizes="(max-width: 1400px) 100vw, 1400px"
            src={`${Flaming_1400}`}
            srcSet={`${Flaming_437} 437w, ${Flaming_632} 632w, ${Flaming_815} 815w, ${Flaming_1013} 1013w, ${Flaming_1275} 1275w, ${Flaming_1400} 1400w`}
            alt="A gaming car"
           ></FlamingSectionIMG>
          </SectionBg>
          <SectionOverlay></SectionOverlay>
          <Container>
          <FlamingContentContainer>
            <FlamingTextContainer>
              <FlamingHeadingh2>About FlamingWheelz</FlamingHeadingh2>
              <FlamingText>
                FlamingWheelz is a fantasy RPG mixed with racing for
                anyone who's ever daydreamed about, fantasy creatures
                and more with your driving expertise, smashing the car
                in front of them in traffic, speeding away from cops,
                getting into a racing arena to prove your skills at
                the grandest stage and all of it is fueled by HGT
                tokens.
                <div>
                  <br />
                </div>
                FlamingWheelz and many more games coming that is developed
                by Hypatia Games- a brand-new game studio composed of
                industry veterans. Each Playable character in
                FlamingWheelz is a Non-Fungible Token (NFT), which
                means that each player is the sole owner of a wholly
                the unique playable character in Hypatia Universe.
                <div>
                  <br />
                </div>
                Hypatia Games Token (HGT) is the governance token of
                our ecosystem and utility token used as the main
                currency of Heat. HGT is a cryptocurrency that may be
                exchanged with other cryptocurrencies and fiat
                currency.
              </FlamingText>
              <FlamingbtnContainer>
                <Button as="">Read the Whitepaper </Button>
              </FlamingbtnContainer>
            </FlamingTextContainer>
          </FlamingContentContainer>
          </Container>
        </FlamingContainer>

        <FlamingFeatureContainer>
          <FeatureSectionbg></FeatureSectionbg>
          <Container>
          <FeatureContentContainer>
            <FeatureTextContainer>
              <FeatureHeadingh2>The Features</FeatureHeadingh2>
              <FeatureText>
                <ul>
                  <FeatureLists>
                    Genesis NFTs Edition of characters that is unique,
                    and come with its distinctive bragging rights!
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Players turn used materials to get redemption
                    points(RP) to redeem upgrades for their
                    characters.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Play using Android, IOS and System PC.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Training grounds that allow players to improve
                    their characters to their gameplay style.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Play and Earn HGT Token, which players can
                    exchange to other cryptocurrencies and fiat
                    currencies in the real world.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Live Events, Daily Mission, Bimonthly, Quarterly
                    Global Tournaments, achievements, and long term
                    progression will engage players daily for an an
                    indefinite amount of time.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Players Corner and social community integration.
                    Tournaments will always be breathtaking,
                    competitive, and enticingly fascinating.
                  </FeatureLists>
                  <FeatureLists>
                    {' '}
                    Develop on KleverChain and Avax Network.
                  </FeatureLists>
                </ul>
              </FeatureText>
            </FeatureTextContainer>
          </FeatureContentContainer>
          </Container>
        </FlamingFeatureContainer>

        <HypatiaContainer>
          {/* <HypatiaSectionbg></HypatiaSectionbg> */}
          <SectionBg>
            <HypatiaSectionIMG
            src={`${Hypatia_1040}`}
            sizes="(max-width: 1040px) 100vw, 1040px"
            srcSet={`${Hypatia_200} 200w, ${Hypatia_793} 793w, ${Hypatia_1040} 1040w`}  
            alt="Xbox_Keypad"
            ></HypatiaSectionIMG>
          </SectionBg>
          <HypatiaSectionOverlay></HypatiaSectionOverlay>
          <Container>
          <HypatiaContentContainer>
            <HypatiaTextContainer>
              <HypatiaHeadingh3>About</HypatiaHeadingh3>
              <HypatiaHeadingh2>Hypatia Games</HypatiaHeadingh2>
              <HypatiaText>
                Hypatia Games is a decentralized indie game team and
                studio under development to change the narrative of
                pay-to-win to play-to-earn and also tokenizing in-game
                assets and handing over ownership to gamers.
                <div>
                  <br />
                </div>
                Hypatia Games is a next-generation multi-chain GameFi
                and NFT protocol with a focus on sustainability,
                transparency, and reliability. Formed by a coalition
                of expert investors, serial entrepreneurs, and
                established members of the cryptocurrency space.
                <div>
                  <br />
                </div>
                We will leverage our unique blend of proven strategies
                and radical innovation in the field of GameFi. The
                goal is to achieve market-leading investment returns
                on our treasury investments while expanding the
                Hypatia Games Ecosystem.
              </HypatiaText>
            </HypatiaTextContainer>
          </HypatiaContentContainer>
          </Container>
        </HypatiaContainer>

       

        <StyledTeam>
          <TeamHeadingCon>
            <TeamHeadingh3>
              Meet the Team Behind Hypatia Games
            </TeamHeadingh3>
          </TeamHeadingCon>
          <TeamContainer>
            <TeamListCon>
              {TeamDatas.map((TeamData) =>(
              <Team 
               key={TeamData.id}
               ImgUrl={TeamData.ImgUrl}
               FullName={TeamData.full_name}
               Job={TeamData.Job}
               Twitter={TeamData.Social.twitter}
               Facebook={TeamData.Social.facebook}
               LinkedIn={TeamData.Social.linkedIn}
               Instagram={TeamData.Social.instagram}
              />
              ))}
            </TeamListCon>
          </TeamContainer>
        </StyledTeam>
      </StyledAbout>
    </>
  );
}

export default AboutUs;
