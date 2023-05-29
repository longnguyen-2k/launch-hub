import { ShoppingOutlined, ProfileOutlined, DollarOutlined, ShareAltOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import '../../../styles/career/careerpost.scss';
import RolesJob from 'src/components/roles/RolesJob';

const CareerPost = () => {
    const positionText = 'UX Design Intern';
    const salaryText = '500 - 600 USD';
    const locationText = '1 Ton Duc Thang, District 1, Ho Chi Minh City';

    return (
        <div className="block--career-post">
            <div className="block__left">
                <h4>PixelFlow</h4>
                <div className="block__info">
                    <p><span><ShoppingOutlined /> Position:</span> <strong>{positionText}</strong></p>
                    <p><span><DollarOutlined /> Salary:</span> <strong>{salaryText}</strong></p>
                    <p><span><EnvironmentOutlined /> Location:</span> <strong>{locationText}</strong></p>
                </div>
            </div>
            <div className="block__right">
                <RolesJob className='block__role' text="Full time role" number="2" />
                <div className="block__des">
                    <p>A startup that provides an AI-powered video editing platform for social media creators.</p>
                </div>
                <div className="block__btn-group">
                    <Button type="secondary">Press to explore new opportunity</Button>
                    <div className="share__btn">
                        <ProfileOutlined />
                        <ShareAltOutlined />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPost;