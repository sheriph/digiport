import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Car, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AccommodationOptionsSection() {
  const accommodations = {
    porto: {
      hotels: [
        { name: "Porto Bay Hotel", stars: 4, price: "€120/night" },
        { name: "Ribeira View", stars: 3, price: "€85/night" },
        { name: "Tech Hub Hostel", stars: null, price: "€45/night" },
      ],
      transportation: ["15 minutes from Porto Airport", "Metro station: São Bento (5-min walk)"]
    },
    luxembourg: {
      hotels: [
        { name: "Hotel Le Royal", stars: 5, price: "€180/night" },
        { name: "Novotel Luxembourg", stars: 4, price: "€140/night" },
        { name: "ibis Luxembourg Centre", stars: 3, price: "€95/night" },
      ],
      transportation: ["20 minutes from Luxembourg Airport", "Bus stop: Hamilius (3-min walk)"]
    }
  }

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Accommodation Options</h2>
        
        <Tabs defaultValue="porto" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="porto" className="flex items-center justify-center">
              <MapPin className="mr-2 h-4 w-4" />
              Porto
            </TabsTrigger>
            <TabsTrigger value="luxembourg" className="flex items-center justify-center">
              <MapPin className="mr-2 h-4 w-4" />
              Luxembourg
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(accommodations).map(([location, data]) => (
            <TabsContent key={location} value={location}>
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
                      {data.hotels.map((hotel, index) => (
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
                      {data.transportation.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

