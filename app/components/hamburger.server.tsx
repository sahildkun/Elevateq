
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Login from '../auth/Login';
import LogOut from '../auth/LogOut';
type Props = {}

const HeaderNav = async (props: Props) => {
    const session =  await getServerSession(authOptions);
  return (
    <div className='ml-auto h-full flex items-center space-x-4 '>
<ul>
       
       {!session?.user  ? <Login/> :  <LogOut image={session.user!.image!}/>}
       </ul>
    </div>
  )
}

export default HeaderNav