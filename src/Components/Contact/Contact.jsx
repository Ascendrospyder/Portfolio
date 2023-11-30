import React from 'react';
import './contact.scss';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='left-side'>
        <h1>Contact Me</h1>
      </div>
      <div className='right-side'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
