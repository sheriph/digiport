import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Car } from "lucide-react"

export function AccommodationOptionsSection() {
  const hotels = [
    { name: "Porto Bay Hotel", stars: 4, price: "€120/night" },
    { name: "Ribeira View", stars: 3, price: "€85/night" },
    { name: "Tech Hub Hostel", stars: null, price: "€45/night" },
  ]

  const transportation = ["15 minutes from Porto Airport", "Metro station: São Bento (5-min walk)"]

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Accommodation Options</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Bed className="mr-2 h-6 w-6" />
                Partner Hotels (Special Rates)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {hotels.map((hotel, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>
                      {hotel.name} {hotel.stars && `(${hotel.stars}*)`}
                    </span>
                    <span className="font-bold">{hotel.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Car className="mr-2 h-6 w-6" />
                Transportation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
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

