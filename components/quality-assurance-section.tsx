"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const qualityAssurance = {
  continuousImprovement: [
    {
      title: "Pre-Program Assessment",
      items: [
        "Participant expectations",
        "Current knowledge level",
        "Specific challenges",
        "Learning objectives"
      ]
    },
    {
      title: "Daily Feedback",
      items: [
        "Session effectiveness",
        "Speaker evaluation",
        "Content relevance",
        "Practical application"
      ]
    },
    {
      title: "Post-Program Evaluation",
      items: [
        "Overall program value",
        "Learning outcomes",
        "Implementation readiness",
        "Future needs"
      ]
    }
  ],
  implementationSupport: [
    {
      title: "30-Day Check-in",
      items: [
        "Progress assessment",
        "Challenge identification",
        "Resource requirements",
        "Success stories"
      ]
    },
    {
      title: "90-Day Review",
      items: [
        "Implementation status",
        "ROI measurement",
        "Best practices sharing",
        "Additional support needs"
      ]
    },
    {
      title: "6-Month Impact Analysis",
      items: [
        "Transformation progress",
        "Business results",
        "Success metrics",
        "Case study development"
      ]
    }
  ]
}

export function QualityAssuranceSection() {
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
          Quality Assurance and Feedback
        </motion.h2>
        <Tabs defaultValue="continuousImprovement" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="continuousImprovement">Continuous Improvement Process</TabsTrigger>
            <TabsTrigger value="implementationSupport">Implementation Support</TabsTrigger>
          </TabsList>
          {Object.entries(qualityAssurance).map(([phase, items]) => (
            <TabsContent key={phase} value={phase}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

