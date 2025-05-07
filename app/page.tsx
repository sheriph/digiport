"use client"

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SpeakersSection } from "@/components/speakers-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { ProgramResourcesSection } from "@/components/program-resources-section"
import { QualityAssuranceSection } from "@/components/quality-assurance-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteNavigation } from "@/components/site-navigation"
import { VenueDetailsSection } from "@/components/venue-details-section"
import { WhoCanAttendSection } from "@/components/who-can-attend"
import { AccommodationOptionsSection } from "@/components/accommodation-options"
import { KeyBenefitsSection } from "@/components/key-benefits-section"
import { FeesAndPackageSection } from "@/components/fees-and-package"
import { VisaTravelSupportSection } from "@/components/visa-travel-support"
import { WhyChooseLocationsSection } from "@/components/why-porto"
import { RegistrationProcessSection } from "@/components/registration-process"
import { RefundPolicySection } from "@/components/refund-policy"
import { PartnershipsCsrSection } from "@/components/partnerships-csr"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <SiteNavigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="who-can-attend">
        <WhoCanAttendSection />
      </section>
      <section id="schedule">
        <ScheduleSection />
      </section>
      <section id="fees-and-package">
        <FeesAndPackageSection />
      </section>
      <section id="refund-policy">
        <RefundPolicySection />
      </section>
      <section id="accommodation">
        <AccommodationOptionsSection />
      </section>
      <section id="visa-travel-support">
        <VisaTravelSupportSection />
      </section>
      <section id="why-porto">
        <WhyChooseLocationsSection />
      </section>
      <section id="key-benefits">
        <KeyBenefitsSection />
      </section>
      <section id="speakers">
        <SpeakersSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="success-stories">
        <SuccessStoriesSection />
      </section>
      <section id="program-resources">
        <ProgramResourcesSection />
      </section>
      <section id="quality-assurance">
        <QualityAssuranceSection />
      </section>
      <section id="registration-process">
        <RegistrationProcessSection />
      </section>
      <section id="partnerships-csr">
        <PartnershipsCsrSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="venue">
        <VenueDetailsSection />
      </section>
      <SiteFooter />
    </main>
  )
}

