import styled from "styled-components";



export const StyleCard  = styled.div`
background: white;
width: 400px;
height: 500px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s,
}

`

export const NewsImage = styled.img`
width: 100%;
height: 200px;
`

export const NewsTextCon = styled.div`
padding: 20px;

` 

export const NewsTagCon = styled.div`
display: flex;
gap: 10px;
margin-bottom: 10px;
font-size: 0.8rem;

`

export const NewsHeading = styled.h2`
 font-size: 1.5rem;
 padding-bottom: 10px;
`

export const NewsCategory= styled.p`
color: #ff0033;
`
