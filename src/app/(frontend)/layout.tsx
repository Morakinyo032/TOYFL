import React from 'react'
import Link from 'next/link'
import Wordmark from '@/components/Wordmark'
import './styles.css'

export const metadata = {
  title: 'YPCE — Yoruba Proficiency Certificate Examination',
  description: 'Ìdánwò ìwọ̀n Yorùbá tí a ṣe lápẹẹrẹ ọ̀nà TOEFL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="yo">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Noto+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="inner">
            <Link href="/" className="wordmark" style={{ display: 'inline-flex' }}>
              <Wordmark />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
