
"use client";

import { useUser } from '@clerk/nextjs';
import { CarouselPlugin } from '@/components/ui/carousel-plugin';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/Navbar';


export default function Home() {
  const user = useUser();
  console.log(user);

  return (
    <div className="font-sans flex flex-col justify-between min-h-screen bg-[#008c9a]">
      <Navbar />
      
      <main className="pt-20 bg-[#008c9a]">
        <CarouselPlugin />
      </main>
      
      <AboutUs />
    </div>
  );
}
