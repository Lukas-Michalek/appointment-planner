import React from "react";
import { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const { addAppointment, appointments, contacts} = props;

  const [title, setTitle] = useState('');
  const [contact, setContact ] = useState('');
  const [date, setDate ] = useState('');
  const [time, setTime ] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    addAppointment(title, contact, date, time);

    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        < AppointmentForm
              title={title}
              setTitle={setTitle}
              contact={contact}
              setContact={setContact}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              handleSubmit={handleSubmit}
        
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          tileList={appointments}   // same as with cotacts but it looks like this: {"tileList":[{"title":"App","contact":"","date":"2023-01-13","time":"11:22"}]}
        />
      </section>
    </div>
  );
};
