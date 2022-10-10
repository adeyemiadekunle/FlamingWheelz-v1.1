import Image from '../../Image/NewExperince/image-sample.jpg';
import {
  StyleCard,
  NewsImage,
  NewsTextCon,
  NewsTagCon,
  NewsHeading,
  NewsCategory,
  NewsPara,
 
} from './styles';

function NewsCard( ) {
  return (
    <>
      <StyleCard>
        <NewsImage src={Image} />
        <NewsTextCon>
          <NewsTagCon>
            <NewsCategory>Blockchain</NewsCategory>
            <div><p>Oct 6, 2022</p></div>
          </NewsTagCon>
          <NewsHeading> Article Heading</NewsHeading>
          <NewsPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in cumque dignissimos dicta atque optio
            odio esse quidem placeat ut.
             <div><br /></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in cumque dignissimos dicta atque optio
            odio esse quidem placeat ut.
          </NewsPara>
        </NewsTextCon>
      </StyleCard>
    </>
  );
}

export default NewsCard;
