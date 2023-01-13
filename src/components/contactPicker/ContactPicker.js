import React from "react";

export const ContactPicker = (props) => {
  const { contactList, onChange } = props;

  // After User selects name from drop down menu, this value is then passed into onChange() method which is exectured in AppointmnetForm.js, where the value chosen is then set as contact name, because AppointmnetForm.js is statefull component
  
  const handlePickedContact = (event) => {
    onChange(event.target.value);
    
  };

  let contact;

  return (
    <div>

      <select onChange={handlePickedContact} value={contact}>
        
        <option selected="selected" value="">
          Please Select Contact
        </option>

        {contactList.map((contact, index) => {
          return (
            <option 
                
                value={contact} 
                key={index}
            >
              {contact}
            </option>
          );
        })}
      </select>
    </div>
  );
};
