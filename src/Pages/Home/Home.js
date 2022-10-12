import {
  Button,
  TextUnderline,
  HomeSection,
  HeroSection,
  HeroSectionBg,
  HeroImg,
  HeroHeadingContainer,
  HeroSectionOverlay,
  HeroHeading,
  HeroHeadingh1,
  HeroTextContainer,
  HeroText,
  HeroDownloadContainer,
  HeroContentContainer,
  HeroDownloadLinkCon,
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
  NFTSectionOverlay,
  NFTImg,
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
} from './styles';

import Hero_IMG from '../../Image/Hero/Hero_IMG.webp';
import NFTIMG from '../../Image/PlayNFT/Play-NFT.webp';
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
          <HeroSectionBg>
            <HeroImg src={Hero_IMG} alt="" />
          </HeroSectionBg>

          <HeroSectionOverlay></HeroSectionOverlay>
          <HeroContentContainer>
            <HeroHeadingContainer>
              <HeroHeading>
                Multi Chain
                <br />
                Racing Game
              </HeroHeading>
              <HeroHeadingh1>
                Redefing Web3 Gaming Experience
              </HeroHeadingh1>
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
          <NFTSectionbg>
            <NFTImg src={NFTIMG} alt="A man Playing Racing Game" />
          </NFTSectionbg>
          <NFTSectionOverlay></NFTSectionOverlay>

          <NFTContentCon>
            <NFTTextContainer>
              <NFTHeadingContainer>
                <NFTHeadingh2>PLAY WITH YOUR NFTs</NFTHeadingh2>
              </NFTHeadingContainer>

              <NFTTextRap>
                <NFTText>
                  Over 4K NFTs are available at the moment to play.
                  Check out our <TextUnderline as="a"> Genesis Collection </TextUnderline>{' '}
                  on Klever
                  <KleverNFT>NFT </KleverNFT>
                  and turn your NFT in life.
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
              <HGTHeadingh2>HYPATIA GAMES AND HGT TOKEN</HGTHeadingh2>
              <HGTText>
                <TextUnderline>Hypatia Games</TextUnderline> is the
                ecosystem for racing blockchain games developed by
                Hypatia Games Studio, currently including
                <TextUnderline> FlamingWheelz</TextUnderline> and more
                yet to come.
                <div>
                  <br></br>
                </div>
                All Hypatia Games are connected by the utility
                governance token <TextUnderline>HGT</TextUnderline>,
                which serves as the primary currency of purchase,
                utility, and action across all the games. HGT is
                designed for use across multiple connected products.
                <div>
                  <br></br>
                </div>
                Most importantly, HGT powers true digital ownership of
                your in-game assets, allowing you complete freedom and
                control over your NFT game items, and can be exchange
                with other crytocurrencies in the real world and
                eventaully be exchange using fiat currency.
              </HGTText>
              <HGTbtnContainer>
                <Button primary as="">
                  Get your HGT Token
                </Button>
              </HGTbtnContainer>
            </HGTTextContainer>
          </HGTContentContainer>
        </HGTContainer>
      </HomeSection>
    </>
  );
}

export default Home;
