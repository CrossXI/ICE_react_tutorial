import Logo from "../image/logo.png";
import "./Header.css";
function Header(props) {
    //รับค่า Props
    return (
        <>
            <nav>
                <img src={Logo} alt="logo" className="logo" />
                <h1>{props.title}</h1>
            </nav>
        </>
    );
}
export default Header;