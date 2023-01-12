import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  return (

    <div>
    
      <form onSubmit={handleSubmit}>

      
        <input 
            value={title}
            onChange={handleTitleChange}
            name='Title'
            type='text'
            placeholder="Appointment title..." 
        />

        <input 
            value={date}
            onChange={handleDateChange}
            name='Date'
            type='date'
            min={getTodayString()}
            
        />

        <input 
            value={time}
            onChange={handleTimeChange}
            name='Time'
            type='time'
            
        />
        <button type="submit">Submit</button>

      </form>

      <ContactPicker 
        contacts = {contacts}
      
      />

    </div>
    
  );
};
