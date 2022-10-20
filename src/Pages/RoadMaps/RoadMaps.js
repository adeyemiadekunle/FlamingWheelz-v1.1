import {
  StyledRoadmap,
  RoadMapsContainer,
  RoadMapsHeading,
  RoadmapSection,
  RoadmapDetail,
  RoadmapYear,
  RoadmapQuarter,
  RoadmapList,
  ListCon,
  ViewDetailCon,
  ViewDetailRoadmap,
  RoadmapTerms
} from './styles';

function RoadMaps() {
  return (
    <>
      <StyledRoadmap>
        {/* One */}
        <RoadMapsContainer>
          <div>
            <RoadMapsHeading>Roadmap</RoadMapsHeading>
          </div>
          <RoadmapSection>
            <RoadmapYear>2021</RoadmapYear>
            <RoadmapDetail>
              <RoadmapQuarter>Q3</RoadmapQuarter>
              <div>
                <ListCon>
                  <RoadmapList> Project preparation</RoadmapList>
                  <RoadmapList>
                    {' '}
                    Recruitment of Game Developer
                  </RoadmapList>
                </ListCon>
              </div>
            </RoadmapDetail>
          </RoadmapSection>
          {/* End */}

          <RoadmapSection>
            <RoadmapYear>2022</RoadmapYear>
            <RoadmapDetail>
              <RoadmapQuarter>Q3</RoadmapQuarter>
              <div>
                <ListCon>
                  <RoadmapList>
                    {' '}
                    Game development kick off
                  </RoadmapList>
                  <RoadmapList>
                    {' '}
                    Preparing the In depth of game description of game
                    development
                  </RoadmapList>
                </ListCon>
              </div>
            </RoadmapDetail>
          </RoadmapSection>
          {/* End */}

          <RoadmapSection>
            <RoadmapYear></RoadmapYear>
            <RoadmapDetail>
              <RoadmapQuarter sameyear>Q4</RoadmapQuarter>
              <div>
                <ListCon>
                  <RoadmapList>
                    {' '}
                    Hypatia Games Token (HGT) Private and Pre-Sale
                  </RoadmapList>
                  <RoadmapList>
                    {' '}
                    FlamingWheelz Genesis Edition NFT Inital NFT
                    Offering on KleverNFT Launchpad
                  </RoadmapList>
                  <RoadmapList>
                    Buy and Sell of Genesis Edition NFT on KleverNFT
                    Marketplace
                  </RoadmapList>
                  <RoadmapList>
                    FlamingWheelz Phase 1 and Release of Demo Version
                    (coming soon){' '}
                  </RoadmapList>
                  <RoadmapList>
                    Player can start training and upgrading their NFTs
                    for future Phases{' '}
                  </RoadmapList>
                </ListCon>
              </div>
            </RoadmapDetail>
          </RoadmapSection>
          {/* End */}
          <RoadmapSection>
            <RoadmapYear>2023</RoadmapYear>
            <RoadmapDetail>
              <RoadmapQuarter>Q2</RoadmapQuarter>
              <div>
                <ListCon>
                  <RoadmapList>
                    {' '}
                    FlamingWheelz Phase 2 and Release of full version{' '}
                  </RoadmapList>
                  <RoadmapList>
                    {' '}
                    FlamingWheelz main content: Tournament (Arena
                    mode/PVP), Community League e.t.c{' '}
                  </RoadmapList>
                </ListCon>
              </div>
            </RoadmapDetail>
          </RoadmapSection>
          {/* End */}
          <RoadmapSection>
            <RoadmapYear></RoadmapYear>
            <RoadmapDetail>
              <RoadmapQuarter sameyear>Q3</RoadmapQuarter>
              <div>
                <ListCon>
                  <RoadmapList> FlamingWheelz Phase 3 </RoadmapList>
                </ListCon>
              </div>
            </RoadmapDetail>
          </RoadmapSection>
          {/* End */}
          <ViewDetailCon>
            <ViewDetailRoadmap as="a" href="">
              View detailed roadmaps
            </ViewDetailRoadmap>
            <RoadmapTerms>Terms and Conditions apply, adjustments to this roadmap will be made when required</RoadmapTerms>
          </ViewDetailCon>
        </RoadMapsContainer>
      </StyledRoadmap>
    </>
  );
}

export default RoadMaps;
