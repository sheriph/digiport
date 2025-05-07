import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Umbrella, Map } from "lucide-react"

export function VisaTravelSupportSection() {
  const supportItems = [
    "Business visa assistance",
    "Invitation letters",
    "Local transportation guidance",
    "Weather and clothing recommendations",
    "Cultural tips",
    "Insurance requirements",
  ]

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Visa & Travel Support</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <Plane className="mr-2 h-6 w-6" />
              We're Here to Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-2">
                  {supportItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center space-y-4">
                <Umbrella className="h-16 w-16 text-blue-500" />
                <Map className="h-16 w-16 text-green-500" />
                <p className="text-center text-lg font-semibold">
                  We'll guide you every step of the way to ensure a smooth journey to your chosen location in Porto or Luxembourg!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

