"use client"
import Link from 'next/link'
import React from 'react'
import { ActionButton } from './products/Styled'

const page = () => {
  return (
    <div className='flex flex-col gap-5 w-[98vw] md:w-[20vw]'>
        <ActionButton>  <Link href="/zustand/basic">1st practice page</Link></ActionButton>
        <ActionButton>  <Link href="/zustand/task">2nd practice page</Link></ActionButton>
        <ActionButton>  <Link href="/zustand/products">3rd practice page</Link></ActionButton>
    </div>
  )
}

export default page
