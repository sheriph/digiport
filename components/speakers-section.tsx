import Image from "next/image"
import { motion } from "framer-motion"

const speakers = [
  {
    name: "Maria Santos",
    role: "Co-Founder & Digital Transformation Consultant",
    image: "/placeholder.svg?height=400&width=300",
    bio: "With 15+ years of experience in digital transformation, Maria has led numerous Fortune 500 companies through successful digital initiatives. Her expertise spans across various industries, making her insights invaluable for businesses of all sizes.",
    expertise: "Digital Strategy, Change Management, Industry 4.0",
  },
  {
    name: "João Silva",
    role: "Co-Founder & Tech Startup Veteran",
    image: "/placeholder.svg?height=400&width=300",
    bio: "A serial entrepreneur with multiple successful tech startups under his belt, João brings a wealth of practical knowledge in building and scaling digital businesses. His hands-on approach to innovation has made him a respected figure in the Portuguese tech ecosystem.",
    expertise: "Startup Scaling, Product Development, Tech Innovation",
  },
]

export function SpeakersSection() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our Founders
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#ff4a4a]">{speaker.name}</h3>
              <p className="text-gray-600 mb-2">{speaker.role}</p>
              <p className="text-sm mb-2">{speaker.bio}</p>
              <p className="text-sm font-bold">Expertise: {speaker.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

