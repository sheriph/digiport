"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { RegistrationDialog } from "./registration-dialog"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "#speakers" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Program Resources", href: "#program-resources" },
  { name: "Quality Assurance", href: "#quality-assurance" },
  {
    name: "Register",
    component: (
      <RegistrationDialog
        trigger={
          <Button variant="ghost" className="justify-start w-full">
            Register
          </Button>
        }
      />
    ),
  },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Venue Details", href: "#venue" },
]

export function SiteNavigation() {
  const [open, setOpen] = useState(false)

  const handleNavigation = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) =>
            item.component ? (
              <div key={item.name}>{item.component}</div>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                className="justify-start"
                onClick={() => handleNavigation(item.href)}
              >
                {item.name}
              </Button>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

