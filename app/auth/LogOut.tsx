'use client'
import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
 



type Props = {

        image: string  ,
    
}

const LogOut = ({image}: Props) => {
    const [loggedOut, setLoggedOut] = useState(false);
    const router = useRouter()
    const logOutHandler = async () => {
      setLoggedOut(true);
      await signOut();
      () => router.refresh();
         
    }
  return (
    <li className="flex gap-8 items-center">
    <button
      className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md "
      onClick={logOutHandler}  
    >
      {!loggedOut ?  'Sign Out' : "Signing out "}
    </button>
    <Link href={"/"}>
      <Image
        width={40}
        height={40}
        className="w-10 rounded-full"
        src={image}
        alt=""
        priority
      />
    </Link>
  </li>
  )
}

export default LogOut