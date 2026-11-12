export function HowItWorksSection() {
  return (
    <section className="w-full px-5 py-8 md:py-14 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
        <h2 className="text-foreground text-4xl md:text-5xl font-semibold leading-tight">
          How it works
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Signal comes from everywhere — manufacturers, internal documents, the open web. PDP.studio pulls it all in, shapes it against your brand voice and style standards, and routes the output directly into your systems. Stop drowning in files and feeds. Probabilistic where flexibility helps, deterministic where precision matters. Not magic. Just elegant.
        </p>
      </div>

      <div className="w-full max-w-4xl rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <svg viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto block">
          <title>PDP.studio: How It Works</title>
          <desc>A four-step flow: Signal In, Configure Workflow, Apply Lenses, Push to Systems</desc>
          <defs>
            <marker id="hiw-arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M1,1 L6,3.5 L1,6" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2"/>
            </marker>
          </defs>

          {/* Step 1: Signal In */}
          <rect x="20" y="20" width="155" height="170" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75"/>
          <text x="36" y="45" fill="rgba(231,236,235,0.35)" fontFamily="sans-serif" fontSize="11" fontWeight="500">01</text>
          <text x="36" y="64" fill="#e7eceb" fontFamily="sans-serif" fontSize="14" fontWeight="500">Signal in</text>
          <text x="36" y="82" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Manufacturers</text>
          <text x="36" y="98" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Internal docs</text>
          <text x="36" y="114" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">The internet</text>
          <rect x="36" y="148" width="52" height="18" rx="4" fill="rgba(0,147,164,0.18)"/>
          <text x="62" y="160" textAnchor="middle" fill="#5DCAA5" fontFamily="sans-serif" fontSize="10" fontWeight="500">Any source</text>

          {/* Arrow 1 */}
          <line x1="178" y1="105" x2="210" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#hiw-arr)"/>

          {/* Step 2: Configure Workflow */}
          <rect x="213" y="20" width="155" height="170" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75"/>
          <text x="229" y="45" fill="rgba(231,236,235,0.35)" fontFamily="sans-serif" fontSize="11" fontWeight="500">02</text>
          <text x="229" y="64" fill="#e7eceb" fontFamily="sans-serif" fontSize="14" fontWeight="500">Configure workflow</text>
          <text x="229" y="82" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Probabilistic where</text>
          <text x="229" y="98" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">flexibility helps</text>
          <text x="229" y="118" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Deterministic where</text>
          <text x="229" y="134" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">precision matters</text>
          <rect x="229" y="148" width="60" height="18" rx="4" fill="rgba(0,147,164,0.18)"/>
          <text x="259" y="160" textAnchor="middle" fill="#5DCAA5" fontFamily="sans-serif" fontSize="10" fontWeight="500">Your rules</text>

          {/* Arrow 2 */}
          <line x1="371" y1="105" x2="403" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#hiw-arr)"/>

          {/* Step 3: Apply Lenses */}
          <rect x="406" y="20" width="155" height="170" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75"/>
          <text x="422" y="45" fill="rgba(231,236,235,0.35)" fontFamily="sans-serif" fontSize="11" fontWeight="500">03</text>
          <text x="422" y="64" fill="#e7eceb" fontFamily="sans-serif" fontSize="14" fontWeight="500">Apply lenses</text>
          <text x="422" y="82" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Language</text>
          <text x="422" y="98" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Localization</text>
          <text x="422" y="114" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Style &amp; brand voice</text>
          <rect x="422" y="148" width="66" height="18" rx="4" fill="rgba(0,147,164,0.18)"/>
          <text x="455" y="160" textAnchor="middle" fill="#5DCAA5" fontFamily="sans-serif" fontSize="10" fontWeight="500">Your standards</text>

          {/* Arrow 3 */}
          <line x1="564" y1="105" x2="596" y2="105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#hiw-arr)"/>

          {/* Step 4: Push to Systems */}
          <rect x="599" y="20" width="145" height="170" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75"/>
          <text x="615" y="45" fill="rgba(231,236,235,0.35)" fontFamily="sans-serif" fontSize="11" fontWeight="500">04</text>
          <text x="615" y="64" fill="#e7eceb" fontFamily="sans-serif" fontSize="14" fontWeight="500">Push to systems</text>
          <text x="615" y="82" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Directly into your</text>
          <text x="615" y="98" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">existing stack</text>
          <text x="615" y="114" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Fewer handoffs</text>
          <text x="615" y="130" fill="rgba(231,236,235,0.6)" fontFamily="sans-serif" fontSize="11">Less file wrangling</text>
          <rect x="615" y="148" width="58" height="18" rx="4" fill="rgba(0,147,164,0.18)"/>
          <text x="644" y="160" textAnchor="middle" fill="#5DCAA5" fontFamily="sans-serif" fontSize="10" fontWeight="500">Done</text>

          {/* Bottom tagline */}
          <text x="380" y="218" textAnchor="middle" fill="rgba(231,236,235,0.35)" fontFamily="sans-serif" fontSize="12">Stop drowning in files and feeds. Not magic. Just elegant.</text>
        </svg>
      </div>
    </section>
  )
}
