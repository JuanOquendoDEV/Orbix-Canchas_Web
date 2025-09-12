"use client"

import { ReservasCanchasChart } from "@/components/ui/chart-line-label"
import AboutUs2 from "./AboutUs2"

export default function AboutUs() {
  return (
    <section className=" bg-[#006f79] bg rounded-4xl shadow-2xl  py-20 px-6 md:px-12  text-lime-100" w-full  px-6>
      <div className=" grid md:grid-cols-2 gap-20 items-center text-lime-100">

        <div>
          <h2 className="text-4xl font-bold mb-5">Acerca de nosotros</h2>
          <p className=" text-xl mb-6 text-blue-100" >
            Administramos las reservas de canchas deportivas en toda la ciudad.
            Nuestra misión es que cada jugador pueda encontrar fácilmente dónde
            y cuándo jugar.
          </p>
          <p className="text-xl">
            A continuación puedes ver las reservas mensuales de canchas durante
            el año, reflejando la confianza que los usuarios depositan en
            nuestro servicio.
          </p>
        </div>

       <ReservasCanchasChart/>

          


        
     
      </div>
       <div className=" mt-20">
       <AboutUs2/>
       </div>

    </section>
  )
}
