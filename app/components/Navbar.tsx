
import React from 'react'
import Navbar from './navref'
import HeaderNav from './hamburger.server'
type Props = {}




const MainNavbar = async (props: Props) => {
 
 
  return (
    <>
    <Navbar>
     {/* @ts-expect-error Server Component  */}
      <HeaderNav/>
    </Navbar>
    </>
  )
}

export default MainNavbar