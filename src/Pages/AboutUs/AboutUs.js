import { Button } from '../Home/styles';
import {
  StyledAbout,
  FlamingContainer,
  FlamingSectionbg,
  FlamingContentContainer,
  FlamingTextContainer,
  FlamingHeadingh2,
  FlamingText,
  HypatiaContainer,
  HypatiaSectionbg,
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
} from './styles';

function AboutUs() {
  return (
    <>
      <StyledAbout>
        <FlamingContainer>
          <FlamingSectionbg></FlamingSectionbg>
          <FlamingContentContainer>
            <FlamingTextContainer>
              <FlamingHeadingh2>About FlamingWheelz</FlamingHeadingh2>
              <FlamingText>
                FlamingWheelz is a fantasy RPG mixed with racing for
                anyone who's ever daydreamed about, fantasy creatures and more with your
                driving expertise, smashing the car in front of them
                in traffic, speeding away from cops, getting
                into a racing arena to prove your skills at the
                grandest stage and all of it is fueled by HGT tokens.
                <div>
                  <br />
                </div>
                FlamingWheelz and many more games coming is developed
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
                currency of Heat.  HGT is a cryptocurrency that may be exchanged with other
                cryptocurrencies and fiat currency.
              </FlamingText>
              <FlamingbtnContainer>
                <Button as="">Read the Whitepaper </Button>
              </FlamingbtnContainer>
            </FlamingTextContainer>
          </FlamingContentContainer>
        </FlamingContainer>

        <FlamingFeatureContainer>
          <FeatureSectionbg></FeatureSectionbg>
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
        </FlamingFeatureContainer>

        <HypatiaContainer>
          <HypatiaSectionbg></HypatiaSectionbg>
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
        </HypatiaContainer>
      </StyledAbout>
    </>
  );
}

export default AboutUs;
