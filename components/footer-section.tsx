"use client"

import { Linkedin } from "lucide-react"
import Image from "next/image"
export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">PDP.studio is built with Copy.AI</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">© Copyright 2026 Fullcast, Inc. All rights reserved.</p>
        <Image
          src="/logos/fullcast-logo_light.png"
          alt="Fullcast logo"
          width={120}
          height={32}
          className="h-8 object-contain opacity-70"
          style={{ width: "auto" }}
        />
        <div className="flex justify-start items-start gap-3">
<a href="https://www.linkedin.com/company/fullcast-ai/" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Company, Resources */}
      <div className="flex flex-col justify-start items-start gap-3 p-4 md:p-8">
        <div className="flex flex-col justify-center items-start gap-2">
          <a href="https://www.fullcast.com/others/website-terms-of-service/" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Terms of Service
          </a>
          <a href="https://www.fullcast.com/others/privacy-policy/" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Privacy Policy
          </a>
          <a href="https://www.fullcast.com/company/about/" className="text-foreground text-sm font-normal leading-5 hover:underline">
            About
          </a>
          <a href="https://www.fullcast.com/company/careers/" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Careers
          </a>
        </div>
      </div>
    </footer>
  )
}
