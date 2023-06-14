import React from 'react'

type Props = {
    title: string,
    subtitle: string
}

export const HeroTitle = ({children}: {children: React.ReactNode}) => {
    return   <h1 className='text-5xl md:text-7xl p-2 font-extrabold blue_gradient'>{children}</h1>
}

export const HeroSubtitle = ({children}: {children: React.ReactNode}) => {
    return   <h1 className='text-sm my-12'>{children}</h1>
}
export const Hero = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='text-center my-44 mx-10 md:mx-44 '>{children}</div>
  )
}

