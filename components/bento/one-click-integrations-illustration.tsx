import type React from "react"

const flags = [
  { emoji: "🇺🇸", alt: "United States" },
  { emoji: "🇬🇧", alt: "United Kingdom" },
  { emoji: "🇨🇦", alt: "Canada" },
  { emoji: "🇦🇺", alt: "Australia" },
  { emoji: "🇩🇪", alt: "Germany" },
  { emoji: "🇫🇷", alt: "France" },
  { emoji: "🇪🇸", alt: "Spain" },
  { emoji: "🇲🇽", alt: "Mexico" },
  { emoji: "🇵🇹", alt: "Portugal" },
  { emoji: "🇧🇷", alt: "Brazil" },
  { emoji: "🇯🇵", alt: "Japan" },
  { emoji: "🇰🇷", alt: "South Korea" },
  { emoji: "🇨🇳", alt: "China" },
  { emoji: "🇹🇷", alt: "Turkey" },
  { emoji: "🇸🇦", alt: "Saudi Arabia" },
  { emoji: "🇮🇹", alt: "Italy" },
  { emoji: "🇳🇱", alt: "Netherlands" },
  { emoji: "🇸🇪", alt: "Sweden" },
  { emoji: "🇨🇭", alt: "Switzerland" },
  { emoji: "🇳🇴", alt: "Norway" },
]

const rows = [flags.slice(0, 5), flags.slice(5, 10), flags.slice(10, 15), flags.slice(15, 20)]
const offsets = [-32, 16, -16, 32]

interface OneClickIntegrationsIllustrationProps {
  className?: string
}

const OneClickIntegrationsIllustration: React.FC<OneClickIntegrationsIllustrationProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center gap-4 p-4 ${className}`}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ transform: `translateX(${offsets[rowIndex]}px)`, display: "flex", gap: "14px" }}
        >
          {row.map((flag) => (
            <span
              key={flag.alt}
              role="img"
              aria-label={flag.alt}
              style={{
                fontSize: "36px",
                lineHeight: "52px",
                width: "52px",
                height: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                filter: "saturate(0) brightness(1.3)",
              }}
            >
              {flag.emoji}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OneClickIntegrationsIllustration
