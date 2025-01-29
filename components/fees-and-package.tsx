import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function FeesAndPackageSection() {
  const fees = [
    { type: "Early Bird (2 months prior)", price: "€500" },
    { type: "Regular Rate", price: "€300" },
    { type: "Group Discount (3+ participants)", discount: "15% off" },
  ]

  const packageIncludes = [
    "3-day training",
    "Course materials",
    "Digital certificate",
    "Networking events",
    "Lunch and refreshments",
    "Evening activities",
    "3-month online support",
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Fees and Package</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {fees.map((fee, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{fee.type}</span>
                    <span className="font-bold">{fee.price || fee.discount}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Package Includes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {packageIncludes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

