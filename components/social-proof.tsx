"use client"

export function SocialProof() {
  const companies = [
    { name: "Hyatt Hotels", logo: "/logos/Hyatt-Logo.png" },
    { name: "Anthropologie", logo: "/logos/anthropologie-trimmed-cropped.svg" },
    { name: "Wizz Air", logo: "/logos/Wizzair-logo.png" },
    { name: "Urban Outfitters", logo: "/logos/uax.svg" },
    { name: "Gartner", logo: "/logos/Gartner-Logo.png" },
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Trusted by industry leaders in retail, travel, and hospitality
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-6">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={`${company.name} Logo`}
            className="h-8 md:h-12 w-auto object-contain opacity-60"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ))}
      </div>
    </section>
  )
}
