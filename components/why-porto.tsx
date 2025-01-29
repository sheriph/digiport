import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, History, Palette, Euro, Shield, Globe } from "lucide-react"

export function WhyPortoSection() {
  const reasons = [
    { icon: Lightbulb, text: "Thriving tech ecosystem" },
    { icon: History, text: "Historical entrepreneurial culture" },
    { icon: Palette, text: "Perfect blend of tradition and innovation" },
    { icon: Euro, text: "Affordable European destination" },
    { icon: Globe, text: "Rich cultural experience" },
    { icon: Shield, text: "Safe and welcoming environment" },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Why Porto?</h2>
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
      </div>
    </section>
  )
}

