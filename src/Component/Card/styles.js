import styled from "styled-components";
import { motion } from 'framer-motion';

export const StyledCard = styled(motion.div)`
width: 500px;
height: 200px;
background: #ffffff;
padding: 10px 20px;
font-size: 1.2rem;
box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(208, 214, 249, 0.19);

:hover {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 6px 20px 0 rgba(208, 214, 249, 0.3);
    transition: all 0.3s,
}

@media screen  and (max-width: 900px){
 width: 650px;
    
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
