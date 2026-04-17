import Image from "next/image";
import { FaShare } from "react-icons/fa";
import { projects } from "./types";
import { Reveal } from "./ScrollAnimation";

export default function Projects() {
    return (

        <section className='flex flex-col py-30' id='Projects'>
            <h1 className='myfont text-2xl m-auto'>My <span className='text-sky-400'>Projects</span></h1>

            <div className='my-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto'>


                {projects.map((project) => (
                            <Reveal direction="top" key={project.id}>
                    <div className={`group Special border-sky-400 border  rounded-xl relative overflow-hidden shadow-sky-400 shadow-[0_2px_20px_-] hover:scale-[1.02] transition-all duration-30 ${project.id === 3 ? "h-60 md:h-90 md:w-165 lg:w-90 lg:h-60" : "w-82 lg:w-90 h-60"}`}>
                            {/* Project Image */}
                            <Image
                                fill
                                src={project.photo || "/placeholder.jpg"} 
                                alt="PROJECT"
                                className="rounded-xl object-cover"
                            />

                            {/* Overlay */}
                            <div className="overlay">

                                <div className="flex flex-col items-center justify-center h-full gap-4  text-white px-4">
                                    <h1 className="text-lg myfont">{project.title}</h1>

                                    <p className="flex gap-2 flex-wrap justify-center text-[12px] font-medium text-center">{project.about}</p>

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
