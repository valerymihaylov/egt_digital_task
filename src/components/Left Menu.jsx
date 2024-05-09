import './LeftMenu.css'
import { ChevronDown } from 'react-feather';

export default function LeftMenu() {
    return (
        <div className="container-left__menu">
            <div className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">r-line</button>
                    <ChevronDown />
                </div>
                <div className="container-dropdown__list">
                    <a className="dropdown-item" href="/">premier r4</a>
                    <a className="dropdown-item" href="/">premier r6</a>
                    <a className="dropdown-item" href="/">premier r8</a>
                </div>
            </div>
            <div className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">s-line</button>
                    <ChevronDown />
                </div>
                <div className="container-dropdown__list">
                    <a className="dropdown-item" href="/">premier s4</a>
                    <a className="dropdown-item" href="/">premier s6</a>
                    <a className="dropdown-item" href="/">premier s8</a>
                </div>
            </div>
            <div className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">t-line</button>
                    <ChevronDown />
                </div>
                <div className="container-dropdown__list">
                    <a className="dropdown-item" href="/">premier t4</a>
                    <a className="dropdown-item" href="/">premier t6</a>
                    <a className="dropdown-item" href="/">premier t8</a>
                </div>
            </div>
            <div className="container-single-dropdown__item">
                <div className="container-dropdown__title">
                    <button className="link">r-line</button>
                    <ChevronDown />
                </div>
                <div className="container-dropdown__list">
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                </div>
            </div>
        </div>
    )
}