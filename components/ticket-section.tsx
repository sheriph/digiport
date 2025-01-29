"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { toast } from "sonner"

interface TicketTier {
  name: string
  price: number
  seatsRemaining: number
  description: string
}

const ticketTiers: TicketTier[] = [
  {
    name: "EARLY BOOKING",
    price: 100,
    seatsRemaining: 50,
    description: "Limited time offer"
  },
  {
    name: "REGULAR",
    price: 150,
    seatsRemaining: 100,
    description: "Standard admission"
  }
]

export function TicketSection() {
  const [quantities, setQuantities] = useState<number[]>(new Array(ticketTiers.length).fill(0))

  const updateQuantity = (index: number, delta: number) => {
    const newQuantities = [...quantities]
    const newValue = Math.max(0, Math.min(ticketTiers[index].seatsRemaining, quantities[index] + delta))
    newQuantities[index] = newValue
    setQuantities(newQuantities)
  }

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity
  }

  const calculateTotal = () => {
    return quantities.reduce((total, quantity, index) => {
      return total + calculateSubtotal(ticketTiers[index].price, quantity)
    }, 0)
  }

  const handlePurchase = () => {
    if (calculateTotal() === 0) {
      toast.error("Please select at least one ticket! 🎫")
      return
    }
    toast.success("Processing your tickets! 🎉", {
      description: "Get ready for an amazing conference experience!"
    })
  }

  return (
    <div className="relative w-full bg-black py-32">
      <div className="mx-auto w-full px-4 md:w-[80%] max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#1d1836] p-8 rounded-xl"
        >
          {ticketTiers.map((tier, index) => (
            <div 
              key={index}
              className="mb-8 last:mb-0"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#FFE14D]">
                    {tier.name}
                    <span className="ml-3 text-base text-white/60">
                      ({tier.seatsRemaining} seats remaining)
                    </span>
                  </h3>
                  <p className="text-white/60 mt-1">{tier.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-[#140f2d] p-6 rounded-lg">
                <div>
                  <div className="text-sm text-white/60 mb-1">Ticket Price:</div>
                  <div className="text-3xl font-bold text-white">${tier.price.toFixed(2)}</div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-sm text-white/60 mr-4">Quantity</div>
                  <div className="flex items-center border border-white/20 rounded">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="px-4 py-2 text-white hover:bg-white/10 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-white min-w-[40px] text-center">
                      {quantities[index]}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="px-4 py-2 text-white hover:bg-white/10 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-white/60 mb-1">Subtotal:</div>
                  <div className="text-3xl font-bold text-white">
                    ${calculateSubtotal(tier.price, quantities[index]).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="text-white mr-2">Total Quantity:</div>
                <div className="text-2xl font-bold text-white">
                  {quantities.reduce((sum, q) => sum + q, 0)}
                </div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1 text-right">Total:</div>
                <div className="text-4xl font-bold text-white">
                  ${calculateTotal().toFixed(2)}
                </div>
              </div>
            </div>

            <Button 
              className="w-full mt-8 bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 text-white py-6 text-lg"
              onClick={handlePurchase}
            >
              GET TICKETS
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

