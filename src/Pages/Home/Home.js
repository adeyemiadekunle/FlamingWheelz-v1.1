import {
  HomeContainer,
  Hero,
  Herotext,
  Heading,
  HeroButton,
  Button,
  Btncontainer,
  Text,
  Links,
  NewExpCon,
  NewExpHead,
  Row,
  NewExpH5,
  NFTContainer,
  NFTTextCon,
  NFTText,
  Community,
  CommunityHead,
  CommunityH5,
  Patner,
} from './styles';
import Card from '../../Component/Card/Card';
import { Card2 } from '../../Component/Card/Card';
import Sample from '../../Image/NewExperince/image-sample.jpg';

function Home() {
  return (
    <>
      <HomeContainer>
        <Hero>
          <Herotext>
            <Heading>
              Multi Chain
              <br />
              Racing Game
            </Heading>
            <Heading h3>Redefing Web3 Gaming Experince</Heading>
            <Text>
              {' '}
              A Hyper Realistic Racing Games developed by{' '}
              <Links>Hypatia Games,</Links> graced with tournament,
              challenge and best of all <Links>PLAY</Links> and{' '}
              <Links>EARN</Links>{' '}
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

        {/* New Experience Section */}
        <NewExpCon>
          <NewExpHead>
            <div>
              <NewExpH5> DISCOVER ALL OUR</NewExpH5>
              <h2>
                {' '}
                Maps and Streets Experience!
              </h2>
            </div>
            <div>
              <div>See more</div>
            </div>
          </NewExpHead>
          <Row>
            <Card
              image={Sample}
              title="Welcome to FlamingWheelz"
              text="Redefing Gaming Experince"
              button="Play"
              latest="LATEST"
            ></Card>
            <Card
              image={Sample}
              title="Hypatia Games New NFT"
              text="Taking it to the greater height"
              button="Play"
              latest="LATEST"
            ></Card>
          </Row>
        </NewExpCon>

        {/* NFT Section */}
        <NFTContainer>
          <NFTTextCon>
            <Heading h2>PLAY WITH YOUR NFTS</Heading>
            <NFTText>
              Over 4K NFTs are available at the moment to play.
              <br />
              Check out the <Links as="a">
                Genesis Collection
              </Links>{' '}
              and turn your NFT in life.
            </NFTText>
            <Button>Explore NFT Collections</Button>
          </NFTTextCon>
        </NFTContainer>
         
           {/*  The Community */}
         
        <Community>
          <CommunityHead>
            <div>
              <CommunityH5> COMMUNITY</CommunityH5>
              <h2>
                LATEST NEWS
              </h2>
            </div>
            <div>
              <div>Read more</div>
            </div>
          </CommunityHead>
          <Row>
            <Card2
              image={Sample}
              title="Welcome to FlamingWheelz"
              text="Redefing Gaming Experince"
              latest="LATEST"
            ></Card2>
            <Card2
              image={Sample}
              title="Hypatia Games New NFT"
              text="Taking it to the greater height"
              latest="LATEST"
            ></Card2>
          </Row>
        </Community>
        {/* The Patner */}
      
      <Patner>
        
      </Patner>

      </HomeContainer>
    </>
  );
}

export default Home;
