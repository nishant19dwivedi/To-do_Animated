import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

export default function Card({data , refernce}) {
  return (
    <motion.div drag dragConstraints={refernce} className=' flex-shrink-0 relative w-60 h-72 rounded-[40px] px-8 py-10 text-white bg-zinc-900/90 overflow-hidden'>
        <FaRegFileAlt />
        <p className='leading-tight font-semibold mt-5 text-sm '>{data.desc}</p>
        <div className='footer absolute bottom-0  left-0 w-full'>
          <div className='flex justify-between px-8 py-3 mb-3'>
              <h5>{data.filesize}</h5>
          <span className=' w-7 h-7 flex justify-center items-center bg-zinc-600 rounded-full'>

          {data.close ? <IoMdClose /> : <LuDownload  size="0.7em" color="#fff"/>}
          </span>
          </div>
          {data.tag.isopen && <div className={`flex justify-center items-center py-2 font-semibold bg-green-500 w-full`}>{data.tag.tagTitle}</div>}
        </div>
    </motion.div>
  )
}
