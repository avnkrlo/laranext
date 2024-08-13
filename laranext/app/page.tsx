import React from 'react'
import RegisterForm from './components/RegisterForm';
import Link from 'next/link';

export default function Index() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
      <div className='shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-12'>
        <h1 className='font-semibold text-2xl'>Create your Account</h1>
        <RegisterForm/>
        <p className='text-center'>
          Already have an account?{' '} 
          <Link className="link link-primary" href="/login">
          Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}