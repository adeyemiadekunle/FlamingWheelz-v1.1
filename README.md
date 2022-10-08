# The project Guide
 
# The Color Code

red color: #FF0033
white color: #FFFFFF
offwhite color: #F3F3F3

 # Background

 blue color: #33aaf5


# The Font Family


{/* <Herotext>
            <HeroHeading>
              Multi Chain
              <br />
              Racing Game
            </HeroHeading>
            <HeroHeading heroh4>
             
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
          </Herotext> */}







{/* Hero */}
        <Hero_Section>
          <Hero_Section_Bg>
            <Hero_Img src={Hero_IMG} alt="" />
          </Hero_Section_Bg>
          <div className='bg-overlay'></div>
          <div className='hero_text'></div>
          <div className='hero_sub_text'></div>
          <div className='hero-text'></div>
          <div className='hero_btn'></div>

          {/* <Herotext>
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
          </Herotext> */}
          
        </Hero_Section>





        
// Home Section
export const HomeSection = styled.div`
  margin: auto;
`;

// Hero Section
export const HeroSection = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`;


// export const HeroSectionBg = styled.div`
//   height: 100%;
//   left: 0;
//   position: absolute;
//   width: 100%;
//   z-index: -1;
// `;

// export const HeroImg = styled.img`
//   height: 100%;
//   left: 0;
//   position: absolute;
//   width: 100%;
//   top: 0;
//   border-style: none;
//   object-fit: cover;
//   object-position: center;
// `;

// export const HeroSectionOverlay = styled.div`
//   height: 100%;
//   left: 0;
//   top: 0;
//   width: 100%;
//   position: absolute;
//   z-index: -1;
//   background: rgba(0, 0, 0, 0.47);
// `;

// export const HeroHeadingContainer = styled.div`
//   z-index: 1;
//   max-width: 1300px;
//   margin: auto;
//   border: 1px solid red;
//   width: 100%;
//   padding: 20px 0px;
// `;

// export const HeroHeadingh1 = styled.h1`
//   font-size: 4rem;
//   text-align: left;
//   font-weight: bold;
//   color: white;
//   padding-bottom: 20px;
// `;

// export const HeroHeadingh4 = styled.h4`
//   font-size: 1.5rem;
//   color: #33aaf5;
// `;

// export const HeroTextContainer = styled.div`
//   z-index: 1;
//   max-width: 1300px;
//   margin: auto;
//   width: 100%;
//   padding: 20px 0px;
// `;




export const HeroButton = styled.button`
  background: red;
  border-radius: 6px;
  border: 2px solid #ff0033;
  color: white;
  padding: 1em 1.5em;
  width: 150px;
  text-align: center;

  &:hover {
    border: 2px solid white;
    transition: 0s;
    cursor: pointer;
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      color: white;
      border: 2px solid white;

      &:hover {
        border: 2px solid #ff0033;
      }
    `}
`;




export const Btncontainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 40px;
  justify-content: left;
  padding-left: 3px;
`;
