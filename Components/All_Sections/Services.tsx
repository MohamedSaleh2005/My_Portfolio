import { Reveal } from './ScrollAnimation'
import { cards } from './types'

export default function Services() {
    return (
        <section className='flex flex-col py-25 md:py-40' id='Services'>
            
            <h2 className='myfont text-2xl m-auto'>Our <span className='text-sky-400'>Services</span></h2>

            <div className='  md:px-30 my-10  grid md:grid-cols-3 place-items-center gap-8'>

                {cards.map((card, i) => (
                    <Reveal delay={i * 0.3} direction="bottom" key={i}>
                        <div className='Special w-65  shadow-sky-700 shadow-[1px_5px_5px_1px] hover:shadow-[0_3px_25px_-] p-5 rounded-xl border-sky-400 border-2 flex flex-col items-center'>

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
