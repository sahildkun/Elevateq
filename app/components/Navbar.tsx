import React from 'react'
import Link from 'next/link'
import Login from '../auth/Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import LogOut from '../auth/LogOut'
type Props = {}

const Navbar = async (props: Props) => {
  const session =  await getServerSession(authOptions);
  console.log(session);

  return (
    <div className='p-4 flex flex-auto justify-between'>
        <Link href='/' className='font-bold text-2xl'>
         Postyvity
        </Link>
       <ul>
       
        {!session?.user  ? <Login/> :  <LogOut image={session.user!.image!}/>}
        </ul>
    </div>
  )
}

export default Navbar