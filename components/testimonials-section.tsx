"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Director, TechGrowth Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The DigiPort Academy program was exactly what our company needed. The practical approach and local insights helped us reshape our digital strategy completely. The networking opportunities were invaluable.",
  },
  {
    name: "Marcus Schmidt",
    role: "Innovation Manager, Future Systems GmbH",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "As someone leading digital transformation initiatives, this program offered fresh perspectives and actionable strategies. The Porto experience added a unique cultural dimension to our learning.",
  },
  {
    name: "Ana Rodriguez",
    role: "Operations Head, Digital First Corp",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The intimate class size and hands-on workshops made this program stand out. The instructors' real-world experience in the Portuguese tech scene was particularly enlightening.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Participants Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

