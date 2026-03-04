import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Horoscope',
  description: 'Career trajectory and timing reports',
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
