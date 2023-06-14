'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Login from '../auth/Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { HamburgerIcon } from './icons/ham'
import classNames from 'classnames'
import { Container } from './Container'
import LogOut from '../auth/LogOut'
import HeaderNav from './hamburger.server'
import { redirect } from 'next/navigation'
type Props = {}

const Navbar =  (
  {
    children,
  }: {
    children: React.ReactNode
  }
) => {

const [ham , setHam] = useState(false);


  return (
    <header className='fixed top-0 left-0 w-full  border-b border-transparent-white backdrop-blur-[12px] '>
    <Container className='flex  h-[var(--navigation-height)] px-[24px]  '>
    <Link  href={'/'} className='flex items-center text-xl'>
        
        FORTIS
    </Link>
  <div           className={classNames(
    "transition-[visibility] md:visible my-auto",
    ham ? "visible" : "delay-500 invisible"
  )}
>
    <nav
    className={classNames(
      "fixed top-[var(--navigation-height)] left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
      ham
        ? "translate-x-0 opacity-100"
        : "translate-x-[-100vw] opacity-0"
    )}
  >
        <ul className='flex flex-col h-full   text-md md:flex-row md:items-center [&_a:hover]:text-gray-300 [&_a]: transition-colors   [&_li]:py-2  md:[&_li]:items-center [&_li]:mx-6 [&_li]:border-b [&_li]:border-transparent-white md:[&_li]:border-none'>
            <li>
                <Link href='/blogs'  className=' ' >Blogs</Link>
            </li>
            <li>
                <Link href='/' className='' >Posts</Link>
            </li>
            <li>
                <Link href='/' className='' >Posts</Link>
            </li>
            <li>
                <Link href='/' className='md:hidden lg:block' >Posts</Link>
            </li>
            <li>
                <Link href='/' className='md:hidden lg:block' >Posts</Link>
            </li>


        </ul>
        
    </nav>
    </div>
    {children}
    <button
  className="ml-6 md:hidden mr-3"
  onClick={() => setHam((open) => !open)}
>
  <span className="sr-only">Toggle menu</span>
  <HamburgerIcon />
</button>
</Container>
   
       

    </header>
  )
}

export default Navbar