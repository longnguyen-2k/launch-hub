import Link from "next/link";
import "../../styles/navbar.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;