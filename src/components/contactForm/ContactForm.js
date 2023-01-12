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
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />    

      <button type="submit" >Submit</button> 
     
    </form>
  );
};
