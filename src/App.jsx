import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const addStudent = () => {
    if (!name || !roll) return;

    const newStudent = {
      id: Date.now(),
      name,
      roll,
      location: "Campus Block A",
    };

    setStudents([...students, newStudent]);
    setName("");
    setRoll("");
  };

  return (
    <div className="container">
      <h1>🚌 Smart Campus Transport & Student Tracking System</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
      </div>

      <div className="bus-card">
        <h2>🚌 College Bus Status</h2>
        <p>Current Location: Main Gate</p>
        <p>Route: Main Gate → Block A → Block B → Library</p>
        <p>ETA: 10 Minutes</p>
      </div>

      <h2>👨‍🎓 Student List</h2>

      {students.length === 0 ? (
        <p>No Students Added</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;