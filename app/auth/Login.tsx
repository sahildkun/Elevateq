"use client"

import { signIn } from "next-auth/react"
import { Button } from "../components/ui/button"

export default function Login() {

  const handler = async () => 
  {
   
    await signIn();
    
  }

  
  return (
  
      <Button className="bg-primary-gradient rounded-full "
       onClick={handler}>Sign Up</Button>
  
  )
  }