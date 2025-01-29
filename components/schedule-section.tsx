import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const scheduleData = [
  {
    day: "Day 1",
    title: "Digital Strategy & Innovation",
    schedule: [
      { time: "09:00 - 12:30", event: "Digital Business Models & Market Trends" },
      { time: "12:30 - 14:00", event: "Lunch Break" },
      { time: "14:00 - 17:30", event: "Innovation Frameworks & Implementation" },
      { time: "19:00 - 21:00", event: "Networking Dinner" },
    ],
  },
  {
    day: "Day 2",
    title: "Data-Driven Decision Making",
    schedule: [
      { time: "09:00 - 12:30", event: "Business Analytics Fundamentals" },
      { time: "12:30 - 14:00", event: "Lunch Break" },
      { time: "14:00 - 17:30", event: "Performance Metrics Workshop" },
      { time: "19:00 - 21:00", event: "Porto Tech Community Meetup" },
    ],
  },
  {
    day: "Day 3",
    title: "Digital Leadership",
    schedule: [
      { time: "09:00 - 12:30", event: "Remote Team Management" },
      { time: "12:30 - 14:00", event: "Lunch Break" },
      { time: "14:00 - 17:30", event: "Digital Communication Strategies" },
      { time: "18:00 - 20:00", event: "Certification Ceremony" },
    ],
  },
]

export function ScheduleSection() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Program Schedule
        </motion.h2>
        <Tabs defaultValue="Day 1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="Day 1">Day 1</TabsTrigger>
            <TabsTrigger value="Day 2">Day 2</TabsTrigger>
            <TabsTrigger value="Day 3">Day 3</TabsTrigger>
          </TabsList>
          {scheduleData.map((day) => (
            <TabsContent key={day.day} value={day.day}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-[#ff4a4a]">
                  {day.day}: {day.title}
                </h3>
                <div className="space-y-4">
                  {day.schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col sm:flex-row border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="sm:w-40 font-bold text-[#ff4a4a]">{item.time}</div>
                      <div className="flex-1">{item.event}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

