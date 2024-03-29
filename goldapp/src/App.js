import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import AddForm from './components/AddForm';
import { useState } from 'react';

function App() {
  //สร้าง State
  const [student, setStudent] = useState([
    { id: 1, name: "student1", gender: "male" },
    { id: 2, name: "student2", gender: "female" },
    { id: 3, name: "student3", gender: "male" },
    { id: 4, name: "student4", gender: "female" }
  ]);
  function deleteStudent(id) {
    setStudent(student.filter(item => item.id !== id))
  }
  return (
    <div className="App">
      {/*ส่งค่า prop ให้component*/}
      <Header title="Student Info" />
      <main>
        <AddForm student={student} setStudent={setStudent} />
        <StudentList student={student} deleteStudent={deleteStudent} />
      </main>


    </div>
  );
}

export default App;
