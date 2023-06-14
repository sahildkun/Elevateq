/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import { Container } from './components/Container'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Navbar from './components/navref'
import { Hero, HeroSubtitle, HeroTitle } from './components/Hero'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
export  default  async function Home() {

  // const session =  await getServerSession(authOptions);
  // if(session){
  //   redirect('/blogs')
  // }

 
  return (
    <>

   
     <main>
     <Container className={''}>
     <Hero>
      <HeroTitle>Fortis is a better way to rebuild yourself</HeroTitle>
      <HeroSubtitle>Fortis ex astra, invictus ad astra</HeroSubtitle>
     </Hero>
    </Container>
     </main>
     <footer>
     <Container className={''}>
      <div className='my-96'>
        jkjdsa
      </div>
    </Container>
     </footer>
  
    </>
    
  )
}