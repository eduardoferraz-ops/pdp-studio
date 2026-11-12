import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PDP.studio - AI-Powered Product Description Generator for Retailers',
  description: 'Automate your e-commerce product descriptions. PDP.studio generates thousands of SEO-optimized PDPs in under 48 hours. Try it today!',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'PDP.studio - Write 10,000 PDPs in the Time Your Team Used to Write 10',
    description: 'Write 10,000 on-brand PDPs in the time your team used to write 10. Accuracy guardrails, global localization, live in 48 hours.',
    url: 'https://www.pdp.studio',
    siteName: 'PDP.studio',
    type: 'website',
    images: [{ url: 'https://www.pdp.studio/og-image.png', width: 1200, height: 630, alt: 'PDP.studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDP.studio - Write 10,000 PDPs in the Time Your Team Used to Write 10',
    description: 'Write 10,000 on-brand PDPs in the time your team used to write 10. Accuracy guardrails, global localization, live in 48 hours.',
    images: ['https://www.pdp.studio/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
