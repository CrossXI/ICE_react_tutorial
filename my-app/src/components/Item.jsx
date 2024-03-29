import "./Item.css"
import { useState } from "react";

export default function Item(props) {
    const { title, description } = props;
    const [show, setShow] = useState(false)
    return (
        <section>
            <article className="content">
                <h4>{title}</h4>
                <button onClick={() => setShow(!show)}>
                    {show ? "ซ่อน" : "เเสดง"}
                </button>
            </article>
            {show && <p>{description}</p>}
        </section>
    );
}