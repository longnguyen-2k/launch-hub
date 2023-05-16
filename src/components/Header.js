import { APP_CONSTANTS } from "@/constants/commonConstants";
// import { mdiAccountOutline } from '@mdi/js';

import {
  CAREER_PAGE_PATH,
  EVENT_PAGE_PATH,
  HOME_PAGE_PATH,
  NEWS_PAGE_PATH,
  TALENT_PAGE_PATH,
} from "@/constants/pathConstants";
import Link from "next/link";
import "../styles/header.css";
export default function Header() {
  return (
    <div className="container">
      <header>
        <div className="section-header">
          <Link href="/">
            <span className="navbar-brand">{APP_CONSTANTS.title}</span>
          </Link>

          <ul className="header__list">
            <li>
              <Link className="header__item" href={HOME_PAGE_PATH.path}>
                {HOME_PAGE_PATH.description}
              </Link>
            </li>
            <li>
              <Link className="header__item" href={NEWS_PAGE_PATH.path}>
                <span className="nav-link">{NEWS_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link className="header__item" href={EVENT_PAGE_PATH.path}>
                <span className="nav-link">{EVENT_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link className="header__item" href={CAREER_PAGE_PATH.path}>
                <span className="nav-link">{CAREER_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link className="header__item" href={TALENT_PAGE_PATH.path}>
                <span className="nav-link">{TALENT_PAGE_PATH.description}</span>
              </Link>
            </li>
          </ul>
          <div className="header__icon"></div>
        </div>
      </header>
    </div>
  );
}
