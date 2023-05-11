'use client'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'





type Props = {

        image: string  ,
    
}

const LogOut = ({image}: Props) => {
    const [loggedOut, setLoggedOut] = useState(false);
   
    const logOutHandler = async () => {
      setLoggedOut(true);
      await signOut();
         
    }
  return (
    <li className="flex gap-8 items-center">
    <button
      className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md "
      onClick={logOutHandler}  
    >
      {!loggedOut ?  'Sign Out' : "Signing out "}
    </button>
    <Link href={"/dashboard"}>
      <Image
        width={64}
        height={64}
        className="w-14 rounded-full"
        src={image}
        alt=""
        priority
      />
    </Link>
  </li>
  )
}

export default LogOut