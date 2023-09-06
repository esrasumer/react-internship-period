import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='h-12 text-red-500 p-4 flex items justify-between border-b-red-500 uppercase'>
      <div className=''>
        <Link href='/'>Massimo</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}
