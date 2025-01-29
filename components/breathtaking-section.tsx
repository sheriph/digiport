"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function BreathtakingSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1],
    ["0%", "0%", "50%", "100%"]
  )

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const fullText = `Join us for an extraordinary journey into the world of technology and innovation. Our program features cutting-edge workshops, thought-provoking keynotes, and hands-on sessions led by industry pioneers. From AI and machine learning to web development and design thinking, we've curated content that spans the entire tech spectrum. Network with fellow innovators, gain practical insights, and explore the latest trends shaping the future of technology. Our carefully crafted agenda ensures a perfect balance of learning, interaction, and inspiration, making every moment count in your professional growth journey.`

  const shortText = fullText.slice(0, 120) + "..."

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden bg-white py-20">
      {/* Down Arrow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 mt-8">
        <Image
          src="https://demo-themewinter.com/exhibz/creative-conference/wp-content/uploads/sites/8/2021/12/about_arrow.png"
          alt="Down arrow"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mx-auto w-full px-4 md:w-[80%] max-w-7xl">
        <div className="relative">
          {/* Animated Outline Text */}
          <motion.div 
            style={{ x }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-center mb-12 opacity-10 absolute -top-20 md:-top-32 lg:-top-40 left-0 w-full whitespace-nowrap overflow-visible"
          >
            <span
              style={{
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "transparent"
              }}
            >
              ABOUT
            </span>
          </motion.div>

          {/* Content Container */}
          <div className="relative mt-32 md:mt-40 lg:mt-48">
            {/* Images - Hidden below lg breakpoint */}
            <div className="hidden lg:block">
              <motion.div
                variants={floatAnimation}
                initial="hidden"
                animate={controls}
                className="absolute -top-20 -left-10"
              >
                <Image
                  src="https://demo-themewinter.com/exhibz/creative-conference/wp-content/uploads/sites/8/2021/12/about_location_image.jpg"
                  alt="Conference venue with blue lighting"
                  width={400}
                  height={300}
                  className="w-72 h-auto object-cover"
                />
              </motion.div>
              <motion.div
                variants={floatAnimation}
                initial="hidden"
                animate={controls}
                className="absolute -top-20 -right-10"
              >
                <Image
                  src="https://demo-themewinter.com/exhibz/creative-conference/wp-content/uploads/sites/8/2021/12/gallery_image_1.jpg"
                  alt="Exhibition space"
                  width={400}
                  height={300}
                  className="w-72 h-auto object-cover"
                />
              </motion.div>
              <motion.div
                variants={floatAnimation}
                initial="hidden"
                animate={controls}
                className="absolute top-60"
              >
                <Image
                  src="https://demo-themewinter.com/exhibz/creative-conference/wp-content/uploads/sites/8/2021/12/about_image_3.jpg"
                  alt="Conference round table discussion"
                  width={300}
                  height={200}
                  className="w-48 h-auto object-cover"
                />
              </motion.div>
            </div>

            {/* Center Text Content */}
            <div className="max-w-2xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Welcome to Exhibz, the original social entertainment venue!
              </h2>
              <motion.div
                initial={{ height: "auto" }}
                animate={{ height: "auto" }}
                className="relative"
              >
                <p className="text-xl md:text-2xl lg:text-3xl mb-6">
                  {isExpanded ? fullText : shortText}
                </p>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 mx-auto text-[#ff4a4a] hover:text-[#ff4a4a]/90"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? (
                    <>
                      Show Less
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      See More
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.div>
              
              {/* Decorative Border Line */}
              <div className="w-96 max-w-full mx-auto mt-12">
                <div className="border-b-4 border-l-4 border-r-4 border-black h-6" />
              </div>
            </div>

            {/* Yellow Circle Accent */}
            <motion.div
              variants={floatAnimation}
              initial="hidden"
              animate={controls}
              className="hidden lg:block absolute top-60 right-0 w-32 h-32 bg-[#FFE14D] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

