import Image from "next/image";
import { FaShare } from "react-icons/fa";
import { projects } from "./types";
import { Reveal } from "./ScrollAnimation";

export default function Projects() {
    return (

        <section className='flex flex-col py-30' id='Projects'>
            <h1 className='myfont text-2xl m-auto'>My <span className='text-sky-400'>Projects</span></h1>

            <div className='my-10 grid md:grid-cols-3 gap-10 m-auto'>


                {projects.map((project, i) => (
                    <Reveal delay={i * 0.3} direction="bottom" key={i}>
                        <div className="group Special border-sky-400 border w-85 h-60 rounded-xl relative overflow-hidden shadow-sky-400 shadow-[0_2px_20px_-] hover:scale-[1.02] transition-all duration-30">
                            {/* Project Image */}
                            <Image
                                fill
                                src={project.photo || "/placeholder.jpg"} 
                                alt="PROJECT"
                                className="rounded-xl object-cover"
                            />

                            {/* Overlay */}
                            <div className="overlay">

                                <div className="flex flex-col items-center justify-center h-full gap-4 myfont text-white px-4">
                                    <h1 className="text-lg">{project.title}</h1>

                                    <p className="flex gap-2 flex-wrap justify-center text-sm text-center">{project.about}</p>

                                    <a href={project.link} target="_blank" className="My_Hover flex gap-3">
                                        Github    <FaShare />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}


            </div>
        </section>
    )
}
