import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div>
        <Link href='/'>Navbar</Link>
      </div>
      <Menu />
    </div>
  )
}
