import React, { useState } from 'react';
import './BookMeeting.css';

const BookMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // yahan API call ya backend integration kar sakte ho
  };

  return (
    <div className="bookmeeting-container">
      <form className="bookmeeting-form" onSubmit={handleSubmit}>
        <h2>Book a Meeting</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Type of Consultation</option>
          <option value="Tax">Tax</option>
          <option value="Accounting">Accounting</option>
          <option value="Legal">Legal</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default BookMeeting;
