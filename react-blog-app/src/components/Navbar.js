import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="logo">
                <h3>Blogs Application</h3>
            </Link>

            {/*ไม่ใช้เเท็ก <a href=""></a>*/}
            <Link to="/">หน้าเเรก</Link>
            <Link to="/blogs">บทความทั้งหมด</Link>
            <Link to="/about">เกี่ยวกับ</Link>            
        </nav>
    );
}