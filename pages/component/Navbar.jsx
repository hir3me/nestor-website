import React from 'react'
import { navLinks } from '../utils/data' 
import Link from 'next/link'

const data = () => {
  return (

    <nav className='flex items-center space-x-8'>
       <div>logo</div>
    {navLinks.map((link, index) => {
      return (
        <ul>
          <Link href={link.path}>
            <li key={index}>{link.name}</li>
          </Link>
        </ul>
      );
    })}
  </nav>
  )
}

export default data