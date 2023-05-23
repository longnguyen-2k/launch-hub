'use client';
import { Carousel } from 'antd';
import style from '../../../../styles/event.module.css';


const CarouselEvents = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <Carousel dots={{ className: 'custom-dots'}} dotPosition='top'>
     <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
    </Carousel>
  );
};

export default CarouselEvents;
