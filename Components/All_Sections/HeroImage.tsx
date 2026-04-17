import Image from 'next/image'
import { ScrollImage } from './ScrollAnimation'
export default function HeroImage() {

  {/* My Photo */ }
  return (
    <ScrollImage>
        <div className='Photo cursor-pointer w-65 m-auto mt-20 md:mt-5 rounded-full relative right-0.5  h-65 sm:right-2 md:right-1 lg:right-2.5 items-center flex border-5 border-sky-400 shadow-sky-400 shadow-[0_3px_25px_-] hover:shadow-[0_4px_35px_-]'>

           <span className='HiDiv absolute right-56 md:right-65 top-0 '>Hi</span>

              <Image
               src="/saleh.jpg"
               width={500}
               height={500}
               alt="My Photo"
               className="rounded-full w-65 m-auto "
              />

         </div>
    </ScrollImage>
  )
}
