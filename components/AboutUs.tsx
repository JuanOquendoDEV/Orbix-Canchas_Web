"use client"

import { ReservasCanchasChart } from "@/components/ui/chart-line-label"
import AboutUs2 from "./AboutUs2"

export default function AboutUs() {
  return (
    <section className="w-full  px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-center text-lime-100">

        <div>
          <h2 className="text-4xl font-bold mb-5">Acerca de nosotros</h2>
          <p className=" mb-6 text-blue-100" >
            Administramos las reservas de canchas deportivas en toda la ciudad.
            Nuestra misión es que cada jugador pueda encontrar fácilmente dónde
            y cuándo jugar.
          </p>
          <p>
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
