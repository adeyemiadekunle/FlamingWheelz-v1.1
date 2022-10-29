import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLoader = {
  width: '10px',
  height: '10px',
  margin: '40px auto',
  borderRadius: '50%',
  background: '#ff0033',
};

const LoaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, 30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
    },
  },
};



function Loader() {
  return (
    <>
      <LoaderContainer>
        <motion.div
          style={StyledLoader}
          variants={LoaderVariants}
          animate="animationOne"
        >
        </motion.div>
      </LoaderContainer>
    </>
  );
};

export default Loader;

