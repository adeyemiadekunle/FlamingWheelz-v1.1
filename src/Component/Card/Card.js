import {
  StyledCard,
  StyledText,
  Cardh6,
  Cardh2,
  Cardbtn,
  Cardh4,
} from './styles';

export function Card2({ image, title, text, latest }) {
  const Styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${image})`,
  };
  return (
    <>
      <StyledCard style={{ Styles }}>
        <StyledText>
          <Cardh6>{latest}</Cardh6>
          <Cardh2>{title}</Cardh2>
          <Cardh4>{text}</Cardh4>
        </StyledText>
      </StyledCard>
    </>
  );
}

function Card({ image, title, text, latest, button }) {
  const Styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${image})`,
  };
  return (
    <>
      <StyledCard style={{ Styles }}>
        <StyledText>
          <Cardh2>{title}</Cardh2>
          <Cardh4>{text}</Cardh4>
          <Cardbtn>{button}</Cardbtn>
        </StyledText>
      </StyledCard>
    </>
  );
}

export default Card;
