'use client';
import { Card, Carousel, Col, Row, Tag } from 'antd';
import styles from '../../../../styles/event.module.css';
import GalleryEvents from '../../GalleryEvents';

const CarouselEvents = () => {
    const galleryItems = [
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 1',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        {
            title: 'The Impact of Technology on the Workplace: How Technology is Changing 2',
            imageUrl: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
        },
        // Add more items as needed
    ];
    const cardCols = galleryItems.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6} >
            <Card
                className={styles['gallery-card']}
                hoverable
                cover={<img alt={item.title} src={item.imageUrl} />}
            >
                <div  className={styles['gallery-item']}> 
                <Row>
                    <Tag color="#4B6BFB" className={styles.small_tag}
                    >
                        New
                    </Tag>
                    <Tag color="#FF4B16" className={styles.small_tag}
                    >
                        Buy
                    </Tag>
                </Row>
                <Card.Meta description="Tue, May 16, 2023, 10:00 am (UTC+7)" />
                <Card.Meta
                    title={<div className={styles.card_title}>{item.title}</div>}
                />
                <span className={styles['card_organizer']}>Organizer</span>  
                </div>
            </Card>
        </Col> 
    ));

    const rows = [];
    for (let i = 0; i < cardCols.length; i += 4) {
        rows.push(
            <div>
            <Row key={i} gutter={[16, 16]} style={{marginTop:'50px'}} >
                {cardCols.slice(i, i + 4)}
            </Row>
            </div>

        );
    }
  return (
    <Carousel dots={{ className: 'custom-dots'}} dotPosition='top'>
        {rows}
    </Carousel>
  );
};

export default CarouselEvents;
