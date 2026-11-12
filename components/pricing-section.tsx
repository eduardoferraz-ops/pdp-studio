"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { setSelectedPlan } from "@/lib/selected-plan"

const pricingPlans = [
  {
    key: "build",
    name: "Large",
    annualPrice: "$1,399",
    description: "Up to 1,000 SKUs per month.",
    features: [
      "Simplified spec extraction",
      "Built-in SEO optimization",
      "Built-in AEO optimization",
      "Access to frontier LLMs",
      "Single sign on ",


    ],
    buttonText: "Request Access",
    buttonClass:
      "bg-[rgb(235,240,238)] shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-gray-800 hover:bg-[rgb(220,225,223)]",
  },
  {
    key: "scale",
    name: "Extra Large",
    annualPrice: "$3,499",
    description: "Up to 10,000 SKUs per month.",
    features: [
      "Everything in Large +",
      "AI-powered image analysis",
      "5 language localizations",
      "AI search optimization",
      "Priority support",
    ],
    buttonText: "Request Access",
    buttonClass:
      "bg-[rgb(235,240,238)] shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-gray-800 hover:bg-[rgb(220,225,223)]",
    popular: true,
  },
  {
    key: "enterprise",
    name: "Bespoke",
    annualPrice: "Custom",
    description: "Up to 100,000 SKUs per month.",
    features: [
      "Everything in Extra Large +",
      "Unlimited language localizations",
      "Custom PIM integrations",
      "Dedicated account manager",
      "SLA guarantees & compliance",
    ],
    buttonText: "Let's Talk",
    buttonClass:
      "bg-[rgb(235,240,238)] shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-gray-800 hover:bg-[rgb(220,225,223)]",
  },
]

export function PricingSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Pick your fit
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Choose a plan that fits your catalog size, from growing brands to enterprise operators managing tens of thousands of SKUs.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[65%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.key}
            className={`overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]" : ""}`}
          >
            {!plan.popular && (
              <>
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "rgba(231, 236, 235, 0.08)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
              </>
            )}
            <div className="self-stretch p-6 flex flex-col justify-start items-start gap-6 relative z-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div
                  className={`w-full h-5 text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-white/20">
                      <div className="text-center text-white text-xs font-medium leading-tight break-words">
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1.5">
                    <div
                      className={`text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                    >
                      {plan.annualPrice}
                    </div>
                    <div
                      className={`text-center text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                    >
                      / month
                    </div>
                  </div>
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
                onClick={() => {
                  setSelectedPlan(plan.name)
                  document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-sm font-medium leading-tight ${plan.key === "build" ? "text-gray-800" : plan.key === "scale" ? "text-primary" : "text-zinc-950"}`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {plan.features.map((feature) => (
                <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <Check
                      className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                      strokeWidth={2}
                    />
                  </div>
                  <div
                    className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    {feature}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
