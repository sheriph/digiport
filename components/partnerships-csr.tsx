import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Users, Leaf } from "lucide-react"

export function PartnershipsCsrSection() {
  const partnerships = [
    "Porto Municipality",
    "Local Tech Startups",
    "Portuguese Digital Alliance",
    "International Business Network",
  ]

  const csrInitiatives = [
    "Scholarship program for local professionals",
    "Green training initiatives",
    "Community tech workshops",
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Partnerships & CSR</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Handshake className="mr-2 h-6 w-6" />
                Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {partnerships.map((partner, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Leaf className="mr-2 h-6 w-6" />
                CSR Initiatives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {csrInitiatives.map((initiative, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{initiative}</span>
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

