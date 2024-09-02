import React from 'react'
import Card from './Card'
import { useRef } from 'react';

export default function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc : "This is the card componenet in the foreground",
      filesize : "0.9 MB",
      close : true,
      tag : {
        isopen : true, tagTitle : "Now", tagColor : "green"
      },
    },
    {
      desc : "This is the card componenet in the foreground",
      filesize : "0.9 MB",
      close : false,
      tag : {
        isopen : true, tagTitle : "Now", tagColor : "green"
      },
    },
    {
      desc : "This is the card componenet in the foreground",
      filesize : "0.9 MB",
      close : true,
      tag : {
        isopen : true, tagTitle : "Now", tagColor : "green"
      },
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap'>
       {data.map((item,index)=>(
        <Card data={item} refernce={ref}/>
       ))}
    </div>
   
  )
}
