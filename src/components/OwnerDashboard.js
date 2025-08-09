import React from "react";
import { useNavigate } from 'react-router-dom';
import "./OwnerDashboard.css";

function OwnerDashboard() {
  const navigate = useNavigate();
  // Dummy static data for now
  const meetings = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      date: "2025-08-10",
      time: "10:00 AM",
      type: "Tax Consultation",
      description: "Discuss yearly tax filing",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      date: "2025-08-11",
      time: "2:00 PM",
      type: "Accounting",
      description: "Monthly accounts review",
    },
  ];

  const handleRedirectToManageMeeting = () => {
    navigate('/requests')
  }
  const handleRedirectToOwnerDashboard = () => {
    navigate('/ownerdashboard')
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <button onClick={handleRedirectToOwnerDashboard}>Dashboard</button>
          </li>
          <li>
            <button onClick={handleRedirectToManageMeeting}>Requests</button>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Top cards */}
        <div className="cards">
          <div className="card">
            <h3>No of Clients</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Clients Info</h3>
            <p>View Details</p>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <h2>Meetings</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type of Consultation</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting, index) => (
                <tr key={index}>
                  <td>{meeting.name}</td>
                  <td>{meeting.phone}</td>
                  <td>{meeting.date}</td>
                  <td>{meeting.time}</td>
                  <td>{meeting.type}</td>
                  <td>{meeting.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default OwnerDashboard;
