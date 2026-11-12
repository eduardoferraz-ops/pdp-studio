"use client"

import { useEffect, useRef } from "react"

const cardData = [
  {
    meta: "EN · Nutrition · SKU-8841",
    title: "Plant Protein Recovery Blend",
    body: "25g complete protein from pea and brown rice. Fortified with BCAAs and 1B CFU probiotics per serving.",
    specs: ["Flavour: Vanilla Chai", "Servings: 30 · Net Wt: 900g"],
  },
  {
    meta: "FR · Soins · SKU-7733",
    title: "Sérum Éclat Vitamine C",
    body: "Formulé avec 15% d'acide ascorbique pur pour un teint visiblement plus lumineux en 14 jours.",
    specs: ["Contenance : 30 ml"],
  },
  {
    meta: "DE · Elektronik · SKU-1190",
    title: "ProSound ANC Kopfhörer",
    body: "Aktive Geräuschunterdrückung mit 40 Stunden Akkulaufzeit und Hi-Res Audio Zertifizierung.",
    specs: ["Gewicht: 250g", "Bluetooth 5.3"],
  },
  {
    meta: "JA · アパレル · SKU-3302",
    title: "ウルトラライトダウンジャケット",
    body: "800フィルパワーの高品質ダウンを使用。わずか180gの超軽量設計で持ち運びに便利。",
    specs: ["サイズ: S-XXL"],
  },
  {
    meta: "ES · Hogar · SKU-5567",
    title: "Sábanas de Algodón Orgánico",
    body: "Tejido de satén de 400 hilos con certificación GOTS. Suavidad que mejora con cada lavado.",
    specs: ["Material: 100% algodón", "Certificación GOTS"],
  },
  {
    meta: "EN · Footwear · SKU-4821",
    title: "TrailForge Waterproof Boot",
    body: "Built for all-terrain performance with Gore-Tex lining and Vibram outsole. Rated for sub-zero conditions.",
    specs: ["Waterproof rating: 20,000mm", "Weight: 410g per shoe"],
    featured: true,
  },
  {
    meta: "PT · Beleza · SKU-6618",
    title: "Óleo Capilar Reparador",
    body: "Fórmula com argan e queratina hidrolisada para fios danificados. Resultados visíveis em 7 dias.",
    specs: ["Volume: 100 ml"],
  },
  {
    meta: "EN · Airlines · SKU-2249",
    title: "JFK to CDG in Business — $599",
    body: "180° lie-flat seat with direct aisle access, 4K personal screen, and chef-curated three-course dining.",
    specs: ["Seat pitch: 78 in", "Amenity kit: Grown Alchemist"],
  },
  {
    meta: "IT · Cucina · SKU-9912",
    title: "Set Coltelli Chef Professionali",
    body: "Acciaio inossidabile forgiato a caldo con impugnatura ergonomica in legno di pakka.",
    specs: ["7 pezzi + ceppo magnetico"],
  },
  {
    meta: "KO · 가전 · SKU-0087",
    title: "스마트 공기청정기 에어퓨어",
    body: "4단계 HEPA 필터링 시스템으로 99.97%의 미세먼지를 제거합니다. 스마트폰 앱으로 원격 제어.",
    specs: ["적용면적: 60m²", "소음: 22dB"],
  },
  {
    meta: "EN · Hotels · SKU-3345",
    title: "Oceanfront King Suite — Maui",
    body: "850 sq ft suite with private lanai, soaking tub, and panoramic Pacific views. Butler service included.",
    specs: ["Check-in: 3 PM · Check-out: 12 PM", "Sleeps: 2 · Floor: 8–12"],
  },
  {
    meta: "AR · عطور · SKU-4410",
    title: "عطر العود الملكي",
    body: "مزيج فاخر من العود الكمبودي والمسك الأبيض مع لمسة من العنبر الدافئ. يدوم حتى 12 ساعة.",
    specs: ["الحجم: 75 مل"],
    rtl: true,
  },
]

export function DashboardPreview() {
  const cardsLayerRef = useRef<HTMLDivElement>(null)
  const scanLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = cardsLayerRef.current
    const scanEl = scanLineRef.current
    if (!layer || !scanEl) return

    const timeouts: ReturnType<typeof setTimeout>[] = []
    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms)
      timeouts.push(id)
      return id
    }

    // Build card DOM
    type CardEl = {
      card: HTMLDivElement
      meta: HTMLDivElement
      title: HTMLDivElement
      body: HTMLDivElement
      specs: HTMLDivElement
    }
    const cardEls: CardEl[] = []

    cardData.forEach((c) => {
      const card = document.createElement("div")
      card.className = "pdp-card" + (c.featured ? " pdp-featured" : "")
      if (c.rtl) card.setAttribute("dir", "rtl")

      const metaEl = document.createElement("div"); metaEl.className = "pdp-card-meta"
      const titleEl = document.createElement("div"); titleEl.className = "pdp-card-title"
      const bodyEl = document.createElement("div"); bodyEl.className = "pdp-card-body"
      const specsEl = document.createElement("div"); specsEl.className = "pdp-card-specs"

      card.append(metaEl, titleEl, bodyEl, specsEl)
      layer.appendChild(card)
      cardEls.push({ card, meta: metaEl, title: titleEl, body: bodyEl, specs: specsEl })
    })

    // Build text segments
    type Segment = { el: HTMLDivElement; text: string; cardIndex: number; field: string }
    const segments: Segment[] = []
    cardEls.forEach(({ card, meta, title, body, specs }, i) => {
      const d = cardData[i]
      segments.push({ el: meta, text: d.meta, cardIndex: i, field: "meta" })
      segments.push({ el: title, text: d.title, cardIndex: i, field: "title" })
      segments.push({ el: body, text: d.body, cardIndex: i, field: "body" })
      if (d.specs?.length) {
        segments.push({ el: specs, text: d.specs.map(s => "• " + s).join("\n"), cardIndex: i, field: "specs" })
      }
    })

    const totalChars = segments.reduce((s, seg) => s + seg.text.length, 0)
    const segCharIdx = new Array(segments.length).fill(0)
    const segDone = new Array(segments.length).fill(false)
    const startedCards = new Set<number>()
    let globalCharIndex = 0

    const removeCursor = (el: HTMLElement) => el.querySelector(".pdp-cursor")?.remove()
    const addCursor = (el: HTMLElement) => {
      if (!el.querySelector(".pdp-cursor")) {
        const c = document.createElement("span")
        c.className = "pdp-cursor"
        el.appendChild(c)
      }
    }
    const completedCount = () => segDone.filter(Boolean).length
    const easeOutExpo = (t: number) => t >= 1 ? 1 : 1 - Math.pow(2, -7 * t)

    const getActiveStreams = () => {
      const progress = globalCharIndex / totalChars
      return Math.min(5, Math.max(1, Math.floor(1 + progress * 7.5)), segments.length - completedCount())
    }

    const getCurrentDelay = () => {
      const easedProgress = easeOutExpo(globalCharIndex / totalChars)
      return Math.max(0.3, 12 * (1 - easedProgress) + 0.3 * easedProgress)
    }

    const getActiveIndices = () => {
      const n = getActiveStreams()
      const result: number[] = []
      for (let i = 0; i < segments.length && result.length < n; i++) {
        if (!segDone[i] && segCharIdx[i] < segments[i].text.length) result.push(i)
      }
      return result
    }

    const triggerScanLine = () => {
      scanEl.style.animation = "pdp-scan 3s linear forwards"
      schedule(() => {
        scanEl.style.animation = "none"
        schedule(triggerScanLine, 8000)
      }, 3500)
    }

    const typeStep = () => {
      const active = getActiveIndices()
      if (active.length === 0) {
        document.querySelectorAll(".pdp-cursor").forEach(c => c.remove())
        triggerScanLine()
        return
      }
      const delay = getCurrentDelay()
      const charsPerTick = Math.max(1, Math.ceil(1 / Math.max(delay / 16, 0.1)))

      active.forEach(si => {
        const seg = segments[si]
        if (!startedCards.has(seg.cardIndex)) {
          startedCards.add(seg.cardIndex)
          cardEls[seg.cardIndex].card.classList.add("pdp-visible")
        }
        const advance = Math.min(charsPerTick, seg.text.length - segCharIdx[si])
        segCharIdx[si] += advance
        globalCharIndex += advance
        const current = seg.text.substring(0, segCharIdx[si])
        removeCursor(seg.el)
        if (seg.field === "specs") {
          seg.el.innerHTML = current.replace(/\n/g, "<br>")
        } else {
          seg.el.textContent = current
        }
        if (segCharIdx[si] >= seg.text.length) {
          segDone[si] = true
        } else {
          addCursor(seg.el)
        }
      })

      segments.forEach((seg, si) => {
        if (!active.includes(si) && !segDone[si] && segCharIdx[si] > 0) removeCursor(seg.el)
      })

      schedule(typeStep, Math.max(delay, 4))
    }

    schedule(typeStep, 0)

    return () => {
      timeouts.forEach(clearTimeout)
      layer.innerHTML = ""
    }
  }, [])

  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap');

        .pdp-hero {
          position: relative;
          width: 100%;
          height: 360px;
          overflow: hidden;
          background: #0a1a1a;
          border-radius: 16px;
        }
        @media (min-width: 768px) {
          .pdp-hero { height: 560px; }
        }
        .pdp-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(29,158,117,0.35) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(29,158,117,0.35) 0.5px, transparent 0.5px);
          background-size: 100px 80px;
          opacity: 0.04;
        }
        .pdp-cards-layer {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 12px;
          padding: 16px;
          animation: pdp-drift 30s ease-in-out infinite alternate;
        }
        @media (min-width: 768px) {
          .pdp-cards-layer {
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
            padding: 24px;
          }
        }
        .pdp-card {
          background: #111d1d;
          border: 0.5px solid rgba(29,158,117,0.35);
          border-radius: 8px;
          padding: 10px 12px 8px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          will-change: transform;
          font-family: 'DM Sans', sans-serif;
        }
        @media (min-width: 768px) {
          .pdp-card {
            border-radius: 10px;
            padding: 16px 18px 14px;
          }
        }
        .pdp-card.pdp-visible { opacity: 1; transform: translateY(0); }
        .pdp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #1D9E75;
          opacity: 0.6;
          border-radius: 10px 10px 0 0;
        }
        .pdp-card.pdp-featured {
          border-color: #5DCAA5;
          border-width: 1px;
          background: #0d2622;
        }
        .pdp-card.pdp-featured::before { opacity: 0.9; background: #5DCAA5; }
        .pdp-card-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #5DCAA5;
          opacity: 0.6;
          margin-bottom: 8px;
          letter-spacing: 0.3px;
          min-height: 14px;
        }
        .pdp-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #e0f0ea;
          margin-bottom: 6px;
          line-height: 1.3;
          min-height: 18px;
        }
        .pdp-card-body {
          font-size: 11px;
          color: #9FE1CB;
          opacity: 0.8;
          line-height: 1.55;
          margin-bottom: 8px;
          min-height: 14px;
        }
        .pdp-card.pdp-featured .pdp-card-body { opacity: 1; }
        .pdp-card-specs {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9.5px;
          color: #5DCAA5;
          opacity: 0.5;
          line-height: 1.7;
          min-height: 14px;
        }
        .pdp-card[dir="rtl"] { text-align: right; direction: rtl; }
        .pdp-card[dir="rtl"] .pdp-card-meta { direction: ltr; text-align: right; unicode-bidi: plaintext; }
        .pdp-cursor {
          display: inline-block;
          width: 1px;
          height: 1em;
          background: #5DCAA5;
          margin-left: 1px;
          vertical-align: text-bottom;
          animation: pdp-blink 0.6s step-end infinite;
        }
        .pdp-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
          background:
            radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0a1a1a 100%),
            linear-gradient(to bottom, #0a1a1a 0%, transparent 8%, transparent 92%, #0a1a1a 100%),
            linear-gradient(to right, #0a1a1a 0%, transparent 5%, transparent 95%, #0a1a1a 100%);
        }
        .pdp-scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #5DCAA5, transparent);
          opacity: 0;
          z-index: 5;
          pointer-events: none;
        }
        .pdp-card.pdp-visible:nth-child(odd)  { animation: pdp-float-a 20s ease-in-out infinite alternate; }
        .pdp-card.pdp-visible:nth-child(even) { animation: pdp-float-b 22s ease-in-out infinite alternate; }
        .pdp-card.pdp-visible:nth-child(3n)   { animation: pdp-float-c 25s ease-in-out infinite alternate; }

        @keyframes pdp-blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pdp-drift    { 0%{transform:translate(0,0) scale(1)} 25%{transform:translate(-6px,-4px) scale(1.005)} 50%{transform:translate(4px,-8px) scale(1.01)} 75%{transform:translate(-3px,3px) scale(1.005)} 100%{transform:translate(5px,-2px) scale(1.008)} }
        @keyframes pdp-float-a  { 0%{transform:translate(0,0) rotate(-0.8deg)} 33%{transform:translate(3px,-4px) rotate(0.3deg)} 66%{transform:translate(-2px,3px) rotate(-0.5deg)} 100%{transform:translate(4px,-2px) rotate(0.8deg)} }
        @keyframes pdp-float-b  { 0%{transform:translate(0,0) rotate(0.5deg)} 33%{transform:translate(-4px,2px) rotate(-0.4deg)} 66%{transform:translate(2px,-5px) rotate(0.7deg)} 100%{transform:translate(-3px,4px) rotate(-0.3deg)} }
        @keyframes pdp-float-c  { 0%{transform:translate(0,0) rotate(0.2deg)} 50%{transform:translate(5px,-3px) rotate(-0.6deg)} 100%{transform:translate(-2px,5px) rotate(0.4deg)} }
        @keyframes pdp-scan     { 0%{top:-2px;opacity:0} 5%{opacity:0.15} 95%{opacity:0.15} 100%{top:100%;opacity:0} }
      `}</style>
      <div className="pdp-hero">
        <div className="pdp-grid-bg" />
        <div className="pdp-cards-layer" ref={cardsLayerRef} />
        <div className="pdp-vignette" />
        <div className="pdp-scan-line" ref={scanLineRef} />
      </div>
    </div>
  )
}
