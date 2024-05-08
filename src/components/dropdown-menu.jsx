export default function DropdownMenu() {
    return (
        <div className="left">
            <div className="dropdown">
                <button className="link">r-line</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">premier r4</a>
                    <a className="dropdown-item" href="/">premier r6</a>
                    <a className="dropdown-item" href="/">premier r8</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="link">s-line</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">premier S4</a>
                    <a className="dropdown-item" href="/">premier S6</a>
                    <a className="dropdown-item" href="/">premier S8</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="link">t-line</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">premier T4</a>
                    <a className="dropdown-item" href="/">premier T6</a>
                    <a className="dropdown-item" href="/">premier T8</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="link">sbg</button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                    <a className="dropdown-item" href="/">lorem ipsum</a>
                </div>
            </div>
        </div>
    )
}