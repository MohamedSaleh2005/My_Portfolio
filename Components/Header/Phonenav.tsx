"use client"
import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { navItems } from './types'


export default function Phonenav() {
    const [open, setopen] = useState<boolean>(false);
    return (
        <div>

            <div>

                <button onClick={() => setopen(!open)}>
                    <FaList className='myhover md:hidden' />
                </button>

            </div>


            <div className={`${open ? "open" : "close"}  absolute top-21 right-3 w-25`}>
                <ul className='Special bg-gray-50 flex flex-col items-center rounded-md py-2 z-50'>
                    {navItems.map((item) => (

                        <li key={item.id} className='myhover py-1'>
                            <a href={item.href} onClick={() => setopen(false)} >{item.title}</a>
                        </li>

                    ))}
                </ul>
            </div>

        </div>
    )
}
