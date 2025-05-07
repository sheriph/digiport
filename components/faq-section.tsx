import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes DigiPort Academy different from other digital transformation courses?",
    answer:
      "Our program uniquely combines practical knowledge from experienced European entrepreneurs with hands-on implementation strategies. The intimate class size, direct access to founders, and immersion in vibrant tech ecosystems in both Porto and Luxembourg create an unparalleled learning experience.",
  },
  {
    question: "Do I need to speak Portuguese or French to attend the course?",
    answer:
      "No, the entire program is conducted in English at both our Portugal and Luxembourg locations. However, you'll get to experience the local culture and business environment, which adds value to your learning experience.",
  },
  {
    question: "What is the typical class size?",
    answer:
      "We maintain a small class size of 15-20 participants to ensure personal attention and meaningful interaction. This also facilitates better networking and group discussions.",
  },
  {
    question: "Can my company sponsor multiple employees across different sessions and locations?",
    answer:
      "Yes, we offer special corporate packages for companies sending multiple employees across different sessions and locations. We also provide customized training schedules for corporate groups of 10 or more.",
  },
  {
    question: "How do I choose between the Porto and Luxembourg locations?",
    answer:
      "Both locations offer the same high-quality curriculum and training experience. Your choice may depend on travel convenience, specific networking interests, or preference for a particular business ecosystem. We're happy to discuss the unique benefits of each location for your specific needs.",
  },
  {
    question: "What post-training support do you provide?",
    answer:
      "Participants receive 3 months of post-training support, including monthly online consultation sessions, access to our resource library, and connection to our alumni network.",
  },
  {
    question: "How do I know if I qualify for early bird pricing?",
    answer:
      "Early bird pricing is available until 2 months before each session start date. The system will automatically apply the discount during registration if you're eligible.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, bank transfers, and corporate payments. Payment plans are available for early registrations.",
  },
  {
    question: "What's included in the registration fee?",
    answer:
      "The fee covers the 3-day training, course materials, digital certificate, networking events, lunch and refreshments, evening activities, and 3 months of online support.",
  },
  {
    question: "Is prior experience in digital transformation required?",
    answer:
      "While no specific experience is required, a basic understanding of business processes and technology is helpful. The course is designed for mid to senior-level professionals with at least 3 years of work experience.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We offer a 50% refund when requested 30 working days before the training start date. No refunds are given for cancellations less than 30 working days before the training. In exceptional circumstances, cases will be reviewed individually.",
  },
]

export function FAQSection() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

