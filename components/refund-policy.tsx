import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, XCircle, RefreshCw } from "lucide-react"

export function RefundPolicySection() {
  const policies = [
    { icon: CheckCircle, text: "50% refund when requested 30 working days before the training start date" },
    { icon: XCircle, text: "No refunds for cancellations less than 30 working days before the training" },
    {
      icon: AlertCircle,
      text: "In exceptional circumstances (e.g., visa rejection with proper documentation), cases will be reviewed individually",
    },
    {
      icon: RefreshCw,
      text: "Transfer to future training dates available subject to availability and administrative fee",
    },
  ]

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Refund Policy</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Our Commitment to Fairness</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {policies.map((policy, index) => (
                <li key={index} className="flex items-start">
                  <policy.icon className="h-6 w-6 mr-2 mt-1 flex-shrink-0" />
                  <span>{policy.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

