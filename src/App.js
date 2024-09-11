import React, { useState, useEffect } from 'react';
import './App.css';
import ContactList from './Component/ContactList';
import ContactForm from './Component/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showContact,setShowContact]=useState(false);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    alert("Contact Saved Successfully");
  };

  const updateContact = (updatedContact) => {
    const newContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const toggle=()=>{
    setShowContact(!showContact);
  };

  return (
    <div className='container'>
      <h1 className='h1'>Contact Manager</h1>

      <div className="form-container">
      <ContactForm addContact={addContact} />
      </div>
      <button className='btn-view' onClick={toggle}>
        {showContact ? "Hide Contacts" : "View Contacts"}
      </button>
      {showContact && (
      <ContactList contacts={contacts} updateContact={updateContact} deleteContact={deleteContact} />
      )
      
      }
    </div>
  );
};

export default App;
