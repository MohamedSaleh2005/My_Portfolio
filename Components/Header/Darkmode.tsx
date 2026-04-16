"use client"
import { useEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

export default function NavIcons() {
  // Dark mode State
  const [dark, setdark] = useState<boolean>(false)

  // Save Theme In localStorage

  useEffect(() => {
    const theme = localStorage.getItem("DarkStorge");
    if (theme !== null) {
      const isDark = JSON.parse(theme);
      setdark(isDark);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("DarkStorge", JSON.stringify(dark));
  }, [dark]);


  return (
    <div>

      <button onClick={() => setdark(!dark)}>
        {dark ? <MdOutlineDarkMode className='myhover w-5 h-5 mt-1' /> : <MdOutlineLightMode className='myhover w-5 h-5 mt-1' />}
      </button>

    </div>
  )
}
