import { ReactNode } from "react"
import { FaInstagram , FaGithub , FaFacebook , FaTwitter, FaChartBar , FaCode, FaPencilAlt} from 'react-icons/fa'


interface Icons {
    id:number
    link?:string
    icon?:ReactNode
}

    // Hero Icons
export const icons: Icons[] = [
    {id:1 , link: "https://www.instagram.com/xs_______707", icon: <FaInstagram />},
    {id:2 , link: "https://github.com/MohamedSaleh2005" , icon: <FaGithub />},
    {id:3 , link: "#" , icon: <FaFacebook />},
    {id:4 , link: "#" , icon: <FaTwitter />},
]
    // Services Cards
interface Cards extends Icons {
    title:string
    text:string
}

export const cards: Cards[] = [
    {id:1 , title: "Web Development" , icon: <FaCode /> , text:"Building modern websites with clean code and strong performance."},
    {id:2 , title: "Digital Marketing" , icon: <FaChartBar /> , text:"Bachelor student focused on effective digital growth strategies"},
    {id:3 , title: "UI / UX Design" , icon: <FaPencilAlt /> , text:"Designing clean user friendly interfaces for better experiences"},
]
    // Projects Cards

type Projects = {
    id:number ,
    title:string,
    photo:string,
    link:string,
    about:string

}
export const projects: Projects[] = [
    // {id:1 , title:"Portfolio Website" , photo:"/saleh.jpg" , link:"https://github.com/MohamedSaleh2005" , skills:["Next-js" , "T-Script" , "Tailwind"]},
    // {id:2 , title:"E-Commerce Website" , photo:"/saleh.jpg" , link:"https://github.com/MohamedSaleh2005" , skills:["Next-js" , "T-Script" , "Tailwind"]},
    // {id:3 , title:"DashBoard Website" , photo:"/saleh.jpg" , link:"https://github.com/MohamedSaleh2005" , skills:["Next-js" , "T-Script" , "Tailwind"]},
    {id:1 , title:"Portfoilo Website" , photo:"/p13.png" , link:"https://github.com/MohamedSaleh2005/Portfolio.git" , about:"Responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase projects and skills with a clean, modern design."},
    {id:2 , title:"Spotift Website" , photo:"" , link:"" , about:""},
    {id:3 , title:"Restaurant Website" , photo:"" , link:"" , about:""},
]    

    // My Skills

type Skills = {
    id:number,
    title:string,
    photo:string 
}

export const skills: Skills[] = [
    {id:1 , title:"HTML" , photo:"/html.png"},
    {id:2 , title:"CSS" , photo:"/css.png"},
    {id:3 , title:"GIT" , photo:"/git.png"},
    {id:4 , title:"T-SCRIPT" , photo:"/tscript.png"},
    {id:5 , title:"SCRIPT JS" , photo:"/script.png"},
    {id:6 , title:"REACT JS" , photo:"/re.png"},
    {id:7 , title:"NEXT JS" , photo:"/next.png"},
    {id:8 , title:"TAILWIND" , photo:"/tailwind.png"},
]