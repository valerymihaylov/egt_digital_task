import {ChevronDown} from "react-feather";
import Records from "../records.json";

import './Dropdown.css'

export default function Dropdown () {
    const withSubmenu = Records.leftMenu.filter(menuItem =>
        menuItem.subMenuItem === true)

    const leftItemswithSubmenu = withSubmenu.map(menuItem =>
        <>
            <div key={menuItem.id} className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">{menuItem.name}</button>
                    <ChevronDown className="mobile-icon"/>
                </div>
                <div className="container-dropdown__list">
                    <a className="dropdown-item" href="/">{menuItem.first}</a>
                    <a className="dropdown-item" href="/">{menuItem.second}</a>
                    <a className="dropdown-item" href="/">{menuItem.third}</a>
                </div>
            </div>
        </>
    )

    const withoutSubmenu = Records.leftMenu.filter(menuItem =>
        menuItem.subMenuItem === false)

    const leftItemswithoutSubmenu = withoutSubmenu.map(menuItem =>
        <>
            <div key={menuItem.id} className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">{menuItem.name}</button>
                    <ChevronDown className="mobile-icon"/>
                </div>
            </div>
        </>
    )

    return (
        <div className="container-left__menu">
            {leftItemswithSubmenu}
            {leftItemswithoutSubmenu}
        </div>
    )
}