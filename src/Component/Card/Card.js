import { StyledCard, Cardh3, CardText } from './styles';

function Card({ title, text }) {
  return (
    <>
      <StyledCard 
      whileHover={{scale: 1.02, 
        boxShadow: '0 4px 8px 0 rgba(255, 255, 255, 0.3), 0 6px 20px 0 rgba(208, 214, 249, 0.3)',
        transition: 0.3,
      }}
      >
        <Cardh3>{title}</Cardh3>
        <CardText>{text}</CardText>
      </StyledCard>
    </>
  );
}

export default Card;
