'use client';
import React from 'react'
import AuthLayout from '../AuthLayout'
import { Input, Checkbox,Button } from 'antd';

export default function page() {
  return (
   <AuthLayout>
      <div className='signin__container'>
      <div className='signin__line1'>Wellcome !</div>  
      <div className='signin__line2'>Sign up to</div>  
      <div className='signin__line3'>Lorem Ipsum is simply</div>
      <div className='signin__title__ip'>Email</div>
      <Input placeholder="Enter your email" className='signin__inp'/>
      <div className='signin__title__ip'>User name</div>
      <Input placeholder="Enter your user name" className='signin__inp'/>
      <div className='signin__title__ip'>Password</div>
      <Input.Password placeholder="Enter your Password"className='signin__inp' />
      <div className='signin__title__ip'>Confirm Password</div>
      <Input.Password placeholder="Confrim your Password"className='signin__inp' />
      <Button className='signin__btn'>Register</Button>
      <div className='signin__line5'>Already have an Account ? <a href='#' className='signin__register'>Sign in</a></div>
      </div>
    </AuthLayout>
  )
}
