import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Requests.css";

function Requests() {
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

      

        {/* Table */}
        <div className="table-container">
          <h2>Meeting Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Type of Consultation</th>
                <th>Description</th>
                <th>Action</th>
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
                  <td>
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
}

export default Requests;
