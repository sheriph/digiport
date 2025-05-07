import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, History, Palette, Euro, Shield, Globe, Building, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WhyChooseLocationsSection() {
  const locationReasons = {
    porto: [
      { icon: Lightbulb, text: "Thriving tech ecosystem" },
      { icon: History, text: "Historical entrepreneurial culture" },
      { icon: Palette, text: "Perfect blend of tradition and innovation" },
      { icon: Euro, text: "Affordable European destination" },
      { icon: Globe, text: "Rich cultural experience" },
      { icon: Shield, text: "Safe and welcoming environment" },
    ],
    luxembourg: [
      { icon: Building, text: "European business hub" },
      { icon: Globe, text: "Multilingual environment" },
      { icon: Lightbulb, text: "Innovation-driven economy" },
      { icon: Shield, text: "Political and economic stability" },
      { icon: Euro, text: "Financial center of Europe" },
      { icon: History, text: "Rich European heritage" },
    ]
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Choose Our Locations?</h2>
        
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
          
          {Object.entries(locationReasons).map(([location, reasons]) => (
            <TabsContent key={location} value={location}>
              <div className="grid md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <Card key={index}>
                    <CardContent className="flex flex-col items-center p-6">
                      <reason.icon className="h-12 w-12 text-blue-500 mb-4" />
                      <p className="text-center text-lg font-semibold">{reason.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

