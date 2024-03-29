import "./AddForm.css"
import { useState } from "react";

function AddForm(props) {
    const {student,setStudent} = props;
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    function saveStudent(e){
        e.preventDefault();
        const newStudent={
            id:Math.floor(Math.random()*1000),
            name:name,
            gender:gender
        }
        setStudent([...student,newStudent])
        setName("")
        setGender("male")
        //console.log(newStudent);
    }
    return (
        <section className="container">
            <form onSubmit={saveStudent}>
                <label>Student name</label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </section>
    );
}
export default AddForm;