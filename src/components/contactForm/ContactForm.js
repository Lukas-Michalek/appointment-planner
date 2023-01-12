import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }
  
  
  return (
    <form onSubmit={handleSubmit}>

      <input
        value={name}
        onChange={handleNameChange}
        name='Name'
        type='text'
        placeholder="Your name..." 
      />
      

      <input
        value={email}
        onChange={handleEmailChange}
        name='Email Address'
        type='text'
        placeholder="Your email..." 
      />
      

      <input
        value={phone}
        onChange={handlePhoneChange}
        name='Phone Number'
        type='number'
        placeholder="Your phone number..."
      />    

      <button type="submit" >Submit</button> 
     
    </form>
  );
};
