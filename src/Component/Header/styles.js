import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* top: 0;
right: 0;
left: 0;
z-index: 2; */
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-left: 20px;

  &:hover {
    border-bottom: 1px solid #ff0033;
  }
`;

export const Nav = styled.div`
  display: flex;
  padding: 0 20px;
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
  border: green;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
`;

export const Img = styled.img`
  width: 200px;
`;
export const ImgCon = styled.div`
  padding-left: 10px;
`;
