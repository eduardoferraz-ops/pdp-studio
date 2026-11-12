"use client"

import type React from "react"
import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"
type CardId = "dataIngestion" | "aiImageInspection" | "bornLocal" | "seamlessIntegration" | "aiSearch" | "speedToMarket"

// Stable mapping of card IDs to illustration components
const CARD_COMPONENTS: Record<CardId, React.ComponentType> = {
  dataIngestion: AiCodeReviews,
  aiImageInspection: RealtimeCodingPreviews,
  bornLocal: OneClickIntegrationsIllustration,
  seamlessIntegration: MCPConnectivityIllustration,
  aiSearch: ParallelCodingAgents,
  speedToMarket: EasyDeployment,
}

const CARD_ORDER: CardId[] = [
  "dataIngestion",
  "bornLocal",
  "aiImageInspection",
  "seamlessIntegration",
  "aiSearch",
  "speedToMarket",
]

const CARD_DATA: Record<CardId, { title: string; description: string }> = {
  dataIngestion: {
    title: 'Turn "Vendor Mess" into Structured Gold',
    description: "Our ingestion engine extracts specs from PDFs, CSVs, or images automatically.",
  },
  aiImageInspection: {
    title: "Your Images, Read Precisely",
    description: "AI that examines images like a copywriter. Every spec, straight from the image.",
  },
  bornLocal: {
    title: "Born Local, Not Just Translated",
    description: "Adapted for every market. Terminology, units, sizing, and compliance all included.",
  },
  seamlessIntegration: {
    title: "Your Style and Standards, Enforced at Scale",
    description: "Every output vetted against your brand and style guidelines before it leaves the system.",
  },
  aiSearch: {
    title: "Optimized for AI Search",
    description: "Ensure your products get found in ChatGPT, Claude, and Perplexity - not just Google.",
  },
  speedToMarket: {
    title: "48 Hours from File to Live",
    description: "Because a 6-week content queue isn't a workflow problem. It's a revenue problem.",
  },
}

const BentoCard = ({ title, description, Component }: { title: string; description: string; Component: React.ComponentType }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Why PDP.studio?
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Managing thousands of SKUs shouldn&apos;t mean choosing between speed and sounding like yourself. Now you don&apos;t have to.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {CARD_ORDER.map((cardId) => (
            <BentoCard
              key={cardId}
              title={CARD_DATA[cardId].title}
              description={CARD_DATA[cardId].description}
              Component={CARD_COMPONENTS[cardId]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
