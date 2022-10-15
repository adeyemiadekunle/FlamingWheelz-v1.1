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
  HypatiaText,
  FlamingFeatureContainer,
  FeatureSectionbg,
  FeatureContentContainer,
  FeatureTextContainer,
  FeatureHeadingh2,
  FeatureText,
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
                FlamingWheelz is a fantasy RPG mixed with racing for anyone who's ever daydreamed about raising and fighting dragons, fantasy creatures and more with your driving expertise, smashing the car in front of them in traffic, speeding away from cops, or driving up a half-finished building at a construction site, getting into racing arena to prove your skills at the grandest stage and more of exciting scenarios in the future update.
              </FlamingText>
            </FlamingTextContainer>
          </FlamingContentContainer>
        </FlamingContainer>

        <FlamingFeatureContainer>
          <FeatureSectionbg></FeatureSectionbg>
          <FeatureContentContainer>
            <FeatureTextContainer>
              <FeatureHeadingh2>The Features</FeatureHeadingh2>
              <FeatureText><ul>
                <li>Genenis NFTs Edition of characters that is unique, and come with its distinctive bragging rights!</li>
                <li>Players turn used materials to get redemption points(RP) to redeem upgrades for their characters.</li>
                <li>Play using Android, IOS and System PC.</li>
                <li>Training grounds that allow players to improve their characters to their gameplay style.</li>
                <li>Play and Earn HGT Token, which player can exchange to other cryptocurrencies in the real world and fiat currency.</li>
                <li></li>
                  </ul></FeatureText>
            </FeatureTextContainer>
          </FeatureContentContainer>
        </FlamingFeatureContainer>

        <HypatiaContainer>
          <HypatiaSectionbg></HypatiaSectionbg>
          <HypatiaContentContainer>
            <HypatiaTextContainer>
              <HypatiaHeadingh2>About Hypatia Games</HypatiaHeadingh2>
              <HypatiaText>
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quae odio aperiam cumque dolorem ut, beatae in
                dolore consequuntur incidunt sapiente? Labore ab
                molestiae, aliquid animi sed sapiente exercitationem
                iusto architecto rerum repellendus iure culpa nostrum,
                quidem deserunt quo expedita reprehenderit qui harum
                at illo neque voluptates! Magnam assumenda quibusdam
                doloremque.
              </HypatiaText>
            </HypatiaTextContainer>
          </HypatiaContentContainer>
        </HypatiaContainer>
      </StyledAbout>
    </>
  );
}

export default AboutUs;
