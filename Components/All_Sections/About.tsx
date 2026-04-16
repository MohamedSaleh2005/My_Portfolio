import Image from 'next/image'
import { Reveal } from './ScrollAnimation'
export default function About() {
  return (
    <section className='flex' id='About'>
    <div className='m-auto py-30 md:py-40  flex flex-col md:flex-row items-center gap-5 px-5'>

      {/* Image Border */}
        <Reveal direction="left" delay={0.1}>
          <div className='w-58 h-58 rounded-full flex mr-0.5  border-3 border-sky-400 p-2'>
          </div>
        </Reveal>
        {/* About Content */}
        <Reveal direction="right" delay={0.1}>
          <div className='myfont'>
            <h1 className='text-2xl'>About <span className='text-sky-400'>Me</span></h1>
            <h2 className='text-lg'>Front-End-Developer</h2>
            <p className='mt-2 max-w-xl text-sm'>I’m a 21 years old, Web Developer and Digital Marketing student who builds clean, responsive websites with a focus on performance, user experience.</p>
            <button className='My_Hover'>Read More</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
