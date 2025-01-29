import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VenueDetailsSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Venue Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Location & Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Porto Innovation Hub
                  <br />
                  Rua da Inovação 123
                  <br />
                  Porto, Portugal
                </p>
                <p>
                  <strong>Getting There:</strong>
                </p>
                <ul className="list-disc list-inside pl-4">
                  <li>10 minutes from Porto city center</li>
                  <li>Easy access by public transportation</li>
                  <li>Parking available on-site</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Accommodation Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold mb-2">Four Seasons Hotel Houston (Venue Hotel)</h4>
                <ul className="list-disc list-inside pl-4 mb-4">
                  <li>Special program rate: $250/night</li>
                  <li>Booking code: DT2025</li>
                  <li>Includes breakfast and WiFi</li>
                  <li>Walking distance to venue</li>
                  <li>Business center access</li>
                </ul>
                <h4 className="font-bold mb-2">Alternative Options:</h4>
                <ol className="list-decimal list-inside pl-4">
                  <li className="mb-2">
                    <span className="font-semibold">Marriott Marquis Houston</span>
                    <ul className="list-disc list-inside pl-4">
                      <li>0.3 miles from venue</li>
                      <li>$200/night</li>
                      <li>Business facilities</li>
                      <li>Shuttle service available</li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Hilton Americas-Houston</span>
                    <ul className="list-disc list-inside pl-4">
                      <li>0.4 miles from venue</li>
                      <li>$180/night</li>
                      <li>Executive floor options</li>
                      <li>Complimentary breakfast</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="transportation">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="transportation">Transportation</TabsTrigger>
                  <TabsTrigger value="weather">Weather & Clothing</TabsTrigger>
                  <TabsTrigger value="cultural">Cultural Tips</TabsTrigger>
                  <TabsTrigger value="amenities">Local Amenities</TabsTrigger>
                </TabsList>
                <TabsContent value="transportation">
                  <h4 className="font-bold mb-2">Airport Transfers:</h4>
                  <ul className="list-disc list-inside pl-4 mb-4">
                    <li>
                      Francisco Sá Carneiro Airport (OPO)
                      <ul className="list-disc list-inside pl-4">
                        <li>Distance: 15 km</li>
                        <li>Taxi: ~€25</li>
                        <li>Metro: €2.60 (requires transfer)</li>
                        <li>Airport shuttle: €6</li>
                      </ul>
                    </li>
                  </ul>
                  <h4 className="font-bold mb-2">Local Transportation:</h4>
                  <ul className="list-disc list-inside pl-4">
                    <li>Metro system</li>
                    <li>Bus services</li>
                    <li>Tram lines</li>
                    <li>Ride-sharing apps</li>
                    <li>Walking (Porto is very walkable)</li>
                  </ul>
                </TabsContent>
                <TabsContent value="weather">
                  <h4 className="font-bold mb-2">Porto Climate:</h4>
                  <ul className="list-disc list-inside pl-4 mb-4">
                    <li>Mediterranean climate with mild temperatures</li>
                    <li>Summer (June-August): 15-25°C (59-77°F)</li>
                    <li>Winter (December-February): 5-15°C (41-59°F)</li>
                    <li>Spring and Autumn: 10-20°C (50-68°F)</li>
                    <li>Occasional rain, especially in winter</li>
                  </ul>
                  <h4 className="font-bold mb-2">Suggested Clothing:</h4>
                  <ul className="list-disc list-inside pl-4">
                    <li>Business casual for the workshop</li>
                    <li>Comfortable walking shoes</li>
                    <li>Light jacket or sweater (evenings can be cool)</li>
                    <li>Umbrella or light raincoat (just in case)</li>
                  </ul>
                </TabsContent>
                <TabsContent value="cultural">
                  <ul className="list-disc list-inside pl-4">
                    <li>Business customs</li>
                    <li>Dining etiquette</li>
                    <li>Tipping guidelines</li>
                    <li>Social norms</li>
                    <li>Networking practices</li>
                  </ul>
                </TabsContent>
                <TabsContent value="amenities">
                  <h4 className="font-bold mb-2">Medical Facilities:</h4>
                  <ul className="list-disc list-inside pl-4 mb-4">
                    <li>Houston Methodist Hospital (0.8 miles)</li>
                    <li>St. Joseph Medical Center (1.2 miles)</li>
                    <li>24-hour pharmacies locations</li>
                  </ul>
                  <h4 className="font-bold mb-2">Dining Options:</h4>
                  <ul className="list-disc list-inside pl-4 mb-4">
                    <li>Hotel restaurants</li>
                    <li>Local recommendations</li>
                    <li>Dietary restriction-friendly venues</li>
                    <li>Group dining venues</li>
                  </ul>
                  <h4 className="font-bold mb-2">Tourist Attractions:</h4>
                  <ul className="list-disc list-inside pl-4">
                    <li>Space Center Houston</li>
                    <li>Museum District</li>
                    <li>Houston Zoo</li>
                    <li>Downtown Aquarium</li>
                    <li>Theater District</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

