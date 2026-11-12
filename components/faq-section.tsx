"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQ_ITEMS = [
  {
    question: "What types of product data can PDP.studio ingest?",
    answer:
      "We handle virtually any format: manufacturer PDFs, CSVs, raw images, spreadsheets, and more. Specs, dimensions, materials, and certifications are extracted automatically with no manual data entry required.",
  },
  {
    question: "How does PDP.studio ensure accuracy and avoid hallucinations?",
    answer:
      "Every output is anchored directly to your source product data. Our guardrails ensure that no dimension, material, or certification is ever fabricated, so nothing reaches your storefront that wasn't in your source files.",
  },
  {
    question: "Which PIM systems does PDP.studio integrate with?",
    answer:
      "PDP.studio is accessible via API, making it compatible with any PIM that supports inbound data. For Enterprise customers, we establish a direct integration so finished content flows straight into your PIM with no manual upload cycles.",
  },
  {
    question: "How does localization work?",
    answer:
      "No literal translations here. Our language layer knows that a 'vest' in New York is a 'waistcoat' in London and a 'Weste' in Berlin, and automatically converts units, sizing, and compliance details per market. Content is born local, not retrofitted after the fact.",
  },
  {
    question: "What's the typical time to go live with new products?",
    answer:
      "Traditional content workflows take 3 to 6 weeks per seasonal launch. PDP.studio gets you from ingestion to publish-ready in under 48 hours, so products aren't sitting in warehouses waiting for their listings to go live.",
  },
  {
    question: "How does PDP.studio optimize for AI search?",
    answer:
      "Product discovery is shifting from traditional search to AI-generated answers and recommendations. We structure every title, description, meta tag, and alt-text field for discoverability across search engines, answer engines, and generative AI surfaces.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about PDP.studio and how it can transform your product content workflow
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {FAQ_ITEMS.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  )
}
