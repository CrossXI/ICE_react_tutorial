import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import Item from './components/Item';
import { useEffect, useState } from "react";

function App() {
  //******************************************************************************** 
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [title, setTitle] = useState("")
  const [editId, setEditId] = useState(null)
  const [theme, setTheme] = useState("light");
  //{ id: 1, title: "เเก้บัคโปรเเกรม" },
  //{ id: 2, title: "คู่มือการใช้งานโปรเเกรม" },
  //{ id: 3, title: "กดเงินที่ธนาคาร" }
  //ใช้ useEffect ดักจับการเปลี่ยนแปลงที่ state [task] ตย เก็บข้อมูลลง storage ทุกครั้งที่ [task] อัพเดท
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task))
  }, [task])

  function deleteTask(id) {
    const result = task.filter(item => item.id !== id)
    setTask(result)
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล")
    } else if (editId) {
      const updateTask = task.map((item) => {
        //รายการใดมีรหัสตรงกับรหัสเเก้ไข
        if (item.id === editId) {
          return { ...item, title: title }
        }
        return item;
      })
      //เคลียร์ field ข้อมูลหลังอัพเดท
      setTask(updateTask)
      setEditId(null)
      setTitle("")
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title
      }
      setTask([...task, newTask])
      setTitle("")
    }
  }

  function editTask(id) {
    setEditId(id)
    //หา task ที่มี id ตรงกับ id เเก้ไข
    const editTask = task.find((item) => item.id === id)
    setTitle(editTask.title)
  }

  return (
    // className + โหมด theme ต้องเว้นวรรคหลัง App ด้วย
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
          {
            task.map((data) => (
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            ))
          }
        </section>
      </div>
    </div>
  );
}
export default App;
