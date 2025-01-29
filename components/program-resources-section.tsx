"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const resources = {
  preProgram: [
    "Digital Readiness Assessment Tool",
    "Change Management Baseline Survey",
    "Required Reading Materials:",
    "- Digital Transformation Fundamentals",
    "- Change Management Essentials",
    "- Houston Industry Analysis 2025"
  ],
  duringProgram: [
    "Workshop Materials:",
    "- Digital Strategy Workbook",
    "- Implementation Templates",
    "- Assessment Tools",
    "- Case Study Documentation",
    "Digital Resources:",
    "- Online Learning Platform Access",
    "- Interactive Tools",
    "- Collaboration Spaces",
    "- Resource Library"
  ],
  postProgram: [
    "Implementation Toolkit:",
    "- Strategy Templates",
    "- ROI Calculators",
    "- Change Management Tools",
    "- Progress Tracking Systems",
    "Ongoing Resources:",
    "- Monthly Webinars",
    "- Expert Office Hours",
    "- Community Forum Access",
    "- Implementation Support"
  ]
}

export function ProgramResourcesSection() {
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
          Program Resources and Materials
        </motion.h2>
        <Tabs defaultValue="preProgram" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="preProgram">Pre-Program</TabsTrigger>
            <TabsTrigger value="duringProgram">During Program</TabsTrigger>
            <TabsTrigger value="postProgram">Post-Program</TabsTrigger>
          </TabsList>
          {Object.entries(resources).map(([phase, items]) => (
            <TabsContent key={phase} value={phase}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{phase === 'preProgram' ? 'Pre-Program Package' : phase === 'duringProgram' ? 'During Program' : 'Post-Program Support'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {items.map((item, index) => (
                        <li key={index} className={item.startsWith('-') ? 'ml-6' : ''}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

