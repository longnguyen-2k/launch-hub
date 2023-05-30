import {
  ProfileOutlined,
  ShareAltOutlined,
  LinkedinFilled,
  GlobalOutlined
} from '@ant-design/icons';
import RolesJob from 'src/components/roles/RolesJob';
import { Button } from 'antd';

import "@fortawesome/fontawesome-free/css/all.css";
import "../../styles/talents/talentcard.scss"
export default function CardTalent() {
  return (
    <div className="section--card-talent">
      <div className="section__top">
        <div className='section__top_left'>
          <div className="card__avt">
            <img src="https://picsum.photos/200/300" />
          </div>
          <div className='card__info'>
            <div className="card__name">James David</div>
            <div className="card__job-title">UX searcher</div>
          </div>
        </div>

        <div className="card__social-image">
          <LinkedinFilled style={{ fontSize: '25px', color: '#08c' }} />
          <GlobalOutlined style={{ fontSize: '25px' }} />
        </div>
      </div>
      <div className="card__viewed">Viewed by 20 people</div>
      <div className="section__content">
        <div className="section__content_left">
          <p>
            <span>
              <img src='/../image/talents/exp.png' />
            </span>
            <span>
              Experience
            </span>
          </p>
          <p>
            <span>
              <img src='/../image/talents/search.png' />
            </span>
            <span>
              Open to
            </span>
          </p>
          <p>
            <span>
              <img src='/../image/talents/skills.png' />
            </span>
            <span>
              Skills
            </span>
          </p>
          <div className="share__btn">
            <ProfileOutlined style={{ fontSize: '25px' }} />
            <ShareAltOutlined style={{ fontSize: '25px' }} />
          </div>
        </div>
        <div className="section__content_right">
          <p className="time">1 year 5 months</p>
          <div className="job__des">
            <RolesJob className='block__role-bold' text="Product Design" number_type={false}/>
          </div>
          <div className="role__jobs">
            <RolesJob className='block__role' text="Product Design" number_type={true} number={2} />
          </div>
          <div className='btn-group'>
            <Button type="secondary">Press to view profile</Button>
          </div>

        </div>
      </div>
    </div>
  );
}
