import { APP_CONSTANTS } from '../constants/commonConstants'
import { CAREER_PAGE_PATH, EVENT_PAGE_PATH, HOME_PAGE_PATH, NEWS_PAGE_PATH, TALENT_PAGE_PATH } from '../constants/pathConstants'
import Link from 'next/link'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand">{APP_CONSTANTS.title}</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href={HOME_PAGE_PATH.path}>
                <span className="nav-link">{HOME_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link href={NEWS_PAGE_PATH.path}>
                <span className="nav-link">{NEWS_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link href={EVENT_PAGE_PATH.path}>
                <span className="nav-link">{EVENT_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link href={CAREER_PAGE_PATH.path}>
                <span className="nav-link">{CAREER_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link href={TALENT_PAGE_PATH.path}>
                <span className="nav-link">{TALENT_PAGE_PATH.description}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
