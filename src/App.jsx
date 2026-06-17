import React, { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: "22CS001",
      name: "Veera Ganesh",
      bus: "Bus A1",
      route: "Main Gate → Campus",
      status: "Onboard",
    },
    {
      id: "22CS002",
      name: "Sai Kumar",
      bus: "Bus B2",
      route: "Town → Campus",
      status: "Absent",
    },
    {
      id: "22CS003",
      name: "Rahul",
      bus: "Bus C3",
      route: "City → Campus",
      status: "Onboard",
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>🚍 Smart Campus Mobility & Student Tracking</h1>
        <p>Professional Transport Monitoring Dashboard</p>
      </header>

      <div className="stats">
        <div className="card">
          <h2>1200</h2>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h2>25</h2>
          <p>Active Buses</p>
        </div>

        <div className="card">
          <h2>950</h2>
          <p>Students Onboard</p>
        </div>

        <div className="card">
          <h2>96%</h2>
          <p>Attendance</p>
        </div>
      </div>

      <section className="tracker">
        <h2>🔍 Student Tracker</h2>

        <input
          type="text"
          placeholder="Search by Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="student-list">
          {filteredStudents.map((student) => (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <p>ID: {student.id}</p>
              <p>Bus: {student.bus}</p>
              <p>Route: {student.route}</p>
              <span
                className={
                  student.status === "Onboard"
                    ? "status onboard"
                    : "status absent"
                }
              >
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="transport">
        <h2>🚌 Live Transport Monitor</h2>

        <div className="bus-grid">
          <div className="bus-card">
            <h3>Bus A1</h3>
            <p>Driver: Ramesh</p>
            <p>Route: Main Gate → Campus</p>
            <p>Speed: 45 km/h</p>
          </div>

          <div className="bus-card">
            <h3>Bus B2</h3>
            <p>Driver: Suresh</p>
            <p>Route: Town → Campus</p>
            <p>Speed: 38 km/h</p>
          </div>

          <div className="bus-card">
            <h3>Bus C3</h3>
            <p>Driver: Kumar</p>
            <p>Route: City → Campus</p>
            <p>Speed: 42 km/h</p>
          </div>
        </div>
      </section>

      <section className="emergency">
        <h2>🚨 Emergency Center</h2>
        <button>SOS Alert</button>
      </section>
    </div>
  );
}

export default App;