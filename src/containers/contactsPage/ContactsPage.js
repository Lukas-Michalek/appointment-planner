import React from "react";
import { useState, useEffect } from 'react';
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList'

export const ContactsPage = (props) => {

  /*
  Define state variables for 
  contact info and duplicate check
  */

  // Declaring a State Variable => Note that in class componenet it would be something like this: 
  
  //  this.state = {
  //      name = ''
  //  }

  // But because we are in function the declaration is:
  // import { useState } from 'react'
  //  const [name, setCurrentName ] = useState('')

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  // const [ duplicate, setDuplicate ] = useState(false);




  // TODO => *** ALWAYS EXTRACT PROPS AND METHODS PASSED AS PROPS FIRST !!! ***

  // When it comes to REACT functions I can do this by using props as parameter in function component and destructuring props like this. Props are being sent from app and are name={name} and addContact={addContact}

  const { contacts, addContact} = props;
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO => Implement code for finding duplicates!!!

    addContact(name, email, phone); 

    
    setName('');
    setEmail('');
    setPhone('');
    // setDuplicate(false);

    
    
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  
 



  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm

          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}

        
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tileList = {contacts}   // list of contacts will be passed as props to tileList, which mean that object tileList wil be created with a list of objects that are contact information such as: {"tileList":[{"name":"Luke","email":"email","phone":"123"}]}
           />
      </section>
    </div>
  );
};
