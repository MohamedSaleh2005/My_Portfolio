import React from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className=' flex justify-between px-7 items-center flex-col md:flex-row'>
        <p className='text-sm order-2 md:order-1'>© 2026 Mohamed Saleh. All rights reserved.</p>
        <a href='#' className='My_Hover mb-3 order-1 md:order-2'><FaAngleDoubleUp /></a>
    </div>
  )
}
