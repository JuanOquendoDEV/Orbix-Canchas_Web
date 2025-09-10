
import { CarouselPlugin } from "@/components/ui/carousel-plugin";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className= "font-sans flex flex-col justify-between min-h-screen  bg-stone-800">

      <Navbar/>
      
      <main className="pt-16 bg-stone-800">
      <CarouselPlugin/>
      </main>
      
      
      <AboutUs/>



    </div>

   
  );

  
}
