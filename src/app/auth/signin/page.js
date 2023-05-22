'use client';
import React from 'react'
import AuthLayout from '../AuthLayout'
import { Input, Checkbox,Button } from 'antd';

export default function page() {
  return (
    <AuthLayout>
      <div className='signin__container'>
      <div className='signin__line1'>Wellcome !</div>  
      <div className='signin__line2'>Sign in to</div>  
      <div className='signin__line3'>Lorem Ipsum is simply</div>
      <div className='signin__title__ip'>User name</div>
      <Input placeholder="Enter your user name" className='signin__inp'/>
      <div className='signin__title__ip'>Password</div>
      <Input.Password placeholder="Enter your Password"className='signin__inp' />
      <div className='signin__line4'>
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="#">Forgot Password ?</a>
      </div>
      <Button className='signin__btn'>Login</Button>
      <div className='signin__line5'>Don’t have any Account ? <a href='#' className='signin__register'>Register</a></div>
      </div>
    </AuthLayout>
  )
}

