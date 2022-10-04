import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Head = styled.div`
  border-bottom: 1px solid grey;
  padding: 0 30px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0px;
  margin-right: 0px;
  z-index: 2;
  overflow: hidden;
  background: ${(props) => props.theme.background.primary};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.dark};
  font-weight: 500;
  font-size: 1.2rem;
  gap: 30px;


  &:hover {
    border-bottom: 2px solid #ff0033;
    transition: all 0.5s;
  }
`;

export const NavContainer = styled.div`
  display: flex;
`;

// export const SignBtn = styled.button`
//   padding: 8px 40px;
//   border-radius: 20px;
//   background: blue;
//   border: 2px solid blue;
//   color: white;
// `;

export const DownloadBtn = styled.button`
  padding: 8px 30px;
  border-radius: 20px;
  margin-left: 10px;
  background: green;
  border: 1px solid green;
  color: white;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Img = styled.img`
  width: 200px;
`;
