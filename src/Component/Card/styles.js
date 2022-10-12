import styled from "styled-components";

export const StyledCard = styled.div`
width: 550px;
height: 200px;
background: #ffffff;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(208, 214, 249, 0.19);

:hover {
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 6px 20px 0 rgba(208, 214, 249, 0.3);
    transition: all 0.3s,
}

@media screen  and (max-width: 900px){
 width: 600px;
    
}

@media screen  and (max-width: 768px){
    width: 550px;
}

@media screen and (max-width: 480px) {
    width: 350px;
}

`

export const Cardh3 = styled.h3`
margin-top: 10px;
margin-bottom: 15px;
color: #ff0033;

`
export const CardText = styled.p`
color: black;

`
