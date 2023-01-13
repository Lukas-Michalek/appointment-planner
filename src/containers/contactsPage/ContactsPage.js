import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ duplicate, setDuplicate ] = useState(false);

  // TODO => *** ALWAYS EXTRACT PROPS AND METHODS PASSED AS PROPS FIRST !!! ***

  // When it comes to REACT functions I can do this by using props as parameter in function component and destructuring props like this. Props are being sent from app and are name={name} and addContact={addContact}

  const { contacts, addContact } = props;


  /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!duplicate){

    addContact(name, email, phone);

    setName("");
    setEmail("");
    setPhone("");
  
  }
    
  };

  
  // Checking if the name is already in the contacts array and thus flagging it as duplicate

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);  
  
  // Note that dependancy array of useEffect an be more items. In this case for example, Execute useEffect(re-render) every time when any of these will change

  return (
    <div>
      <section>
        <h2>Add Contact</h2>

        <h2>{ duplicate ? 'Name is already in Contacts. Please choose another name.' : ''}</h2>

        

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
          tileList={contacts} // list of contacts will be passed as props to tileList, which mean that object tileList wil be created with a list of objects that are contact information such as: {"tileList":[{"name":"Luke","email":"email","phone":"123"}]}
        />
      </section>
    </div>
  );
};
