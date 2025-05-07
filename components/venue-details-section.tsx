import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VenueDetailsSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Venue Details</h2>
        
        <Tabs defaultValue="porto" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="porto">Porto</TabsTrigger>
            <TabsTrigger value="luxembourg">Luxembourg</TabsTrigger>
          </TabsList>
          
          <TabsContent value="porto">
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
                    <h4 className="font-bold mb-2">Porto Bay Hotel (Partner Hotel)</h4>
                    <ul className="list-disc list-inside pl-4 mb-4">
                      <li>Special program rate: €120/night</li>
                      <li>Booking code: DIGIPORT</li>
                      <li>Includes breakfast and WiFi</li>
                      <li>Walking distance to venue</li>
                    </ul>
                    <h4 className="font-bold mb-2">Alternative Options:</h4>
                    <ol className="list-decimal list-inside pl-4">
                      <li className="mb-2">
                        <span className="font-semibold">Ribeira View</span>
                        <ul className="list-disc list-inside pl-4">
                          <li>0.5 km from venue</li>
                          <li>€85/night</li>
                          <li>Historic district location</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">Tech Hub Hostel</span>
                        <ul className="list-disc list-inside pl-4">
                          <li>0.3 km from venue</li>
                          <li>€45/night</li>
                          <li>Co-working space included</li>
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
                        <li>Portuguese business customs</li>
                        <li>Dining etiquette</li>
                        <li>Tipping guidelines (5-10% is typical)</li>
                        <li>Social norms</li>
                        <li>Porto wine tasting opportunities</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="amenities">
                      <h4 className="font-bold mb-2">Medical Facilities:</h4>
                      <ul className="list-disc list-inside pl-4 mb-4">
                        <li>Hospital de Santo António (1.5 km)</li>
                        <li>24-hour pharmacies nearby</li>
                      </ul>
                      <h4 className="font-bold mb-2">Dining Options:</h4>
                      <ul className="list-disc list-inside pl-4 mb-4">
                        <li>Traditional Portuguese cuisine</li>
                        <li>Seafood restaurants</li>
                        <li>Vegetarian and vegan options</li>
                        <li>Port wine cellars</li>
                      </ul>
                      <h4 className="font-bold mb-2">Tourist Attractions:</h4>
                      <ul className="list-disc list-inside pl-4">
                        <li>Ribeira District (UNESCO site)</li>
                        <li>Livraria Lello</li>
                        <li>Dom Luís I Bridge</li>
                        <li>Port Wine Cellars</li>
                        <li>Serralves Museum</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="luxembourg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Location & Parking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Neumünster Abbey
                      <br />
                      Centre Culturel de Rencontre Abbaye de Neumünster, 28 Rue Münster
                      <br />
                      2160 Grund, Luxembourg
                    </p>
                    <p>
                      <strong>Getting There:</strong>
                    </p>
                    <ul className="list-disc list-inside pl-4">
                      <li>15 minutes from Luxembourg City center</li>
                      <li>Bus stops nearby (lines 14 and 20)</li>
                      <li>Public parking available within 200m</li>
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
                    <h4 className="font-bold mb-2">Hotel Le Royal (Partner Hotel)</h4>
                    <ul className="list-disc list-inside pl-4 mb-4">
                      <li>Special program rate: €180/night</li>
                      <li>Booking code: DIGIPORT-LUX</li>
                      <li>Includes breakfast, WiFi and spa access</li>
                      <li>10-minute drive to venue</li>
                    </ul>
                    <h4 className="font-bold mb-2">Alternative Options:</h4>
                    <ol className="list-decimal list-inside pl-4">
                      <li className="mb-2">
                        <span className="font-semibold">Novotel Luxembourg</span>
                        <ul className="list-disc list-inside pl-4">
                          <li>1.5 km from venue</li>
                          <li>€140/night</li>
                          <li>Business facilities</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-semibold">ibis Luxembourg Centre</span>
                        <ul className="list-disc list-inside pl-4">
                          <li>1.2 km from venue</li>
                          <li>€95/night</li>
                          <li>Central location</li>
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
                          Luxembourg Airport (LUX)
                          <ul className="list-disc list-inside pl-4">
                            <li>Distance: 8 km</li>
                            <li>Taxi: ~€30</li>
                            <li>Bus: €2 (line 16 to city center)</li>
                            <li>Airport shuttle services available</li>
                          </ul>
                        </li>
                      </ul>
                      <h4 className="font-bold mb-2">Local Transportation:</h4>
                      <ul className="list-disc list-inside pl-4">
                        <li>Free public transportation in Luxembourg</li>
                        <li>Extensive bus network</li>
                        <li>Tram service in city center</li>
                        <li>Ride-sharing apps</li>
                        <li>City bikes for rent</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="weather">
                      <h4 className="font-bold mb-2">Luxembourg Climate:</h4>
                      <ul className="list-disc list-inside pl-4 mb-4">
                        <li>Continental climate with moderate temperatures</li>
                        <li>Summer (June-August): 13-24°C (55-75°F)</li>
                        <li>Winter (December-February): -1-5°C (30-41°F)</li>
                        <li>Spring and Autumn: 5-15°C (41-59°F)</li>
                        <li>Rainfall distributed throughout the year</li>
                      </ul>
                      <h4 className="font-bold mb-2">Suggested Clothing:</h4>
                      <ul className="list-disc list-inside pl-4">
                        <li>Business attire for the workshop</li>
                        <li>Layers for variable temperatures</li>
                        <li>Waterproof outerwear recommended</li>
                        <li>Comfortable walking shoes</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="cultural">
                      <ul className="list-disc list-inside pl-4">
                        <li>Multilingual environment (French, German, Luxembourgish)</li>
                        <li>Formal business etiquette</li>
                        <li>Tipping guidelines (service typically included)</li>
                        <li>International business customs</li>
                        <li>Financial sector insights</li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="amenities">
                      <h4 className="font-bold mb-2">Medical Facilities:</h4>
                      <ul className="list-disc list-inside pl-4 mb-4">
                        <li>Hôpital Kirchberg (3.5 km)</li>
                        <li>Centre Hospitalier de Luxembourg (2 km)</li>
                        <li>24-hour pharmacies in city center</li>
                      </ul>
                      <h4 className="font-bold mb-2">Dining Options:</h4>
                      <ul className="list-disc list-inside pl-4 mb-4">
                        <li>International cuisine</li>
                        <li>Luxembourg specialties</li>
                        <li>Fine dining options</li>
                        <li>Business lunch venues</li>
                      </ul>
                      <h4 className="font-bold mb-2">Tourist Attractions:</h4>
                      <ul className="list-disc list-inside pl-4">
                        <li>Luxembourg Old Town (UNESCO site)</li>
                        <li>Casemates du Bock</li>
                        <li>Grand Ducal Palace</li>
                        <li>MUDAM (Modern Art Museum)</li>
                        <li>European Quarter</li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

