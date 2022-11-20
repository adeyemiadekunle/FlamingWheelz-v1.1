import styled from "styled-components";
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)`
width: 500px;
height: 200px;
background: #ffffff;
padding: 10px 20px;
font-size: 1.2rem;


@media screen  and (max-width: 900px){
 width: 600px;
    
};


@media screen and (max-width: 480px) {
    width: 350px;
    font-size: 1rem;
};

`

export const Cardh3 = styled.h3`
margin-top: 5px;
margin-bottom: 15px;
color: #ff0033;

`
export const CardText = styled.p`
color: black;

`
