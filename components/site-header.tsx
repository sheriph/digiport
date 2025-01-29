import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteNavigation } from "./site-navigation"
import { RegistrationDialog } from "./registration-dialog"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCollapsed(true), 3000) // Collapse after 3 seconds
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-6 w-full md:w-[80%] max-w-7xl">
        <div className="relative mx-4">
          <div className="absolute inset-0 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -z-10" />
          <div className="relative h-20 flex items-center justify-between px-6">
            <Link href="/" className="flex items-center overflow-hidden">
              <AnimatePresence>
                {!isCollapsed ? (
                  <motion.span
                    key="full"
                    className="text-2xl font-black tracking-tighter"
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#ff4a4a]">DigiPort</span>
                    <span className="text-black">Academy</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="collapsed"
                    className="text-2xl font-black tracking-tighter"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-[#ff4a4a]">D</span>
                    <span className="text-black">PA</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <div className="flex items-center space-x-4">
              <RegistrationDialog
                trigger={
                  <Button
                    size="lg"
                    className="bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 rounded-none px-8 text-sm font-medium"
                  >
                    Register
                  </Button>
                }
              />
              <SiteNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

