import styled from 'styled-components';

const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #ff0033;
height: 100vh;
font-size: 24px;

`;

export default function Loader(){
  return (
    <Loading>
      <div>Loading...</div>
    </Loading>
  );
}


