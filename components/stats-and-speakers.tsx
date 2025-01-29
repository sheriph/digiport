"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"

const stats = [
  { number: "900", label: "participants", color: "#ff4a4a" },
  { number: "27", label: "speakers", color: "#FFE14D" },
  { number: "12", label: "workshops", color: "#000" },
  { number: "16", label: "exhibitors", color: "#8B5CF6" },
]

const speakers = [
  {
    name: "JULIA SCHWARZ",
    role: "Principal Software Engineer",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-blue-600"
  },
  {
    name: "MARK RUFFALO",
    role: "CEO, Example Corp",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-red-600"
  },
  {
    name: "MEGAN SMITH",
    role: "CEO, Shift7",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-cyan-600"
  },
  {
    name: "NURIA KELLEHER",
    role: "Director of Research, Nokia",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-gray-600"
  },
  {
    name: "SANDRA WACHTER",
    role: "Senior Manager, Red Hat",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-yellow-400"
  },
]

export function StatsAndSpeakers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Slowed down animation by adding more control points and adjusting the progress values
  const membersX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "-16%", "-32%", "-48%", "-64%", "-80%"]
  )
  
  const specialX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "-20%", "-40%", "-60%", "-80%", "-100%"]
  )

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const scrollAmount = 300 // Adjust this value to control scroll distance
    const container = scrollContainerRef.current
    const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden bg-white py-32">
      <div className="mx-auto w-full px-4 md:w-[80%] max-w-7xl">
        {/* Stats Section */}
        <div className="relative mb-32">
          {/* Background Text - MEMBERS */}
          <motion.div 
            style={{ x: membersX }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full whitespace-nowrap text-8xl sm:text-9xl opacity-10"
          >
            <span style={{ WebkitTextStroke: "1px black", WebkitTextFillColor: "transparent" }}>
              MEMBERS
            </span>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 flex items-center justify-center">
                  {stat.number}
                  <span className="w-2 h-2 rounded-full ml-1" style={{ backgroundColor: stat.color }} />
                </div>
                <div className="text-lg md:text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers Section */}
        <div className="relative">
          {/* Background Text - SPECIAL */}
          <div className="absolute -top-20 right-0 w-full overflow-hidden">
            <motion.div 
              style={{ x: specialX }}
              className="whitespace-nowrap text-right text-8xl sm:text-9xl opacity-10"
            >
              <span style={{ WebkitTextStroke: "1px black", WebkitTextFillColor: "transparent" }}>
                SPECIAL
              </span>
            </motion.div>
          </div>

          {/* Speakers Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              FEATURED SPEAKERS
            </h2>

            {/* Speakers Grid */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {speakers.map((speaker, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className={`aspect-[3/4] relative overflow-hidden ${speaker.color}`}>
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="object-cover mix-blend-luminosity"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={() => handleScroll('left')}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={() => handleScroll('right')}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

