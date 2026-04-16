
import Darkmode from './Darkmode'
import NavItems from './Navitems'
import Phonenav from './Phonenav'

export default function Navbar() {
    return (
        <header className='SpecialNav w-full h-20 px-8 flex items-center justify-between shadow-md z-10 fixed'>

            <a href='/' className='myfont font-semibold text-sky-400 text-xl '>  M <span className='h1 text-black'>0</span>  </a>
            <NavItems />

            {/* Nav Icons */}

            <div className='flex gap-6 items-center'>
               <Darkmode/>
               <Phonenav/>
            </div>

        </header>
    )
}
