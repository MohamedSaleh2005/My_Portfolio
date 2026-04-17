import { Reveal } from './ScrollAnimation'
import { cards } from './types'

export default function Services() {
    return (
        <section className='flex flex-col py-25 md:py-40 items-center ' id='Services'>

            <h2 className='myfont text-2xl m-auto'>Our <span className='text-sky-400'>Services</span></h2>

            <div className='my-10 grid  md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {cards.map((card) => (
                    <Reveal direction='top' key={card.id}>
                        <div className={`Special w-70 shadow-sky-700 shadow-[1px_5px_5px_1px] hover:shadow-[0_3px_25px_-] p-5 rounded-xl lg:mx-0 border-sky-400 border-2 flex flex-col items-center ${card.id === 3 ? "md:mx-[50%]" : ""}`}>

                            <span className='text-sky-400 text-4xl flex'>{card.icon}</span>
                            <h3 className='myfont mt-2'>{card.title}</h3>
                            <p className="text-sm my-2 font-semibold text-center max-w-50">{card.text}</p>
                            <button className='My_Hover'>Read More</button>

                        </div>
                    </Reveal>
                ))}

            </div>

        </section>
    )
}
