"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RegistrationDialog } from "./registration-dialog"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "#speakers" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Program Resources", href: "#program-resources" },
  { name: "Quality Assurance", href: "#quality-assurance" },
  { name: "Register", href: "#register" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
  { name: "Venue Details", href: "#venue" },
]

const legalLinks = [
  { name: "Terms of use", href: "#" },
  { name: "Privacy policy", href: "#" },
  { name: "Booking policies", href: "#" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

const PrivacyPolicy = () => (
  <div className="space-y-4 text-sm">
    <h2 className="text-lg font-bold">PRIVACY POLICY - DigiPort Academy</h2>
    <p>Last Updated: January 2025</p>

    <h3 className="font-bold">1. INTRODUCTION</h3>
    <p>
      DigiPort Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
      we collect, use, disclose, and safeguard your information when you use our website digiportacademy.com and our
      services.
    </p>

    <h3 className="font-bold">2. INFORMATION WE COLLECT</h3>
    <h4 className="font-semibold">2.1 Personal Information</h4>
    <p>We collect information that you voluntarily provide, including:</p>
    <ul className="list-disc pl-5">
      <li>Name and contact details</li>
      <li>Professional information</li>
      <li>Employment history</li>
      <li>Educational background</li>
      <li>Payment information</li>
      <li>Correspondence with us</li>
      <li>Course preferences and feedback</li>
    </ul>

    <h4 className="font-semibold">2.2 Automatically Collected Information</h4>
    <p>We automatically collect certain information when you visit our website:</p>
    <ul className="list-disc pl-5">
      <li>IP address</li>
      <li>Browser type</li>
      <li>Device information</li>
      <li>Operating system</li>
      <li>Usage patterns</li>
      <li>Cookies and similar technologies</li>
    </ul>

    <h3 className="font-bold">3. HOW WE USE YOUR INFORMATION</h3>
    <h4 className="font-semibold">3.1 Primary Uses</h4>
    <ul className="list-disc pl-5">
      <li>Process your course registrations</li>
      <li>Communicate about your enrollment</li>
      <li>Provide customer support</li>
      <li>Send administrative information</li>
      <li>Process payments</li>
      <li>Personalize your experience</li>
    </ul>

    <h4 className="font-semibold">3.2 Additional Uses</h4>
    <ul className="list-disc pl-5">
      <li>Improve our services</li>
      <li>Analyze usage patterns</li>
      <li>Detect and prevent fraud</li>
      <li>Comply with legal obligations</li>
      <li>Send marketing communications (with consent)</li>
    </ul>

    <h3 className="font-bold">4. INFORMATION SHARING AND DISCLOSURE</h3>
    <h4 className="font-semibold">4.1 We May Share Information With:</h4>
    <ul className="list-disc pl-5">
      <li>Course instructors and facilitators</li>
      <li>Payment processors</li>
      <li>IT service providers</li>
      <li>Professional advisers</li>
      <li>Government authorities (when required by law)</li>
      <li>Partner hotels (only with your consent)</li>
    </ul>

    <h4 className="font-semibold">4.2 We Do Not:</h4>
    <ul className="list-disc pl-5">
      <li>Sell your personal information</li>
      <li>Share your information with unauthorized third parties</li>
      <li>Use your information for purposes other than those specified</li>
    </ul>

    <h3 className="font-bold">5. DATA RETENTION AND SECURITY</h3>
    <h4 className="font-semibold">5.1 Retention</h4>
    <ul className="list-disc pl-5">
      <li>We retain personal information as long as necessary</li>
      <li>Training records kept for 5 years</li>
      <li>Financial records as required by law</li>
      <li>You may request deletion of your data</li>
    </ul>

    <h4 className="font-semibold">5.2 Security Measures</h4>
    <ul className="list-disc pl-5">
      <li>SSL encryption</li>
      <li>Secure data storage</li>
      <li>Regular security assessments</li>
      <li>Limited staff access</li>
      <li>Employee confidentiality agreements</li>
    </ul>

    <h3 className="font-bold">6. YOUR RIGHTS</h3>
    <p>Under GDPR and applicable laws, you have the right to:</p>
    <ul className="list-disc pl-5">
      <li>Access your personal information</li>
      <li>Correct inaccurate data</li>
      <li>Request deletion of your data</li>
      <li>Object to processing</li>
      <li>Data portability</li>
      <li>Withdraw consent</li>
      <li>Lodge complaints with supervisory authorities</li>
    </ul>

    <h3 className="font-bold">7. COOKIES AND TRACKING</h3>
    <h4 className="font-semibold">7.1 We Use Cookies For:</h4>
    <ul className="list-disc pl-5">
      <li>Essential website functionality</li>
      <li>Analytics and performance</li>
      <li>User preferences</li>
      <li>Marketing (with consent)</li>
    </ul>

    <h4 className="font-semibold">7.2 Cookie Control</h4>
    <ul className="list-disc pl-5">
      <li>You can control cookies through browser settings</li>
      <li>Essential cookies cannot be disabled</li>
      <li>Refusing cookies may limit functionality</li>
    </ul>

    <h3 className="font-bold">8. INTERNATIONAL DATA TRANSFERS</h3>
    <ul className="list-disc pl-5">
      <li>We may transfer data within the EU/EEA</li>
      <li>International transfers comply with GDPR requirements</li>
      <li>Appropriate safeguards are implemented</li>
    </ul>

    <h3 className="font-bold">9. CHILDREN'S PRIVACY</h3>
    <ul className="list-disc pl-5">
      <li>Our services are not intended for users under 18</li>
      <li>We do not knowingly collect data from minors</li>
      <li>Parents should supervise children's online activities</li>
    </ul>

    <h3 className="font-bold">10. CHANGES TO THIS POLICY</h3>
    <ul className="list-disc pl-5">
      <li>We may update this policy periodically</li>
      <li>Material changes will be notified</li>
      <li>Continued use implies acceptance</li>
    </ul>

    <h3 className="font-bold">11. CONTACT US</h3>
    <p>For privacy-related inquiries:</p>
    <p>Data Protection Officer</p>
    <p>Email: privacy@digiportacademy.com</p>
    <p>Address: Rua da Inovação 123, 4000-123 Porto, Portugal</p>
  </div>
)

const TermsOfUse = () => (
  <div className="space-y-4 text-sm">
    <h2 className="text-lg font-bold">TERMS OF USE - DigiPort Academy</h2>
    <p>Last Updated: January 2025</p>

    <h3 className="font-bold">1. ACCEPTANCE OF TERMS</h3>
    <p>
      By accessing and using digiportacademy.com ("Website"), you agree to be bound by these Terms of Use. If you do not
      agree to these terms, please do not use the Website.
    </p>

    <h3 className="font-bold">2. USE OF WEBSITE</h3>
    <h4 className="font-semibold">2.1 Eligibility</h4>
    <ul className="list-disc pl-5">
      <li>You must be at least 18 years old to use this Website</li>
      <li>You must have the authority to enter into this agreement</li>
      <li>You must be able to form legally binding contracts</li>
    </ul>

    <h4 className="font-semibold">2.2 User Account</h4>
    <ul className="list-disc pl-5">
      <li>You are responsible for maintaining the confidentiality of your account</li>
      <li>You are responsible for all activities under your account</li>
      <li>You must provide accurate and complete information during registration</li>
      <li>You must notify us immediately of any unauthorized use of your account</li>
    </ul>

    <h3 className="font-bold">3. INTELLECTUAL PROPERTY</h3>
    <h4 className="font-semibold">3.1 Ownership</h4>
    <ul className="list-disc pl-5">
      <li>All content on the Website is owned by DigiPort Academy</li>
      <li>Content includes text, graphics, logos, icons, images, audio clips, digital downloads, and software</li>
      <li>The compilation of all content is our exclusive property</li>
    </ul>

    <h4 className="font-semibold">3.2 Limited License</h4>
    <ul className="list-disc pl-5">
      <li>We grant you a limited, non-exclusive, non-transferable license to access the Website</li>
      <li>
        You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative
        works from, transfer, or sell any information from the Website
      </li>
    </ul>

    <h3 className="font-bold">4. USER CONDUCT</h3>
    <p>Users agree not to:</p>
    <ul className="list-disc pl-5">
      <li>Use the Website for unlawful purposes</li>
      <li>Upload viruses or malicious code</li>
      <li>Attempt to gain unauthorized access</li>
      <li>Interfere with the Website's functionality</li>
      <li>Use automated systems to access the Website</li>
      <li>Copy or monitor Website content through robots or data mining</li>
    </ul>

    <h3 className="font-bold">5. MODIFICATIONS</h3>
    <h4 className="font-semibold">5.1 To Terms</h4>
    <ul className="list-disc pl-5">
      <li>We reserve the right to modify these terms at any time</li>
      <li>Changes will be effective immediately upon posting</li>
      <li>Your continued use of the Website constitutes acceptance of modified terms</li>
    </ul>

    <h4 className="font-semibold">5.2 To Website</h4>
    <ul className="list-disc pl-5">
      <li>We may modify, suspend, or discontinue any aspect of the Website at any time</li>
      <li>We are not liable for any modification, suspension, or discontinuation</li>
    </ul>

    <h3 className="font-bold">6. DISCLAIMER OF WARRANTIES</h3>
    <ul className="list-disc pl-5">
      <li>The Website is provided "as is" and "as available"</li>
      <li>We make no warranties, express or implied</li>
      <li>We do not guarantee accuracy, completeness, or timeliness of information</li>
    </ul>

    <h3 className="font-bold">7. LIMITATION OF LIABILITY</h3>
    <ul className="list-disc pl-5">
      <li>We are not liable for any direct, indirect, incidental, special, or consequential damages</li>
      <li>Maximum liability limited to fees paid to us, if any</li>
    </ul>

    <h3 className="font-bold">8. GOVERNING LAW</h3>
    <ul className="list-disc pl-5">
      <li>These terms are governed by Portuguese law</li>
      <li>Any disputes will be subject to the exclusive jurisdiction of Portuguese courts</li>
    </ul>

    <h3 className="font-bold">9. CONTACT INFORMATION</h3>
    <p>For questions about these Terms:</p>
    <p>Email: legal@digiportacademy.com</p>
    <p>Address: Rua da Inovação 123, 4000-123 Porto, Portugal</p>
  </div>
)

const BookingPolicy = () => (
  <div className="space-y-4 text-sm">
    <h2 className="text-lg font-bold">BOOKING POLICY - DigiPort Academy</h2>
    <p>Last Updated: January 2025</p>

    <h3 className="font-bold">1. COURSE BOOKING AND REGISTRATION</h3>
    <h4 className="font-semibold">1.1 Booking Process</h4>
    <ul className="list-disc pl-5">
      <li>Course registrations must be completed online</li>
      <li>Applications are reviewed within 5 business days</li>
      <li>Successful applicants receive confirmation email</li>
      <li>Payment must be made within 7 days of acceptance</li>
      <li>Registration is only confirmed after payment</li>
    </ul>

    <h4 className="font-semibold">1.2 Payment Options</h4>
    <ul className="list-disc pl-5">
      <li>Credit/Debit Card</li>
      <li>Bank Transfer</li>
      <li>Corporate Invoice (for approved companies)</li>
      <li>Installment plans (subject to approval)</li>
    </ul>

    <h3 className="font-bold">2. FEES AND PRICING</h3>
    <h4 className="font-semibold">2.1 Course Fees Include</h4>
    <ul className="list-disc pl-5">
      <li>Training sessions</li>
      <li>Course materials</li>
      <li>Digital certificate</li>
      <li>Lunches and refreshments</li>
      <li>Networking events</li>
      <li>3-month post-course support</li>
    </ul>

    <h4 className="font-semibold">2.2 Fee Structure</h4>
    <ul className="list-disc pl-5">
      <li>Early Bird: €1,500 (60 days before start date)</li>
      <li>Regular Rate: €1,800</li>
      <li>Group Discount: 15% (3+ participants)</li>
      <li>Corporate Rates: Available upon request</li>
    </ul>

    <h3 className="font-bold">3. CANCELLATION AND REFUNDS</h3>
    <h4 className="font-semibold">3.1 Participant Cancellation</h4>
    <ul className="list-disc pl-5">
      <li>100% refund: 60+ days before start date</li>
      <li>50% refund: 30-59 days before start date</li>
      <li>No refund: Less than 30 days before start date</li>
      <li>Administrative fee of €50 applies to all refunds</li>
    </ul>

    <h4 className="font-semibold">3.2 Special Circumstances</h4>
    <ul className="list-disc pl-5">
      <li>Visa rejection: 90% refund with official documentation</li>
      <li>Medical emergencies: Case-by-case evaluation</li>
      <li>Force majeure: Alternative dates offered</li>
    </ul>

    <h3 className="font-bold">4. COURSE TRANSFERS</h3>
    <h4 className="font-semibold">4.1 Date Changes</h4>
    <ul className="list-disc pl-5">
      <li>One free transfer to another date if requested 45+ days before</li>
      <li>Transfer fee of €200 if requested 30-44 days before</li>
      <li>No transfers possible within 30 days of start date</li>
      <li>Transfer subject to availability</li>
    </ul>

    <h4 className="font-semibold">4.2 Participant Substitution</h4>
    <ul className="list-disc pl-5">
      <li>Free substitution 30+ days before start</li>
      <li>€100 admin fee for substitutions within 30 days</li>
      <li>Substitute must meet eligibility criteria</li>
      <li>Required documentation must be submitted</li>
    </ul>

    <h3 className="font-bold">5. COURSE MODIFICATIONS</h3>
    <h4 className="font-semibold">5.1 By DigiPort Academy</h4>
    <p>We reserve the right to:</p>
    <ul className="list-disc pl-5">
      <li>Change course dates (alternative dates provided)</li>
      <li>Modify course content</li>
      <li>Alter the instructor lineup</li>
      <li>Adjust the venue within Porto</li>
    </ul>

    <h4 className="font-semibold">5.2 Minimum Participants</h4>
    <ul className="list-disc pl-5">
      <li>Minimum group size: 8 participants</li>
      <li>Decision made 30 days before start date</li>
      <li>Full refund if course cancelled</li>
      <li>Option to transfer to future dates</li>
    </ul>

    <h3 className="font-bold">6. VISA AND TRAVEL</h3>
    <h4 className="font-semibold">6.1 Visa Support</h4>
    <ul className="list-disc pl-5">
      <li>Invitation letters provided after payment</li>
      <li>Additional documentation available upon request</li>
      <li>No responsibility for visa decisions</li>
      <li>Visa processing time should be considered</li>
    </ul>

    <h4 className="font-semibold">6.2 Travel and Accommodation</h4>
    <ul className="list-disc pl-5">
      <li>Participants responsible for own arrangements</li>
      <li>Partner hotel rates subject to availability</li>
      <li>Airport transfers available on request</li>
      <li>Travel insurance strongly recommended</li>
    </ul>

    <h3 className="font-bold">7. ATTENDANCE AND CERTIFICATION</h3>
    <h4 className="font-semibold">7.1 Attendance Requirements</h4>
    <ul className="list-disc pl-5">
      <li>Minimum 80% attendance required</li>
      <li>All assignments must be completed</li>
      <li>Active participation expected</li>
      <li>Punctuality mandatory</li>
    </ul>

    <h4 className="font-semibold">7.2 Certification</h4>
    <ul className="list-disc pl-5">
      <li>Digital certificate issued upon completion</li>
      <li>Physical certificate available upon request</li>
      <li>Replacement certificates: €50 fee</li>
      <li>Corporate reporting available</li>
    </ul>

    <h3 className="font-bold">8. INTELLECTUAL PROPERTY</h3>
    <h4 className="font-semibold">8.1 Course Materials</h4>
    <ul className="list-disc pl-5">
      <li>Materials provided for personal use only</li>
      <li>No recording of sessions without permission</li>
      <li>No reproduction or distribution allowed</li>
      <li>Copyright remains with DigiPort Academy</li>
    </ul>

    <h3 className="font-bold">9. SPECIAL REQUIREMENTS</h3>
    <h4 className="font-semibold">9.1 Dietary Requirements</h4>
    <ul className="list-disc pl-5">
      <li>Must be communicated 14 days before</li>
      <li>Reasonable accommodations made</li>
      <li>Additional costs may apply</li>
    </ul>

    <h4 className="font-semibold">9.2 Accessibility</h4>
    <ul className="list-disc pl-5">
      <li>Facilities are wheelchair accessible</li>
      <li>Special assistance available upon request</li>
      <li>Advance notice required</li>
    </ul>

    <h3 className="font-bold">10. COMPLAINTS AND DISPUTES</h3>
    <h4 className="font-semibold">10.1 Complaint Procedure</h4>
    <ul className="list-disc pl-5">
      <li>Raise issues during the course</li>
      <li>Written complaints within 14 days</li>
      <li>Response within 5 working days</li>
      <li>Escalation process available</li>
    </ul>

    <h4 className="font-semibold">10.2 Resolution</h4>
    <ul className="list-disc pl-5">
      <li>Mediation as first step</li>
      <li>Portuguese law applies</li>
      <li>Porto courts jurisdiction</li>
      <li>Small claims procedure available</li>
    </ul>

    <h3 className="font-bold">11. CONTACT INFORMATION</h3>
    <p>For booking inquiries:</p>
    <p>Bookings Team</p>
    <p>Email: bookings@digiportacademy.com</p>
    <p>Phone: +351 223 456 789</p>
    <p>Hours: Monday-Friday, 9:00-18:00 WET</p>
  </div>
)

export function SiteFooter() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLegalLinkClick = (name: string) => {
    setOpenDialog(name)
  }

  return (
    <footer className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-[#FFE14D] px-8 py-16 md:px-16">
          <div className="mb-12">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-[#ff4a4a]">DigiPort</span>
                <span className="text-black">Academy</span>
              </span>
            </Link>
          </div>

          <div className="space-y-2 mb-12">
            <div className="text-xl font-medium">Monthly dates available</div>
            <div className="text-xl">
              Porto Innovation Hub,
              <br />
              Rua da Inovação 123, Porto, Portugal
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-sm">©2025, DigiPort Academy. All rights reserved.</div>
        </div>

        {/* Right Section */}
        <div className="bg-black text-white px-8 py-16 md:px-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-medium mb-8">Quick links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.name === "Register" ? (
                      <RegistrationDialog
                        trigger={
                          <Button
                            variant="link"
                            className="p-0 h-auto font-normal text-white hover:text-[#FFE14D] transition-colors"
                          >
                            Register
                          </Button>
                        }
                      />
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-[#FFE14D] transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector(link.href)?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-4">Get inside the hustle.</h2>
              <p className="text-2xl mb-8">
                Limited seats available.
                <br />
                Book yours now.
              </p>
              <RegistrationDialog
                trigger={
                  <Button
                    asChild
                    className="bg-[#ff4a4a] hover:bg-[#ff4a4a]/90 text-white px-8 py-2 text-sm font-medium"
                  >
                    <span>Register</span>
                  </Button>
                }
              />
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Dialog
                    open={openDialog === link.name}
                    onOpenChange={(isOpen) => (isOpen ? setOpenDialog(link.name) : setOpenDialog(null))}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="text-sm text-gray-400 hover:text-white transition-colors p-0"
                        onClick={() => handleLegalLinkClick(link.name)}
                      >
                        {link.name}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto DialogContent">
                      <DialogHeader>
                        <DialogTitle>{link.name}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        {link.name === "Privacy policy" ? (
                          <PrivacyPolicy />
                        ) : link.name === "Terms of use" ? (
                          <TermsOfUse />
                        ) : link.name === "Booking policies" ? (
                          <BookingPolicy />
                        ) : (
                          <div>Content for {link.name}</div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white hover:text-black"
              onClick={scrollToTop}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

