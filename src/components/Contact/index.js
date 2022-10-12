import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (

    <div className='text-center'>
      <p className="page-title text-center">Contact</p>
      <a className='email' href="mailto:mike.levy.rva@gmail.com">mike.levy.rva@gmail.com   <i class="fa-regular fa-envelope"></i></a>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <input placeholder="Name" className="input feedback-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <input placeholder="Email" className="input feedback-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <textarea placeholder='Message' className="textarea feedback-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="">{errorMessage}</p>
          </div>
        )}
        <button className="btn btn-primary text-center" data-testid="button" type="submit">Submit</button>
      </form>
    </div>




  );
}

