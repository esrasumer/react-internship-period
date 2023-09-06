"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Menu() {

  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 1, title: "Working", url: "/" },
    { id: 1, title: "Contact", url: "/" },

  ]

  return (
    <div>
      {
        !open ? (
          <Image src="/open.png" alt="" width={20} height={20} onClick={() => setOpen(true)} />
        ) : (
          <Image src="/close.png" alt="" width={20} height={20} onClick={() => setOpen(false)} />
        )
      }
      <div>
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
