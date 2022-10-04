import styled from "styled-components";

export const StyledCard = styled.div`
width: 550px;
height: 200px;
outline: 2px solid whitesmoke;
border-radius: 7px;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s,
}

`

export const Cardh3 = styled.h3`
margin-top: 10px;
margin-bottom: 15px;
color: red;

`
export const CardText = styled.p`
color: black;
`
