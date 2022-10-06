import Image from '../../Image/NewExperince/image-sample.jpg';
import {
  StyleCard,
  NewsImage,
  NewsTextCon,
  NewsTagCon,
  NewsHeading,
  NewsCategory
} from './styles';

function NewsCard( ) {
  return (
    <>
      <StyleCard>
        <NewsImage src={Image} />
        <NewsTextCon>
          <NewsTagCon>
            <NewsCategory>Blockchain</NewsCategory>
            <p>Oct 6, 2022</p>
          </NewsTagCon>
          <NewsHeading> Article Heading</NewsHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in cumque dignissimos dicta atque optio
            odio esse quidem placeat ut.
             <div><br /></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in cumque dignissimos dicta atque optio
            odio esse quidem placeat ut.
          </p>
        </NewsTextCon>
      </StyleCard>
    </>
  );
}

export default NewsCard;
