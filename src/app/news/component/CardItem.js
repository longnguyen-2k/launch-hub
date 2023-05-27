import '../../../styles/news/newscard.scss';
import LabelCategory from 'src/components/buttons/LabelCategory';
import '../../../styles/button/labelcategory.scss';

export default function CardItem({ data }) {
    const { imageData, category, title, author } = data;

    return (
        <div>
            <div className='card__image'>
                <img src={imageData} />
            </div>
            <div className='card__content'>
                <div className='card__category'><LabelCategory classNames="label__category" text={category}/></div>
                <h3 className='card__title'>{title}</h3>
                <div className='card__author'>
                    <div className='card__author__left'>
                        <div className='author__image'>
                            <img src={author.image} />
                        </div>
                        <p> {author.name}</p>
                    </div>
                    <div className='card__author__right'>
                        <p>{author.publishedDate}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};