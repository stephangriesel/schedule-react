import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
      console.log(email, username, password);
      setPassword('');
      setUsername('');
      setEmail('');
    }
  };

  return (
    <main className='flex justify-center items-center h-screen rounded p-10'>
      <form
        className='flex flex-col bg-slate-300 rounded p-2'
        onSubmit={handleSubmit}
      >
        <h2 className='font-bold m-5'>Create an account</h2>
        <label htmlFor='email' className='m-2'>
          Email Address
        </label>
        <input
          className='p-3'
          id='email'
          name='email'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='m-2' htmlFor='username'>
          Username
        </label>
        <input
          className='username p-3'
          id='username'
          name='username'
          required
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className='m-2' htmlFor='password'>
          Password
        </label>
        <input
          className='password p-3'
          id='password'
          type='password'
          name='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signupButton p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded'>
          REGISTER
        </button>
        <p className='text-sm m-4'>
          Already have an account?{' '}
          <Link
            className='link underline decoration-4 decoration-green-500 hover:decoration-green-600'
            to='/'
          >
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
