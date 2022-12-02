import React from 'react'
import { navLinks } from '../utils/data' 
import Link from 'next/link'
import Image from 'next/image'


const data = () => {
  return (

    <nav className='flex container mx-auto my-5 space-x-8 '>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

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