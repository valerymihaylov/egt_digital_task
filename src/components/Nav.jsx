import './Nav.css'
import LeftMenu from "./Left Menu.jsx";
import RightMenu from "./Right Menu.jsx";
import React from "react";

import {Menu, X} from 'react-feather';
import Logo from "./Logo.jsx";

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="container">
                <Logo />
                <div className="container-menu__desktop">
                    <LeftMenu />
                    <RightMenu />
                </div>
                <div className="container-menu__mobile">
                    <button onClick={toggleNavbar} className={isOpen ? "opened" : "closed"}>{isOpen ? <X width="auto" height="36"/> : <Menu width="auto" height="36"/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="mobile-menu">
                    <LeftMenu />
                    <RightMenu />
                </div>
            )}
        </>
    )
};


export default Nav;