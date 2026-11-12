import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { HubspotForm } from "@/components/hubspot-form"
import { AnimatedSection } from "@/components/animated-section"

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of product data can PDP.studio ingest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle virtually any format: manufacturer PDFs, CSVs, raw images, spreadsheets, and more. Specs, dimensions, materials, and certifications are extracted automatically with no manual data entry required.",
      },
    },
    {
      "@type": "Question",
      name: "How does PDP.studio ensure accuracy and avoid hallucinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every output is anchored directly to your source product data. Our guardrails ensure that no dimension, material, or certification is ever fabricated, so nothing reaches your storefront that wasn't in your source files.",
      },
    },
    {
      "@type": "Question",
      name: "Which PIM systems does PDP.studio integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDP.studio is accessible via API, making it compatible with any PIM that supports inbound data. For Enterprise customers, we establish a direct integration so finished content flows straight into your PIM with no manual upload cycles.",
      },
    },
    {
      "@type": "Question",
      name: "How does localization work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No literal translations here. Our language layer knows that a 'vest' in New York is a 'waistcoat' in London and a 'Weste' in Berlin, and automatically converts units, sizing, and compliance details per market. Content is born local, not retrofitted after the fact.",
      },
    },
    {
      "@type": "Question",
      name: "What's the typical time to go live with new products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional content workflows take 3 to 6 weeks per seasonal launch. PDP.studio gets you from ingestion to publish-ready in under 48 hours, so products aren't sitting in warehouses waiting for their listings to go live.",
      },
    },
    {
      "@type": "Question",
      name: "How does PDP.studio optimize for AI search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Product discovery is shifting from traditional search to AI-generated answers and recommendations. We structure every title, description, meta tag, and alt-text field for discoverability across search engines, answer engines, and generative AI surfaces.",
      },
    },
  ],
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PDP.studio",
  url: "https://pdp.studio",
  description: "AI-powered PDP production platform for enterprise retailers.",
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="hidden md:block absolute bottom-[-320px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-8 md:mt-[400px]" delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection id="how-it-works" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <HowItWorksSection />
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1500px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection id="demo" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-2 md:mt-4" delay={0.2}>
          <HubspotForm />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
