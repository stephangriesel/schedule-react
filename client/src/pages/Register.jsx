import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const onFinish = (values) => {
    console.log('received values', values);
  };

  return (
    <main className='flex justify-center items-center h-screen rounded p-10'>
      <form
        className='flex flex-col bg-slate-300 rounded p-2'
        onFinish={onFinish}
      >
        <h2 className='font-bold m-5'>Create an account</h2>
        <label htmlFor='email' className='m-2'>
          Email Address
        </label>
        <input className='p-3' id='email' type='email' required />
        <label className='m-2' htmlFor='password'>
          Password
        </label>
        <input
          className='password p-3'
          id='password'
          type='password'
          required
        />
        <button
          className='signupButton p-2 m-5 transition ease-in-out delay-150 bg-green-500 hover:bg-green-600 duration-300 rounded'
          type='submit'
          value='submit'
        >
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
