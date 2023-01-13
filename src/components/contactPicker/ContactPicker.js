import React from "react";

export const ContactPicker = (props) => {
  const { contactList, onChange } = props;

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
