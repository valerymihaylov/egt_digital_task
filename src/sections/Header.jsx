import './Header.css'
import Nav from "../components/Nav.jsx";

export default function Header({ handleChange, isChecked }) {

    return (
        <header>
            <Nav/>

            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="check"
                    className="toggle"
                    onChange={handleChange}
                    checked={isChecked}
                />
                <label htmlFor="check"></label>
            </div>
        </header>
    )
}