import { CAREER_PAGE_PATH, EVENT_PAGE_PATH, HOME_PAGE_PATH, NEWS_PAGE_PATH, TALENT_PAGE_PATH } from '@/constants/pathConstants'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer>
      <div className="row">
        <div className="col-3">
          <div className="footer__highlight">
            <h2>Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: 555-555-5555</p>
          </div>
        </div>
        <div className="col-3">
          <div className="footer__highlight">
            <h2>Quick Links</h2>
            <ul>
              <li>
              <Link href={HOME_PAGE_PATH.path}>
                <span >{HOME_PAGE_PATH.description}</span>
              </Link>              
              </li>
              <li>
              <Link href={NEWS_PAGE_PATH.path}>
                <span >{NEWS_PAGE_PATH.description}</span>
              </Link>              
              </li>
              <li>
              <Link href={EVENT_PAGE_PATH.path}>
                <span >{EVENT_PAGE_PATH.description}</span>
              </Link>              
              </li>
              <li>
              <Link href={CAREER_PAGE_PATH.path}>
                <span >{CAREER_PAGE_PATH.description}</span>
              </Link>              
              </li>
              <li>
              <Link href={TALENT_PAGE_PATH.path}>
                <span >{TALENT_PAGE_PATH.description}</span>
              </Link>              
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="footer__subscribe">
            <h2>Subscribe</h2>
            <p>Stay up-to-date with our latest news and offers.</p>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
