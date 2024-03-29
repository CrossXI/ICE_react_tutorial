import "./StudentList.css";
import Item from './Item';
import { useState } from 'react';

function StudentList(props) {
    const [show, setShow] = useState("True");
    const [count, setCount] = useState(0);
    const { student, deleteStudent } = props;
    return (
        <>
            <br />
            <h1>Test: {count}</h1>
            <button onClick={() => setCount(count + 1)}>เพิ่มค่า</button>
            <button onClick={() => setCount(count - 1)}>ลดค่า</button>
            <button onClick={() => setCount(0)}>ล้าง</button>
            <br />
            <ul>
                <div className="header">
                    <h1>Student count: ({student.length})</h1>
                    <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                </div>
                {show && student.map((data) => (
                    <Item key={data.id} data={data} deleteStudent={deleteStudent} />
                ))}
            </ul>
        </>
    );
}
export default StudentList;