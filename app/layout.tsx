import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SkillVerify — Verify Candidate Skills Against LinkedIn Claims",
  description: "Cross-reference candidate resumes with LinkedIn profiles and GitHub activity to flag skill mismatches and experience gaps. Built for technical recruiters and hiring managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eebb7914-7727-4524-b690-16041b2913e1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
