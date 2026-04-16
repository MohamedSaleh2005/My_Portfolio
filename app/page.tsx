import Navbar from "@/Components/Header/Navbar";
import AllSection from "@/Components/All_Sections/AllSections";
import ContactFoot from "@/Components/Footer&Contact/ContactFoot";



export default function Home() {
  return (

    <div className=" h-screen w-full">
      <Navbar/>
      <AllSection/>
      <ContactFoot/>
    </div>

  );
}
