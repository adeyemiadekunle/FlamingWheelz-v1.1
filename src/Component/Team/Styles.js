import styled from "styled-components";

export const TeamCard = styled.div`
width: 30.3333%;
margin-bottom: 30px;
margin-top: 30px;
border: 2px solid #fff;
border-radius: 5px;
transition: 0.3s;


:hover {
    color: #33aaf5;
    transition: 0.3s;
   
  }

`

export const TeamInfo = styled.div`
padding: 40px 40px 22px;
text-align: center;
color: white;
`

export const ImgHolder = styled.div`
width: 100%;
max-width: 240px;
margin: 0 auto 26px;
` 

export const IMG = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 100%;
vertical-align: middle;
max-width: 100%;
`

export const TeamName = styled.h3`
margin: 0 0 8px;
padding: 0;
font-size: 22px;
font-weight: 500px;

`

export const TeamDesc = styled.h4`
margin: 0;
padding: 0;
font-size: 18px;
`

export const TeamSocial = styled.div`
color: white;
justify-content: center;
align-items: center;
`

export const SocialList = styled.ul`
list-style-type: none;
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
padding: 10px;
margin: 0px 30px;
background-color: #0b0d17;
border-radius: 15px 50px;




`