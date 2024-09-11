import React, { useState } from 'react';
import './ContactItem.css';

const ContactItem = ({ contact, updateContact, deleteContact, index }) => {
  const [Editing, setEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateContact({ ...contact, name, email, phone });
    setEditing(false);
  };

  return (
    <div className='contact-item-container'>
      {Editing ? (
        <div className='edit-form'>
          <input className='contact-item-input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input className='contact-item-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='contact-item-input' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <div className='button-group'>
            <button className='contact-item-button' onClick={handleSave}>Save</button>
            <button className='contact-item-button' onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <span className='contact-item-span'>{index + 1}. {name} - {email} - {phone}</span>
          <div className='button-group'>
            <button className='contact-item-button' onClick={handleEdit}>Edit</button>
            <button className='contact-item-button' onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactItem;
