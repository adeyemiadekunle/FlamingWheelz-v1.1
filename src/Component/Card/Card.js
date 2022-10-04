import { StyledCard, Cardh3, CardText } from './styles';

function Card({ title, text }) {
  return (
    <>
      <StyledCard>
        <Cardh3>{title}</Cardh3>
        <CardText>{text}</CardText>
      </StyledCard>
    </>
  );
}

export default Card;
