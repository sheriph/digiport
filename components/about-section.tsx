import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About DigiPort Academy
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-12 text-center max-w-3xl mx-auto">
            DigiPort Academy is a collective of Portuguese digital professionals and entrepreneurs passionate about
            sharing practical knowledge. Founded by Maria Santos, a digital transformation consultant with 15 years of
            experience, and João Silva, a tech startup founder, our team brings real-world expertise to professionals
            seeking practical digital skills.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Our Mission",
                items: [
                  "Empower professionals with practical digital skills",
                  "Bridge the gap between theory and real-world application",
                  "Foster innovation in the Portuguese tech ecosystem",
                ],
              },
              {
                title: "Program Highlights",
                items: [
                  "3-Day Intensive Training",
                  "Hands-on workshops and case studies",
                  "Networking opportunities with industry leaders",
                  "Located in the heart of Porto",
                ],
              },
              {
                title: "Key Benefits",
                items: [
                  "Develop a strategic digital mindset",
                  "Learn data-driven decision-making techniques",
                  "Enhance digital leadership and communication skills",
                  "Join a community of digital innovators",
                ],
              },
            ].map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#ff4a4a]">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#FFE14D]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild className="bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 text-white px-8 py-3 text-lg font-medium">
              <a href="#schedule">View Full Program</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

