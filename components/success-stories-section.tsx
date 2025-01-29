"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const successStories = [
  {
    company: "TechNova Solutions",
    sector: "IT Services",
    challenge: "Legacy system modernization and cloud migration",
    solution: "Implemented microservices architecture and DevOps practices",
    result: "40% reduction in deployment time, 30% cost savings",
    timeline: "6 months post-program",
    impact: "Improved customer satisfaction by 25%",
  },
  {
    company: "EcoRetail",
    sector: "E-commerce",
    challenge: "Digital customer engagement and personalization",
    solution: "Developed AI-driven recommendation engine and omnichannel strategy",
    result: "50% increase in online sales, 35% higher customer retention",
    timeline: "9 months post-program",
    achievement: "Industry innovation award for customer experience",
  },
  {
    company: "FinSecure Bank",
    sector: "Financial Services",
    challenge: "Digital banking transformation and cybersecurity enhancement",
    solution: "Implemented blockchain for transactions and AI for fraud detection",
    result: "70% reduction in fraud cases, 60% increase in mobile banking adoption",
    timeline: "12 months post-program",
    roi: "200% ROI within first year",
  },
]

export function SuccessStoriesSection() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Digital Transformation Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{story.company}</CardTitle>
                  <div className="text-sm text-gray-600 mb-2">{story.sector}</div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="mb-2">
                      <strong>Challenge:</strong> {story.challenge}
                    </p>
                    <p className="mb-2">
                      <strong>Solution:</strong> {story.solution}
                    </p>
                    <p className="mb-2">
                      <strong>Result:</strong> {story.result}
                    </p>
                    <p className="mb-2">
                      <strong>Timeline:</strong> {story.timeline}
                    </p>
                  </div>
                  <div className="mt-4 text-[#ff4a4a] font-semibold">
                    {story.impact && <p>{story.impact}</p>}
                    {story.achievement && <p>{story.achievement}</p>}
                    {story.roi && <p>{story.roi}</p>}
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

