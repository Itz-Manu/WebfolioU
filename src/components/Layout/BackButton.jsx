import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackButton({ onClick }) {
  return (
    <div>
       <button onClick={onClick} className='bg-indigo-400 text-white rounded-full p-2 absolute'><IoIosArrowRoundBack size="2em"/></button>
    </div>
  )
}
