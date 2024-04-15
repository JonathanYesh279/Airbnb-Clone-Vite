import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
      name,
      email,
      password,
    });
    alert('Registration successful');
    } catch (e) {
      alert('Registration failed');
    }
  }
    
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>REGISTER</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
          <input
            value={name}
            onChange={ev => setName(ev.target.value)}
            type='username'
            placeholder='Username'
            />
          <input
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            type='email'
            placeholder='Your@email.com' />
          <input
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            type='password'
            placeholder='Password' />
          <button className='primary'>Register</button>
          <div className='text center py-2 text-gray-500'>
            Have an account already?{' '}
            <Link className='underline text-black' to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage
