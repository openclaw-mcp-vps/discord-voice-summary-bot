import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VoiceSummary — Discord Meeting Summaries',
  description: 'Bot joins your Discord voice channels, transcribes conversations, and generates AI summaries so no one misses a meeting.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eca90ffc-19a8-4349-94ec-5105eb733431"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
