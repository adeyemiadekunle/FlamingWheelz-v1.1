import styled from "styled-components";
import Sample from '../../Image/NewExperince/image-sample.jpg'

export const StyledCard = styled.div`
background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${Sample});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

width: 550px;
height: 275px;
border: 1px solid grey;
border-radius: 7px;

`
export const StyledText = styled.div`
position: absolute;
color: white !important;
left: 15px;
bottom: 10px;
`
export const Cardh6 = styled.h6`
text-align: center;
padding: 3px;
width: 50px;
color: white;
background: ${props=>props.theme.red};

`
export const Cardh2 = styled.h2`
margin-top: 10px;
margin-bottom: 15px;
color: white;

`
export const Cardh4 = styled.h4`
color: white;
`

export const Cardbtn = styled.button`
margin-top: 10px;
padding: 10px 50px;
color:${props=> props.theme.color};
background: ${props=> props.theme.red};
border-radius: 20px;
border: ${props=> props.theme.red};

  :hover {
      opacity: 0.8;
  }

`