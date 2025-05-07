import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare, Globe } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContactSection() {
  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button type="submit" className="w-full bg-[#ff4a4a] hover:bg-[#ff4a4a]/90">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="flex items-center mb-4">
              <Mail className="mr-2 h-5 w-5" />
              <span>training@digiportacademy.com</span>
            </p>
            
            <Tabs defaultValue="porto" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="porto">Porto</TabsTrigger>
                <TabsTrigger value="luxembourg">Luxembourg</TabsTrigger>
              </TabsList>
              
              <TabsContent value="porto" className="space-y-4">
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+351 223 456 789</span>
                </p>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 mt-1" />
                  <address className="not-italic">
                    DigiPort Academy
                    <br />
                    Porto Innovation Hub
                    <br />
                    Rua da Inovação 123
                    <br />
                    4000-123 Porto, Portugal
                  </address>
                </div>
              </TabsContent>
              
              <TabsContent value="luxembourg" className="space-y-4">
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>+352 28 99 75 55</span>
                </p>
                <div className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 mt-1" />
                  <address className="not-italic">
                    DigiPort Academy
                    <br />
                    Neumünster Abbey
                    <br />
                    Centre Culturel de Rencontre Abbaye de Neumünster, 28 Rue Münster
                    <br />
                    2160 Grund, Luxembourg
                  </address>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

