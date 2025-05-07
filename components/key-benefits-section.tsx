import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, User } from "lucide-react"

export function KeyBenefitsSection() {
  const organizationBenefits = [
    "Immediate ROI through practical implementation plans",
    "Access to European tech networks",
    "Follow-up consultation session",
    "Digital transformation roadmap",
    "Employee retention strategy",
    "International exposure",
    "Certificate of completion for corporate training requirements",
  ]

  const employeeBenefits = [
    "Hands-on practical skills",
    "International networking",
    "European tech ecosystem exposure",
    "Career advancement opportunities",
    "Digital leadership certification",
    "Post-training support",
    "Access to online resources",
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Building className="mr-2 h-6 w-6" />
                For Organizations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {organizationBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <User className="mr-2 h-6 w-6" />
                For Employees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {employeeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{benefit}</span>
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

