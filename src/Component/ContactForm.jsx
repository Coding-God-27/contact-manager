import React, { useState } from 'react';
import './ContactForm.css';
const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const newContact = { id: Date.now(), name, email, phone };
      addContact(newContact);
      setName(''); setEmail(''); setPhone('');  
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button  className='submit-btn'type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
