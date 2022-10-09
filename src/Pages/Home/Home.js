import {
  Col,
  Row,
  Button,
  HomeSection,
  HeroSection,
  HeroSectionBg,
  HeroImg,
  HeroHeadingContainer,
  HeroSectionOverlay,
  HeroHeadingh1,
  HeroHeadingh4,
  HeroTextContainer,
  HeroText,
  HeroLink,
  HeroBtnContainer,
  HeroButton,
  Text,
  Links,
  AboutContainer,
  AboutTextCon,
  AboutHeading,
  AboutHeadingh5,
  AboutText,
  AboutRow,
  AboutColumn,
  NFTSection,
  NFTSectionbg,
  NFTSectionOverlay,
  NFTImg,
  NFTHeadingContainer,
  NFTHeadingh2,
  NFTTextContainer,
  NFTText,
  NFTBtnContainer,
  KleverNFT,
  NFTLink,
  CommunityContainer,
  CommunityHeadingContainer,
  CommunityHeadingh5,
  CommunityRow,
  Patner,
  PatnerCon,
  PatnerList,
  PatnerHeading,
  PatnerListcon,
  HGTContainer,
  HGTSectionbg,
  HGTImg,
  HGTSectionOverlay,
  
  
} from './styles';

import Hero_IMG from '../../Image/Hero/Hero_IMG.webp';
import NFTIMG from '../../Image/PlayNFT/Play-NFT.jpg';
import HGTIMG from '../../Image/HGT/HGT.png'
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
      title: ' A Fantasy RPG Mixed',
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

          <HeroHeadingContainer>
            <HeroHeadingh1>
              Multi Chain
              <br />
              Racing Game
            </HeroHeadingh1>
            <HeroHeadingh4>
              Redefing Web3 Gaming Experince
            </HeroHeadingh4>
          </HeroHeadingContainer>

          <HeroTextContainer>
            <HeroText>
              A Hyper Realistic Racing Games developed by{' '}
              <HeroLink as="a" href="">
                Hypatia Games,
              </HeroLink>{' '}
              graced with tournament, challenge and best of all{' '}
              <HeroLink>PLAY</HeroLink> and <HeroLink>EARN.</HeroLink>
            </HeroText>
          </HeroTextContainer>
          <HeroBtnContainer>
            <HeroButton>BUY NFT</HeroButton>
          </HeroBtnContainer>
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
              <Button>Join Us</Button>
            </AboutTextCon>
            <AboutColumn>
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

          <NFTHeadingContainer>
            <NFTHeadingh2>PLAY WITH YOUR NFTS</NFTHeadingh2>
          </NFTHeadingContainer>
          <NFTTextContainer>
            <NFTText>
              Over 4K NFTs are available at the moment to play.
              <br />
              Check out our{' '}
              <NFTLink as="a">Genesis Collection</NFTLink> on Klever
              <KleverNFT>NFT </KleverNFT>
              and turn your NFT in life.
            </NFTText>
          </NFTTextContainer>
          <NFTBtnContainer className="btn">
            <Button
              as="a"
              href="https://www.klevernft.com/launchpad/FWZ-COMING"
            >
              Explore NFT Collections
            </Button>
          </NFTBtnContainer>
        </NFTSection>
        {/* End of NFT */}

        {/*  The Community New */}
        <CommunityContainer>
          <CommunityHeadingContainer>
            <div>
              <CommunityHeadingh5>COMMUNITY</CommunityHeadingh5>
              <h2>LATEST NEWS</h2>
            </div>
            <div>
              <div>Read more</div>
            </div>
          </CommunityHeadingContainer>
          <CommunityRow>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </CommunityRow>
        </CommunityContainer>
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
              <HGTImg src={HGTIMG} alt="Box full of Coins" />
            </HGTSectionbg>
            <HGTSectionOverlay></HGTSectionOverlay>
            <div className='headingCon'>
              <h2></h2>
            </div>
            <div className='HGT-text'>
              <p></p>
            </div>
          </HGTContainer>



      </HomeSection>
    </>
  );
}

export default Home;
