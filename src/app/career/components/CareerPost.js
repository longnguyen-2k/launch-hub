'use client';
import { ShoppingOutlined, ProfileOutlined, DollarOutlined, ShareAltOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../../../styles/career/careerpost.scss';
import { Button, Link } from 'antd';

export default function CareerPost() {
    return (
        <div className="block--career-post">
            <div className="block__left">
                <h4>
                    PixelFlow
                </h4>
                <div className="block__info">
                    <p><span><ShoppingOutlined /> Position:</span>    <strong>UX Design Intern </strong></p>
                    <p><span><DollarOutlined /> Salary:  </span>        <strong>500 - 600 USD</strong></p>
                    <p><span><EnvironmentOutlined/> Location:</span> <strong>1 Ton Duc Thang, District 1, Ho Chi Minh city</strong></p>
                </div>
            </div>
            <div className="block__right">
                <div className='block__role'>
                    <div className='block__role_title'>
                        <p>Full time role</p>
                    </div>
                    <div className='block__number_label'>
                        +2
                    </div>
                </div>
                <div className="block__des">
                    <p>
                        A startup that provides an AI-powered video editing platform for social media creators.
                    </p>                  
                </div>
                <div className="block__btn-group">
                    <Button type="secondary">Press to explore new oppoturnity</Button>
                    <div className='share__btn'>
                            <ProfileOutlined />
                             <ShareAltOutlined />
                    </div>
                </div>
            </div>
        </div>
    );
}