import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/news/slide.scss";
import "../../../styles/news/newscard.scss";
import '../../../styles/button/labelcategory.scss';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LabelCategory from 'src/components/buttons/LabelCategory';


export default function Slide() {
    const cardItems = [
        {
            id: 1,
            imageData: "https://picsum.photos/seed/picsum/1175/434",
            category: "Technology",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            author: {
                image: "https://picsum.photos/seed/picsum/1175/434",
                name: "Author 1",
                publishedDate: 'August 20, 2022'
            },
        },
        // Add more items here
        {
            id: 2,
            imageData: "https://picsum.photos/seed/picsum/1175/434",
            category: "Technology",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            author: {
                image: "https://picsum.photos/seed/picsum/1175/434",
                name: "Author 2",
                publishedDate: 'August 20, 2022'
            },
        },
        {
            id: 3,
            imageData: "https://picsum.photos/seed/picsum/1175/434",
            category: "Technology",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            author: {
                image: "https://picsum.photos/seed/picsum/1175/434",
                name: "Author 2",
                publishedDate: 'August 20, 2022'
            },
        },
        {
            id: 4,
            imageData: "https://picsum.photos/seed/picsum/1175/434",
            category: "Technology",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            author: {
                image: "https://picsum.photos/seed/picsum/1175/434",
                name: "Author 2",
                publishedDate: 'August 20, 2022'
            },
        }, {
            id: 5,
            imageData: "https://picsum.photos/seed/picsum/1175/434",
            category: "Technology",
            title: "The Impact of Technology on the Workplace: How Technology is Changing",
            author: {
                image: "https://picsum.photos/seed/picsum/1175/434",
                name: "Author 2",
                publishedDate: 'August 20, 2022'
            },
        },

        // ...
    ];

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {cardItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="swiper__block">
                            <img src={item.imageData} alt="Slide" />
                            <div className="swiper__description">
                                <div className="swiper__content">
                                    <div className="swiper__category">
                                       <LabelCategory classNames="label__category-bold" text={item.category} />
                                    </div>
                                    <h3 className="swiper__title">{item.title}</h3>
                                    <div className="swiper__author">
                                        <div className="swiper__author__left">
                                            <div className="author__image">
                                                <img src={item.author.image} alt="Author" />
                                            </div>
                                            <p>{item.author.name}</p>
                                            <p>{item.author.publishedDate}</p>
                                        </div>
                                        <div className="swiper__author__right">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}