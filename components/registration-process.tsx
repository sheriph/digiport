import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, PhoneCall, CreditCard, FileText, BookOpen } from "lucide-react"

export function RegistrationProcessSection() {
  const steps = [
    { icon: ClipboardList, text: "Submit online application" },
    { icon: PhoneCall, text: "Initial screening call" },
    { icon: CreditCard, text: "Payment processing" },
    { icon: FileText, text: "Visa support documentation" },
    { icon: BookOpen, text: "Pre-course materials access" },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Registration Process</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6">
                <step.icon className="h-12 w-12 text-blue-500 mb-4" />
                <p className="text-center text-lg font-semibold">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

