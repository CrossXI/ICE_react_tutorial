import "./Header.css";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

function Header(props) {
    const { theme, setTheme } = props;

    function ToggleTheme() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light" ? "light mode" : "night mode"}</span>
                <span className="icon" onClick={ToggleTheme}>
                    {theme === "light" ? <FaSun /> : <BsMoonStarsFill />}
                </span>
            </div>
        </header>
    );
}
export default Header;