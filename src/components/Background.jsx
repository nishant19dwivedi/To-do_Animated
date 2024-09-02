import React from 'react'

export default function Background() {
  return (
      <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] flex justify-center w-full py-10 text-zinc-600'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter  text-zinc-900 text-[13vw] font-semibold'>Docs.</h1>
      
      </div>
    )
}
