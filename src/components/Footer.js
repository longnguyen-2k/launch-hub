'use client';
import { CAREER_PAGE_PATH, EVENT_PAGE_PATH, HOME_PAGE_PATH, NEWS_PAGE_PATH, TALENT_PAGE_PATH } from '../constants/pathConstants'
import Link from 'next/link'
import '../styles/footer.scss';
import { Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="section--footer">
          <div className="footer__content">
            <div className='footer__left'>
              <div className="footer__infor">
                <h5>Contact Us</h5>
                <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it.</p>
                <p><strong>Email:</strong><span> info@example.com</span></p>
                <p><strong>Phone:</strong><span> 555-555-5555</span></p>

              </div>
              <div className="footer__get-links">
                <h5>Quick Links</h5>
                <ul className="footer__list">
                  <li>
                    <Link className="footer__list_item" href={HOME_PAGE_PATH.path}>
                      {HOME_PAGE_PATH.description}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list_item" href={NEWS_PAGE_PATH.path}>
                      {NEWS_PAGE_PATH.description}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list_item" href={EVENT_PAGE_PATH.path}>
                      {EVENT_PAGE_PATH.description}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list_item" href={CAREER_PAGE_PATH.path}>
                      {CAREER_PAGE_PATH.description}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__list_item" href={TALENT_PAGE_PATH.path}>
                      {TALENT_PAGE_PATH.description}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__right'>
              <div className="footer__sharing">
                <div className="footer__subscribe">
                  <h5 className="footer__subscribe_title">Weekly Newsletter</h5>
                  <p>Get blog articles and offers via email</p>
                  <Input
                    suffix={<MailOutlined />}
                    placeholder="Your email"
                    style={{ width: '320px', color: '#A1A1AA', height: "40px" }}
                  />
                  {/* <input type="email" placeholder="Enter your email address" /> */}

                </div>
                <button className="footer__button" type="submit">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div>
              <img src="/image/Copyright-Info.png" />
            </div>
            <ul className='footer__bottom-right'>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
