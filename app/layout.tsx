import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hiển Nguyễn - Cloud Architect & Lead DevOps Engineer',
  description: 'Cloud Architect and Lead DevOps Engineer with over 10 years of experience designing and optimizing distributed systems.',
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

