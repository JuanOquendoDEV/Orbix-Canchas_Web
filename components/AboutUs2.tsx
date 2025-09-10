"use client"

import Image from "next/image"

export default function AboutUs2() {
  return (
    <section className=" bg-[#006f79] bg rounded-4xl shadow-2xl w-full py-20 px-6 md:px-12  text-lime-100">
      <div className="max-w-19xl mx-auto grid md:grid-cols-2 gap-12 ">
        
        
        <div>
          <h2 className="text-4xl text font-bold mb-8">Buscamos lo mejor para ti</h2>
          <ul className="flex flex-col gap-6 text-lg">
            <li className="bg-emerald-700 p-4 rounded-xl shadow-md">
              Amplia variedad de canchas para fútbol, baloncesto y más.
            </li>
            <li className="bg-emerald-700 p-4 rounded-xl shadow-md">
              Reservas rápidas y seguras en cualquier momento.
            </li>
            <li className="bg-emerald-700 p-4 rounded-xl shadow-md">
              Instalaciones modernas y bien cuidadas.
            </li>
            <li className="bg-emerald-700 p-4 rounded-xl shadow-md">
              Atención personalizada y promociones exclusivas.
            </li>
          </ul>
        </div>

       
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/Basket.avif" 
            alt="Implementos deportivos"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
