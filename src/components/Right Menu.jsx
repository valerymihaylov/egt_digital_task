import Records from "../records.json";
import LangSwitcher from "./Lang Switcher.jsx";

import './RightMenu.css'

export default function RightMenu() {
    const rightMenu = Records.rightMenu.map(item =>
        <>
            <li>
                <a>{item.name}</a>
            </li>
        </>
    )
    return (
        <div className="container-right__menu">
            <ul className="container-links">
                {rightMenu}
                <LangSwitcher/>
            </ul>
        </div>
)
}