"use client"
import { useState } from "react";
import Swal from "sweetalert2";
import { Reveal } from "../All_Sections/ScrollAnimation";

export default function Contact() {
    const [result, setResult] = useState<string>("Send Message");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "87fef7a0-f3ac-4edb-befc-fbb9da7c3424");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                Swal.fire({
                    title: "Success ✅",
                    text: "Your Message has been sent",
                    icon: "success",
                    iconColor: "#38bdf8",

                    customClass: {
                        popup: "Special",
                        confirmButton: "Snt_Hover"
                    },
                });
                form.reset();
                setResult("Send Message")
            } else {
                setResult("Something went wrong ❌");
            }
        } catch (error) {
            setResult("Network Error ❌");
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2 py-20  md:py-0" id="Contact">
            <h1 className='myfont text-2xl m-auto'>Contact <span className='text-sky-400'>Me!</span></h1>
            <div className="flex mt-7">
            <Reveal direction="left" className="mx-auto">
                <input type="email" placeholder="Email Adress" name="email" className="Special Contact MyShadow w-82" required />
            </Reveal>
            </div>
            <div className="m-auto flex flex-col gap-2 ">
            <Reveal direction="right" className="mx-auto">
                <input type="text" placeholder="Full Name" name="name" className="Special Contact MyShadow w-82" required />
            </Reveal>
            <Reveal direction="bottom" className="">
                <textarea placeholder="Write Your Massege" name="message" className="Special Contact MyShadow h-40 w-82 resize-none" required></textarea>
            </Reveal>
            </div>
            <button type="submit" className="My_Hover  m-auto ">{result}</button>
        </form>
    )
}
