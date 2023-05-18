import '../../../styles/news/newscard.scss';

export default function CardItem({ data }) {
    const { imageData, category, title, author } = data;

    return (
        <div>
            <div className='card__image'>
                <img src={imageData} alt />
            </div>
            <div className='card__content'>
                <div className='card__category'><p>{category}</p></div>
                <h3 className='card__title'>{title}</h3>
                <div className='card__author'>
                    <div className='card__author__left'>
                        <div className='author__image'>
                            <img src={author.image} alt />
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