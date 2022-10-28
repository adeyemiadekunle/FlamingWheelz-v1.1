import style from './Button.css';
import { motion } from 'framer-motion';

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <motion.a
      {...props}
      className="primaryButton"
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
      className="normalButton"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};
