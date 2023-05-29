'use client'
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Icon from '@mdi/react';
import { mdiAccountOutline } from '@mdi/js';
const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "News", href: "/news" },
    { text: "Event", href: "/events" },
    { text: "Career", href: "/career" },
    { text: "Talent", href: "/talents" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <div className="container">
                <nav className={`nav`}>
                    <Link href={"/"}>
                        <img src="/image/logo.png" alt="me" />
                    </Link>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar`}
                    >

                    </div>
                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                        {MENU_LIST.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>
                    <div className="nav__icon">
                        <Link href="/auth/signin">
                            <Icon path={mdiAccountOutline} size={1.8} />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>


    );
};

export default Navbar;