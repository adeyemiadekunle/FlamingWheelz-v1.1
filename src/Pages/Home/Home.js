import {
  HomeContainer,
  Hero,
  Herotext,
  HeroHeading,
  HeroButton,
  Button,
  Btncontainer,
  Text,
  Links,
  AboutCon,
  Col,
  Row,
  AboutTextCon,
  AboutHeading,
  AboutH5,
  AboutText,
  NFTContainer,
  NFTHeading,
  NFTTextCon,
  NFTText,
  Community,
  CommunityHead,
  CommunityH5,
  Patner,
  KleverNFT,
} from './styles';
import Card from '../../Component/Card/Card';
import Sample from '../../Image/NewExperince/image-sample.jpg';
import NewsCard from '../../Component/News/NewCard';

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

  return (
    <>
      <HomeContainer>
        <Hero>
          <Herotext>
            <HeroHeading>
              Multi Chain
              <br />
              Racing Game
            </HeroHeading>
            <HeroHeading heroh4>
              Redefing Web3 Gaming Experince
            </HeroHeading>
            <Text>
              {' '}
              A Hyper Realistic Racing Games developed by{' '}
              <Links as="a" href="">
                Hypatia Games,
              </Links>{' '}
              graced with tournament, challenge and best of all{' '}
              <Links>PLAY</Links> and <Links>EARN</Links>{' '}
            </Text>
            <Btncontainer>
              <HeroButton as="a"> Learn More</HeroButton>
              <HeroButton primary as="a">
                {' '}
                Buy NFT
              </HeroButton>
            </Btncontainer>
          </Herotext>
        </Hero>

        {/* About FlamingWheelz Section */}
        <AboutCon>
          <Row>
            <AboutTextCon>
              <AboutH5> OVERVIEW</AboutH5>
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
            <Col>
              {Abouts.map((about) => (
                <Card
                  key={about.id}
                  title={about.title}
                  text={about.text}
                />
              ))}
            </Col>
          </Row>
        </AboutCon>

        {/* NFT Section */}
        <NFTContainer>
          <NFTTextCon>
            <NFTHeading>PLAY WITH YOUR NFTS</NFTHeading>
            <NFTText>
              Over 4K NFTs are available at the moment to play.
              <br />
              Check out our <Links as="a">
                Genesis Collection
              </Links>{' '}
              on Klever<KleverNFT>NFT </KleverNFT>
              and turn your NFT in life.
            </NFTText>
            <Button
              as="a"
              href="https://www.klevernft.com/launchpad/FWZ-COMING"
            >
              Explore NFT Collections
            </Button>
          </NFTTextCon>
        </NFTContainer>

        {/*  The Community */}

        <Community>
          <CommunityHead>
            <div>
              <CommunityH5>COMMUNITY</CommunityH5>
              <h2>LATEST NEWS</h2>
            </div>
            <div>
              <div>Read more</div>
            </div>
          </CommunityHead>
          <Row>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </Row>
        </Community>

        {/* The Patner */}

        <Patner></Patner>
      </HomeContainer>
    </>
  );
}

export default Home;
