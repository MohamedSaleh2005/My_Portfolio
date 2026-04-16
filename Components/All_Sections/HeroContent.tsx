"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { icons } from "./types";

export default function HeroContent() {
  const [text] = useTypewriter({
    words: ["Web Developer", "Next.js Developer" , "Digital Marketer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <div>
      <h2>Hello, I'm</h2>
      <h1 className="text-2xl font-bold">Mohammed Saleh</h1>
      <h3>And I'm a{" "} <span className="text-sky-400">{text} <Cursor cursorStyle="|" /></span ></h3>
      <p className="w-80 mt-2 md:w-120 font-sans font-semibold">I'm Mohamed Saleh, a Web Developer & Digital Marketer combining clean code  with smart digital strategies to grow brands online </p>


      <div className="flex gap-3 mt-4">
        {icons.map((icon) => (
          <a className="BtnHover" key={icon.id} href={icon.link}>
            {icon.icon}
          </a>
        ))}
      </div>

      <a href="/Mohamed_Saleh_CV.pdf" download="Mohamed Saleh CV" className="My_Hover w-37" >Download CV</a>
    </div>
  );
}
