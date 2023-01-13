import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";


const App = () => {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointmets] = useState([]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */


// Creating new contact form passed down values and adding new Contact into array of already existing Contacts


  


  const addContact = (name, email, phone) => {
    
    let newContact = {
      name: name,
      email: email,
      phone: phone
      
    }   

      
        setContacts((prevContacts) => {         
          return [...prevContacts, newContact]
    })
  
  }
    
 

  // Creating new Appoitnment from data given by user (title, contact, date)
  const addAppointment = (title, contact, date, time) => {

    const newAppointment = {

      title: title,
      contact: contact,
      date: date,
      time: time
    }
      
    // Adding new appointment into Appointments array
    setAppointmets((prevAppointments) => {
      return [...prevAppointments, newAppointment]
    })
  };
  



  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              addContact={addContact}
              contacts={contacts}
              
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
              
              
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
