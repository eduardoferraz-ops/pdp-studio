import type React from "react"

interface DeploymentEasyProps {
  /** Width of component – number (px) or any CSS size value */
  width?: number | string
  /** Height of component – number (px) or any CSS size value */
  height?: number | string
  /** Extra Tailwind / CSS classes for root element */
  className?: string
}

const DeploymentEasy: React.FC<DeploymentEasyProps> = ({ width = "100%", height = "100%", className = "" }) => {
  /* ------------------------------------------------------------
   * Theme-based design tokens using global CSS variables
   * ---------------------------------------------------------- */
  const themeVars = {
    "--deploy-primary-color": "hsl(var(--primary))",
    "--deploy-background-color": "hsl(var(--background))",
    "--deploy-text-color": "hsl(var(--foreground))",
    "--deploy-text-secondary": "hsl(var(--muted-foreground))",
    "--deploy-border-color": "hsl(var(--border))",
  } as React.CSSProperties

  /* ------------------------------------------------------------
   * Console log output (static for demo) – can be replaced via props
   * ---------------------------------------------------------- */
  const logLines = [
  "[14:22:15.124] CMS Sync Started 🚀",
  "[14:22:15.156] Connected to Content Management System - us-west-2",          
  "[14:22:15.201] SKU Validation Engine: Ready",                                
  "[14:22:15.389] Starting batch push: 342 products queued",                    
  "[14:22:16.234] ✓ SKU-8847-2N pushed successfully (Athletic Shorts, Blue)",   
  "[14:22:19.156] ✓ SKU-4521-3X pushed successfully (Running Shoes, White)",    
  "[14:22:22.445] Processing metadata for SKU-7623-1A...",
  "[14:22:23.821] ✓ SKU-7623-1A pushed successfully (T-Shirt, Gray)",           
  "[14:22:26.534] Image optimization complete",                
  "[14:22:29.078] ✓ SKU-5412-4C pushed successfully (Jeans, Navy)",             
  "[14:22:32.223] Batch progress: 4/342 complete",                              
  "[14:22:35.667] ✓ SKU-9234-5B pushed successfully (Hoodie, Black)",
  "[14:22:38.445] Cache invalidation in progress...",                           
  "[14:22:41.223] ✓ SKU-6789-2D pushed successfully (Polo, Red)",
  "[14:22:44.156] Batch progress: 7/342 complete - ETA 38s",                    
  "[14:22:47.889] ✓ SKU-3456-1E pushed successfully (Sweater, Charcoal)",       
  "[14:22:50.654] All product descriptions synced",
  "[14:22:51.234] ✓ CMS Sync Complete - 7 SKUs processed",                      
  "🚀 Product catalog updated – Ready!",   
  ]

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
      role="img"
      aria-label="Deployment console output with Deploy on Vercel button"
    >
      {/* -------------------------------------------------------- */}
      {/* Console / Terminal panel                                */}
      {/* -------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          height: "239px",
          background: "linear-gradient(180deg, var(--deploy-background-color) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Inner translucent panel – replicates subtle overlay */}
        <div
          style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "8px",
            background: "hsl(var(--foreground) / 0.08)",
          }}
        />

        {/* Log text */}
        <div
          style={{
            position: "relative",
            padding: "8px",
            height: "100%",
            overflow: "hidden",
            fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace",
            fontSize: "10px",
            lineHeight: "16px",
            color: "var(--deploy-text-color)",
            whiteSpace: "pre",
          }}
        >
          {logLines.map((line, index) => (
            <p key={index} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </div>

        {/* Inner border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "0.791px solid var(--deploy-border-color)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  )
}

export default DeploymentEasy
