import {
  Button,
  TextUnderline,
  HomeSection,
  HeroSection,
  HeroSectionBg,
  HeroHeadingContainer,
  HeroHeading,
  HeroHeadingh1,
  HeroTextContainer,
  HeroText,
  HeroDownloadContainer,
  HeroContentContainer,
  HeroDownloadLinkCon,
  HeroBtnContainer,
  HeroButton,
  AboutContainer,
  AboutTextCon,
  AboutHeading,
  AboutHeadingh5,
  AboutText,
  AboutRow,
  AboutColumn,
  AboutFeature,
  NFTSection,
  NFTSectionbg,
  NFTContentCon,
  NFTHeadingContainer,
  NFTHeadingh2,
  NFTTextContainer,
  NFTTextRap,
  NFTText,
  NFTBtnContainer,
  KleverNFT,
  Community,
  CommunityContainer,
  CommunityHeadingContainer,
  CommunityHeadingh5,
  CommunityRow,
  CommunityReadMore,
  CommunityReadMoreBtn,
  CommBtnContainer,
  Patner,
  PatnerCon,
  PatnerList,
  PatnerHeading,
  PatnerListcon,
  HGTContainer,
  HGTSectionbg,
  HGTImg,
  HGTSectionOverlay,
  HGTContentContainer,
  HGTTextContainer,
  HGTHeadingh2,
  HGTText,
  HGTbtnContainer,
  RoadMap,
  RoadMapContainer,
  RoadMapRow1,
  RoadMapRow2,
  RoadMapDivide,
  RoadMapText,
  RoadMapYear,
  ViewDetailRoadmap,
  RoadmapTerms,
  RoadMapHeading,
} from './styles';

// import HGTIMG from '../../Image/HGT/HGT.png';
import Card from '../../Component/Card/Card';
import NewsCard from '../../Component/News/NewCard';
import Klever from '../../Image/Patner/Klever.png';
import KleverKid from '../../Image/Patner/KleverKid.png';
import Unreal from '../../Image/Patner/Unreal.png';
import Avax from '../../Image/Patner/Avax.png';
import Dragon from '../../Image/Patner/Dragon.png';
import EpicGame from '../../Image/Patner/Epicgame.png';

function Home() {
  const Abouts = [
    {
      id: 1,
      title: 'A Fantasy RPG Mixed',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, quis!',
    },
    {
      id: 2,
      title: 'Genesis Edition',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, quis!',
    },

    {
      id: 3,
      title: 'Commemoratic Tournament',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, quis!',
    },
  ];

  const Patners = [
    { id: 0, img: EpicGame, title: 'EpicGame' },
    { id: 1, img: Klever, title: 'Klever' },
    { id: 2, img: Unreal, title: 'Unreal' },
    { id: 3, img: Avax, title: 'Avax' },
    { id: 4, img: Dragon, title: 'Dragon' },
    { id: 5, img: KleverKid, title: 'KleverKid' },
  ];

  return (
    <>
      <HomeSection>
        {/* Hero */}
        <HeroSection>
          <HeroSectionBg></HeroSectionBg>
          {/* <HeroSectionOverlay></HeroSectionOverlay> */}
          <HeroContentContainer>
            <HeroHeadingContainer>
              <HeroHeadingh1>
                Redefing Web3 Gaming Experience
              </HeroHeadingh1>
              <HeroHeading>
                A Multi Chain
                <br />
                Fantasy Racing Game
              </HeroHeading>
            </HeroHeadingContainer>

            <HeroTextContainer>
              <HeroText>
                A Hyper Realistic Racing Games developed by{' '}
                <TextUnderline as="a" href="">
                  Hypatia Games,
                </TextUnderline>{' '}
                graced with tournament, challenge and best of all{' '}
                <TextUnderline>PLAY</TextUnderline> and{' '}
                <TextUnderline>EARN.</TextUnderline>
              </HeroText>
            </HeroTextContainer>
            <HeroBtnContainer>
              <HeroButton as="">Whitepaper</HeroButton>
            </HeroBtnContainer>
          </HeroContentContainer>

          <HeroDownloadContainer>
            <div>Download latest version</div>
            <HeroDownloadLinkCon>
              <div>Google Play</div>
              <div>App Store</div>
              <div>Windows</div>
            </HeroDownloadLinkCon>
          </HeroDownloadContainer>
        </HeroSection>
        {/* End of Hero */}

        {/* About FlamingWheelz Section */}
        <AboutContainer>
          <AboutRow>
            <AboutTextCon>
              <AboutHeadingh5> OVERVIEW</AboutHeadingh5>
              <AboutHeading>What is FlamingWheelz?</AboutHeading>
              <AboutText>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repellat, quaerat accusamus fuga ratione
                expedita cumque id dolorem commodi fugiat porro sunt
                saepe harum illum, distinctio, dolores repudiandae
                voluptas iusto architecto.
              </AboutText>
              <Button normal>Join Us</Button>
            </AboutTextCon>
            <AboutColumn>
              <AboutFeature>Key Features</AboutFeature>
              {Abouts.map((about) => (
                <Card
                  key={about.id}
                  title={about.title}
                  text={about.text}
                />
              ))}
            </AboutColumn>
          </AboutRow>
        </AboutContainer>
        {/* End of About */}

        {/* NFT Section */}
        <NFTSection>
          <NFTSectionbg></NFTSectionbg>
          <NFTContentCon>
            <NFTTextContainer>
              <NFTHeadingContainer>
                <NFTHeadingh2>Play and Earn with NFTs</NFTHeadingh2>
              </NFTHeadingContainer>

              <NFTTextRap>
                <NFTText>
                  A Genesis Collection of 4K NFTs that can really play
                  a role in{' '}
                  <TextUnderline>FlamingWheelz</TextUnderline>, Check
                  out on Klever
                  <KleverNFT>NFT </KleverNFT>
                  and turn your NFTs to life.
                </NFTText>
              </NFTTextRap>

              <NFTBtnContainer className="btn">
                <Button
                  as="a"
                  href="https://www.klevernft.com/launchpad/FWZ-COMING"
                >
                  Explore NFT Collections
                </Button>
              </NFTBtnContainer>
            </NFTTextContainer>
          </NFTContentCon>
        </NFTSection>
        {/* End of NFT */}

        {/*  The Community New */}

        <Community>
          <CommunityContainer>
            <CommunityHeadingContainer>
              <div>
                <CommunityHeadingh5>COMMUNITY</CommunityHeadingh5>
                <h2>LATEST NEWS</h2>
              </div>
              <div>
                <CommunityReadMore>Read more</CommunityReadMore>
              </div>
            </CommunityHeadingContainer>
            <CommunityRow>
              <NewsCard></NewsCard>
              <NewsCard></NewsCard>
              <NewsCard></NewsCard>
            </CommunityRow>
            <CommBtnContainer>
              <CommunityReadMoreBtn>Read More</CommunityReadMoreBtn>
            </CommBtnContainer>
          </CommunityContainer>
        </Community>
        {/* End of Community */}

        {/* The Patner */}
        <Patner>
          <PatnerCon>
            <div>
              <PatnerHeading>Our Partner</PatnerHeading>
            </div>
            <PatnerListcon>
              {Patners.map((patner) => (
                <PatnerList
                  key={patner.id}
                  src={patner.img}
                  alt={patner.title}
                />
              ))}
            </PatnerListcon>
          </PatnerCon>
        </Patner>
        {/* End of Patner */}

        {/* HGT Token */}
        <HGTContainer>
          <HGTSectionbg>
            <HGTImg alt="Box full of Coins" />
          </HGTSectionbg>
          <HGTSectionOverlay></HGTSectionOverlay>

          <HGTContentContainer>
            <HGTTextContainer className="headingCon">
              <HGTHeadingh2>
                Utility and Governance <img src="" alt="" /> HGT Token{' '}
              </HGTHeadingh2>
              <HGTText>
                HGT is the utility and governance token in Hypatia
                Games platform, providing sustainable economic model
                for Hypatia ecosystem.
              </HGTText>
              <HGTbtnContainer>
                <Button primary as="">
                  Token Economics
                </Button>
              </HGTbtnContainer>
            </HGTTextContainer>
          </HGTContentContainer>
        </HGTContainer>
        {/*  End HGT Token */}

        {/* RoadMap */}
        <RoadMap>
          <RoadMapHeading>RoadMap</RoadMapHeading>
          <RoadMapContainer>
            <RoadMapRow1 right>
              <RoadMapYear>
                <p>2021</p>
                <p>Q3</p>
              </RoadMapYear>

              <RoadMapText>
                <p>Game development kick off</p>
                <p>
                  Preparing the In depth of game description of game
                  development
                </p>
              </RoadMapText>
              <RoadMapYear>
                <p>2022</p>
                <p>Q4</p>
              </RoadMapYear>
              <RoadMapText morepadding>
                <p>
                  FlamingWheelz Phase 2 and Release of full version
                </p>
                <p>
                  FlamingWheelz main content: Tournament (Arena
                  mode/PVP), Community League e.t.c
                </p>
              </RoadMapText>
            </RoadMapRow1>
            <RoadMapDivide></RoadMapDivide>
            <RoadMapRow2>
              <RoadMapText>
                <p>Project Preparation</p>
                <p>Recruitment of Developers</p>
              </RoadMapText>
              <RoadMapYear>
                <p>Q3</p>
                <p>2022</p>
              </RoadMapYear>
              <RoadMapText>
                <p>Hypatia Games Token (HGT) Private and Pre-Sale</p>
                <p>
                  FlamingWheelz Genesis Edition NFT Inital NFT
                  Offering on KleverNFT Launchpad
                </p>
                <p>
                  Buy and Sell of Genesis Edition NFT on KleverNFT
                  Marketplace
                </p>
                <p>
                  FlamingWheelz Phase 1 and Release of Demo Version
                  (coming soon)
                </p>
                <p>
                  Player can start training and upgrading their NFTs
                  for future Phases
                </p>
              </RoadMapText>
              <RoadMapYear>
                <p>Q2</p>
                <p>2023</p>
              </RoadMapYear>
            </RoadMapRow2>
          </RoadMapContainer>
          <ViewDetailRoadmap as="a" href="">
            View detailed roadmaps
          </ViewDetailRoadmap>
          <RoadmapTerms>
            Terms and Conditions apply, adjustments to this roadmap
            will be made when required
          </RoadmapTerms>
        </RoadMap>
      </HomeSection>
    </>
  );
}

export default Home;
