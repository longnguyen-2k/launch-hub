import { mdiAccountOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {
  CAREER_PAGE_PATH,
  EVENT_PAGE_PATH,
  HOME_PAGE_PATH,
  NEWS_PAGE_PATH,
  TALENT_PAGE_PATH,
} from "../constants/pathConstants";
import Link from "next/link";
import "../styles/header.scss";
export default function Header() {
  return (

    <header>
      <div className="container">
        <div className="section--header">
          <Link href="/" prefetch={false} >
            <img src="/image/logo.png" alt="me" />
          </Link>
          {/* <ul>
            <li>
              <Link href={HOME_PAGE_PATH.path}>
                {HOME_PAGE_PATH.description}
              </Link>
            </li>
            <li>
              <Link href={NEWS_PAGE_PATH.path}>
                <span>{NEWS_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link href={EVENT_PAGE_PATH.path}>
                <span>{EVENT_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link href={CAREER_PAGE_PATH.path}>
                <span>{CAREER_PAGE_PATH.description}</span>
              </Link>
            </li>
            <li>
              <Link href={TALENT_PAGE_PATH.path}>
                <span>{TALENT_PAGE_PATH.description}</span>
              </Link>
            </li>
          </ul> */}
          <div className="header__icon">
            <Link href="/auth/signin" prefetch={false} >
              <Icon path={mdiAccountOutline} size={1} />
            </Link>
          </div>
        </div>
      </div>
    </header>

  );
}
