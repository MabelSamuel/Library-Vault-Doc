import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import { Button } from '@/components/Button'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LibraryVault - Library Management API',
  description: 'A free, open-source API for building library management UIs without a backend server. Perfect for prototyping and testing with role-based access control.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-sm bg-background/95 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition">
              📚 LibraryVault
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition">
                Docs
              </Link>
              <a href="https://github.com/yourusername/libraryvault" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </nav>

        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
