"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
   <Carousel
  plugins={[plugin.current]}
  className="w-full h-screen mt-10  overflow-hidden"
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}
>
  <CarouselContent className="w-full h-screen content-center ">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="w-full h-full p-2">
        <Card className="w-full h-[80vh]  ">
          <CardContent className="flex items-center justify-center w-full h-full bg-white">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious className="bg-transparent hover:bg-gray-800/50 text-white" />
  <CarouselNext className="bg-transparent hover:bg-gray-800/50 text-white"/>
</Carousel>

  )
}
