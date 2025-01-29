"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const days = [
  { number: "18", label: "FEB", day: "DAY 1" },
  { number: "19", label: "FEB", day: "DAY 2" }
]

const agendaData = {
  "DAY 1": [
    {
      time: "9:00 AM - 12:00 PM",
      title: "State of WordPress",
      color: "bg-emerald-500",
      speakers: [
        {
          name: "JULIA SCHWARZ",
          role: "Principal Software Engineer",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "NURIA KELLEHER",
          role: "Director of Research, Nokia",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "SANDRA WACHTER",
          role: "Senior Manager, Red Hat",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        }
      ]
    },
    {
      time: "12:00 PM - 2:00 PM",
      title: "CSS Developer Conf",
      color: "bg-blue-500",
      speakers: [
        {
          name: "MEGAN SMITH",
          role: "CEO, Shift7",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "MARK RUFFALO",
          role: "CEO, Example Corp",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "JULIA SCHWARZ",
          role: "Principal Software Engineer",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        }
      ]
    },
    {
      time: "2:00 PM - 4:00 PM",
      title: "What next in NextJS",
      color: "bg-purple-500",
      speakers: []
    }
  ],
  "DAY 2": [
    {
      time: "10:00 AM - 1:00 PM",
      title: "Future of React",
      color: "bg-emerald-500",
      speakers: [
        {
          name: "MARK RUFFALO",
          role: "CEO, Example Corp",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "SANDRA WACHTER",
          role: "Senior Manager, Red Hat",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        }
      ]
    },
    {
      time: "2:00 PM - 5:00 PM",
      title: "AI in Web Development",
      color: "bg-blue-500",
      speakers: [
        {
          name: "JULIA SCHWARZ",
          role: "Principal Software Engineer",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        },
        {
          name: "NURIA KELLEHER",
          role: "Director of Research, Nokia",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tk6CXiBUknjdPGZQi9nxhpgyod9dSu.png"
        }
      ]
    }
  ]
}

export function AgendaSection() {
  const [activeDay, setActiveDay] = useState("DAY 1")

  return (
    <div className="relative w-full bg-black md:bg-transparent px-4 md:px-0">
      <div className="absolute inset-y-0 right-0 w-full md:w-[80%] bg-black" />
      <div className="relative text-white">
        <div className="mx-auto w-full px-4 md:pl-[25%] md:pr-[5%] max-w-7xl py-32">
          {/* Title */}
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-20">
            AGENDA
          </h2>

          {/* Days */}
          <div className="flex gap-8 mb-12">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(day.day)}
                className={cn(
                  "flex flex-col transition-colors duration-300",
                  activeDay === day.day ? 'text-[#FFE14D]' : 'text-white hover:text-[#FFE14D]/70'
                )}
              >
                <div className="text-sm">{day.day}</div>
                <div className="text-2xl font-bold flex items-baseline">
                  {day.number}
                  <span className="text-sm ml-1">{day.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Sessions */}
          <div className="relative">
            {/* Decorative Lines */}
            <div className="absolute left-0 top-0 w-24 h-full">
              <div className="absolute left-0 top-0 w-px h-full bg-white/20" />
              <div className="absolute left-8 top-0 w-px h-full bg-white/20" />
              <div className="absolute left-16 top-0 w-px h-full bg-white/20" />
            </div>

            {/* Session Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {agendaData[activeDay as keyof typeof agendaData].map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-24"
                  >
                    {/* Connector Lines */}
                    <div className="absolute left-0 top-1/2 w-24 h-px bg-white/20" />
                    <div className="absolute left-8 top-1/2 w-16 h-px bg-white/20" />

                    <div className="grid md:grid-cols-[200px,1fr] gap-8">
                      {/* Time Block */}
                      <div className={`${session.color} p-6`}>
                        <div className="text-xl font-medium">
                          {session.time}
                        </div>
                      </div>

                      {/* Session Content */}
                      <div>
                        <h3 className="text-2xl font-bold mb-6">
                          {session.title}
                        </h3>

                        {/* Speakers */}
                        <div className="flex flex-wrap gap-8">
                          {session.speakers.map((speaker, speakerIndex) => (
                            <div key={speakerIndex} className="flex items-center gap-4">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFE14D]">
                                <Image
                                  src={speaker.image || "/placeholder.svg"}
                                  alt={speaker.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-bold">{speaker.name}</div>
                                <div className="text-sm text-gray-400">{speaker.role}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

