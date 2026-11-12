"use client"

import { useEffect, useRef } from "react"
import { getSelectedPlan } from "@/lib/selected-plan"

export function HubspotForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/v2.js"
      script.charset = "utf-8"
      script.async = true
      script.onload = () => {
        try {
          if (window.hbspt && containerRef.current) {
            window.hbspt.forms.create({
              portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "",
              formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID ?? "",
              region: process.env.NEXT_PUBLIC_HUBSPOT_REGION ?? "na2",
              target: `#${containerRef.current.id}`,
              onFormSubmit: ($form: HTMLFormElement) => {
                const plan = getSelectedPlan()
                if (!plan) return
                const textarea = $form.querySelector<HTMLTextAreaElement>("textarea")
                if (textarea) {
                  textarea.value = textarea.value
                    ? `${textarea.value}\n\nReferring plan: ${plan}`
                    : `Referring plan: ${plan}`
                } else {
                  const hidden = document.createElement("input")
                  hidden.type = "hidden"
                  hidden.name = "referring_plan"
                  hidden.value = plan
                  $form.appendChild(hidden)
                }
              },
            })
          }
        } catch (e) {
          console.error("HubSpot form creation failed:", e)
        }
      }
      document.head.appendChild(script)

      return () => {
        script.remove()
      }
    } catch (e) {
      console.error("HubSpot script load failed:", e)
    }
  }, [])

  return (
    <section className="w-full px-5 pt-4 pb-8 md:pt-6 md:pb-16">
      <div className="max-w-xl mx-auto">
        <div id="hubspot-form-container" ref={containerRef} />
      </div>
    </section>
  )
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          region: string
          target?: string
          onFormSubmit?: ($form: HTMLFormElement) => void
        }) => void
      }
    }
  }
}
