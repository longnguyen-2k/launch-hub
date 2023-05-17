import { CAREER_PAGE_PATH, EVENT_PAGE_PATH, HOME_PAGE_PATH, NEWS_PAGE_PATH, TALENT_PAGE_PATH } from '../constants/pathConstants'
import Link from 'next/link'
import '../styles/footer.scss';

export default function Footer() {
  return (
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
                    <span className="nav-link">{NEWS_PAGE_PATH.description}</span>
                  </Link>
                </li>
                <li>
                  <Link className="footer__list_item" href={EVENT_PAGE_PATH.path}>
                    <span className="nav-link">{EVENT_PAGE_PATH.description}</span>
                  </Link>
                </li>
                <li>
                  <Link className="footer__list_item" href={CAREER_PAGE_PATH.path}>
                    <span className="nav-link">{CAREER_PAGE_PATH.description}</span>
                  </Link>
                </li>
                <li>
                  <Link className="footer__list_item" href={TALENT_PAGE_PATH.path}>
                    <span className="nav-link">{TALENT_PAGE_PATH.description}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__right'>
            <div className="footer__sharing">
              <div className="footer__subscribe">
                <h5 className="footer__subscribe_title">Weekly Newsletter</h5>
                <p>Stay up-to-date with our latest news and offers.</p>
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          HEhe
        </div>
      </div>
    </footer>
  )
}
