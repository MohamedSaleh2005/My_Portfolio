import HeroContent from './HeroContent'
import HeroImage from './HeroImage'



export default function HeroSection() {
    return (

        <section className='h-165 md:h-150 py-20'>
            <div className="h-90 flex flex-col md:flex-row justify-between md:items-center mt-4 gap-4">

                     {/* Who I */}
                <div className="order-2 md:order-1 myfont text-sm mt-3 ">
                    <HeroContent/>
                </div>

                    {/* My Image */}
                <div className=' order-1 md:order-2 '>
                    <HeroImage/>
                </div>
             

            </div>

        </section>
    )
}