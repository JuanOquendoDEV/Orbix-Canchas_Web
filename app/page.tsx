
"use client";

import { useUser } from '@clerk/nextjs';
import { CarouselPlugin } from '@/components/ui/carousel-plugin';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';
import CarouselCanchas from '@/components/CarouselCanchas';
import { FAQ } from '@/components/Footer';
import ContactUs from '@/components/ContactUs';



export default function Home() {
  const user = useUser();
  console.log(user);

  return (
    <div className="font-sans flex flex-col justify-between min-h-screen bg-[#008c9a]">
      <Navbar />



      



      
      <main className="pt-20 bg-[#008c9a]">
        <CarouselPlugin />
      </main>
      

  
     <div>
      
     </div>
       
      <div className=' bg-[#006f79]   py-1 px-6 md:px-12 mt-30  text-lime-100'>
      
      

      <AboutUs/>

      

      
     
     
      </div>


      <div >
      
       <CarouselCanchas/>
       <ContactUs/>
       <FAQ/>
      

      </div>

    </div>
  );
}
