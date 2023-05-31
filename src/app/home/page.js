'use client';
import React from 'react'
import '../../styles/home.scss'
import { Button } from 'antd';
import { ArrowRightOutlined, CheckCircleOutlined } from '@ant-design/icons';

export default function HomePage() {
  return (
    <div className='container'>
      <div className='home__block1'>
        <div className='home__block1__left'>
          <div className='home__tittle1'>We’re The ultimate supporter for your career</div>
          <div className='home__content1'>We provide you every information you may need to accompany your journey in finding the usefulness of hidden opportunities</div>
          <Button className='home__btn1' style={{backgroundColor: '#FF4B16', marginTop:'50px'}}>Get started <ArrowRightOutlined /></Button>
        </div>
        <img className='home_img1' src='./image/home/home_5.png'/>
      </div>
      <div className='home_block2'>
        <div className='home__block2__left'>
          <div className='home__tittle2'>Be up-to-date with hottest news</div>
          <div className='home__content2'>Your field and industry changes the scope of needs, considerations, legal challenges and operational concerns. Our experience across broad industries allows you the best of all worlds.</div>
          <Button className='home__btn1'>Let’s explore <ArrowRightOutlined /></Button>
        </div>
        <img className='home_img2' src='./image/home/home_6.png'/>
        <img className='home_img3' src='./image/home/home_7.png'/>
      </div>
      <div className='home__block3'>
        <img className='home_img4' src='./image/home/home_8.png'/>
        <div className='home__block3__right'>
          <div className='home__tittle2'>Catch up with latest events</div>
          <div className='home__line'>
            <CheckCircleOutlined className='home__icon'/>
            <div className='home__content3'>Discover upcoming events</div>
          </div>
          <div className='home__line'>
            <CheckCircleOutlined className='home__icon'/>
            <div className='home__content3'>Explore completed events</div>
          </div>
          <div className='home__line'>
            <CheckCircleOutlined className='home__icon'/>
            <div className='home__content3'>Comprehensive information</div>
          </div>
          <div className='home__line'>
            <CheckCircleOutlined className='home__icon'/>
            <div className='home__content3'>Easy to register</div>
          </div>
          <Button className='home__btn1'>Let’s explore <ArrowRightOutlined /></Button>
        </div>
      </div>
      <div className='home__block3'>
        <img className='home_img5' src='../image/home/home_1.png'/>
        <div className='home__block4__right'>
          <div className='home__tittle2'>Explore new job opportunities</div>
          <div className='home__content2'>Meet clients you’re excited to work with and take your career or business to new heights.</div>
          <div className='home__line'>
            <img className='home_img6' src='../image/home/home_2.png'/>
            <div className='home__content3'><b>Work mode </b>Leverage frameworks to provide a robust synopsis for high overviews.</div>
          </div>
          <div className='home__line'>
            <img className='home_img6' src='../image/home/home_3.png'/>
            <div className='home__content3'><b>Seniority lebel </b>Bring to the table win-win survival strategies to ensure domination.</div>
          </div>
          <Button className='home__btn1'>Let’s explore <ArrowRightOutlined /></Button>
        </div>
      </div>
      <div className='home_block2'>
        <div className='home__block2__left'>
          <div className='home__tittle2'>Discover top talents today</div>
          <div className='home__content2'>Access to the world’s largest community of talents in design, product and tech open to opportunities - powered by mentors.</div>
          <Button className='home__btn1'>Let’s explore <ArrowRightOutlined /></Button>
        </div>
        <img className='home_img7' src='../image/home/home_4.png'/>
      </div>
      <div>.</div>
    </div>
  )
}
