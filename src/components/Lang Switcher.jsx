import {ChevronDown} from "react-feather";

export default function LangSwitcher() {
    return (
        <div className="container-single-dropdown__item no-border"><div className="container-dropdown__title lang-switch">
            <img src="https://wbbgcdn.kubdev.com/sport-content/flags/4x3/gb.svg" width="auto" height="32px"/>
            <button className="link">
                EN
                <ChevronDown/>
            </button>

        </div>
            <div className="container-dropdown__list language-switch">
                <a className="dropdown-item" href="/">
                    <img src="https://wbbgcdn.kubdev.com/sport-content/flags/4x3/gb.svg" width="auto"
                         height="32px"/>
                    English
                </a>
                <a className="dropdown-item" href="/">
                    <img src="https://wbbgcdn.kubdev.com/sport-content/flags/4x3/bg.svg" width="auto"
                         height="32px"/>
                    Български
                </a>
            </div>
        </div>
    )
}