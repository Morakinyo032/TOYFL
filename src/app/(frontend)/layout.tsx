import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Ìdánwò Yorùbá',
  description: 'Ìdánwò ìwọ̀n Yorùbá tí a ṣe lápẹẹrẹ ọ̀nà TOEFL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="yo">
      <body>{children}</body>
    </html>
  )
}
