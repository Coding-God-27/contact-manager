import React from 'react';
import './ContactList.css';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  return (
    <div className='contact-list'>
      {contacts.map((contact, index) => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          updateContact={updateContact} 
          deleteContact={deleteContact} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ContactList;
