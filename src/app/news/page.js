'use client';
import React, { useState } from 'react';
import '../../styles/news/news.scss';
import CardItem from './component/CardItem';

export default function Page() {
    // Dummy data for multiple card items
    const [visibleItems, setVisibleItems] = useState(9);
    const cardItems = [
        {
            id: 1,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Jason Francisco',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 2,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Elizabeth Slavin',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 3,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 4,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 5,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 6,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 7,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 8,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 9,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },
        {
            id: 10,
            imageData: 'https://picsum.photos/200',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            author: {
                image: 'https://picsum.photos/200',
                name: 'Ernie Smith',
                publishedDate: 'August 20, 2022'
            }
        },

        
    ]

    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
    };

    return (
        <div className='container'>
            <div className='post--section'>
                <div className='post__title'>
                    <h3>Latest Post</h3>
                </div>
                <div className='post'>
                    {cardItems.slice(0, visibleItems).map(card => (
                        <div className='card' key={card.id}>
                            <CardItem data={card} />
                        </div>
                    ))}
                </div>
                {visibleItems < cardItems.length && (
                    <button onClick={loadMore} type='button' className='load-more'>
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
}