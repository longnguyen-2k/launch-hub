import React from 'react'
import '../../styles/auth.scss'

export default function AuthLayout({children}) {
  return (
    <div className='auth__container'>
        <img src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg" className='auth__content__left'/> 
        <div className='auth__content__right'>
            {children}
        </div>
    </div>
  )
}
