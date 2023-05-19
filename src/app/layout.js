import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../components/Header'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bussiness Information',
  description: 'Bussiness Information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <div className='fullscreen-body'>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
