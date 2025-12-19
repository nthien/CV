import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hiển Nguyễn - DevOps Manager | DevSecOps & Platform Architect',
  description: 'DevOps Manager and Platform Architect with 10+ years of experience designing, operating, and governing secure, highly available, large-scale infrastructure platforms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

