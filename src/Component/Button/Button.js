import { motion } from 'framer-motion';

const StyledPrimaryBtn = {
  display: 'block',
  marginTop: '10px',
  padding: '15px 30px',
  background: 'transparent',
  borderRadius: '5px',
  border: '2px solid #fff',
  color: '#fff',
  fontWeight: 'bold',
  outlineOffset: '2px',
  width: 'fit-content',
  maxWidth: '100%',
  fontSize: '1.2rem',
};

const StyledNormalBtn = {
  display: 'block',
  marginTop: '10px',
  padding: '15px 30px',
  background: '#ff0033',
  borderRadius: '5px',
  border: '2px solid #ff0033',
  color: '#fff',
  fontWeight: 'bold',
  outlineOffset: '2px',
  width: 'fit-content',
  maxWidth: '100%',
  fontSize: '1.2rem',
};



export const PrimaryButton = ({ children, ...props }) => {
  return (
    <motion.a
      {...props}
      style={StyledPrimaryBtn}
      whileHover={{ scale: 1.1, border: '2px solid lightgray' }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export const NormalButton = ({ children, ...props }) => {
  return (
    <motion.a
      {...props}
      style={StyledNormalBtn}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};
