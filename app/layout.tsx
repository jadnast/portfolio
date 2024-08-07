import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter as FontSans } from "next/font/google"
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

import { cn } from "@/lib/utils"
import Header from "@/components/header";
import Player from "@/components/player";
import Yandex from "@/components/yadnex"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export const viewport: Viewport = {
  themeColor: '#e11d48',
}

export const metadata: Metadata = {
  title: "Kononenko Nikita",
  description: "Professional Designer. Logo, Brand, UI/UX, Game, Visual, Product, Mobile Designs",
  generator: 'Next.js',
  applicationName: 'Kononenko',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Kononenko Nikita', 'Nikita Kononenko', 'Kononenko',
    'Кононенко Никита', 'Кононенко',
    'Design', 'Designer', 'Дизайн', 'Дизайнер',
    'Graphic Design', 'Графический дизайн',
    'Mobile Design', 'Мобильный дизайн',
    'Web Design', 'Веб-дизайн',
    'Game Design', 'Игровой дизайн',
    'Art Design', 'Арт-дизайн',
    'UI Design', 'UX Design', 'UI/UX', 'UI/UX дизайн',
    'Visual Design', 'Визуальный дизайн',
    'Brand Design', 'Брендинг',
    'Logo Design', 'Дизайн логотипов',
    'Digital Design', 'Цифровой дизайн',
    'Product Design', 'Продуктовый дизайн',
    'Creative Designer', 'Креативный дизайнер',
    'Portfolio', 'Портфолио',
    'Freelance Designer', 'Фрилансер дизайнер',
    'Design Services', 'Услуги дизайна',
    'Professional Designer', 'Профессиональный дизайнер'
  ],
  authors: [{ name: 'Nikita Kononenko' }],
  creator: 'Nikita Kononenko',
  publisher: 'Nikita Kononenko',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Kononenko',
    description: 'Professional Designer. Logo, Brand, UI/UX, Game, Visual, Product, Mobile Designs',
    siteName: 'Kononenko',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: 'brand/favicon-32x32.png',
    shortcut: 'brand/favicon.ico',
    apple: 'brand/apple-touch-icon.png',
    other: {
      rel: 'android-chrome',
      url: 'brand/android-chrome-192x192.png',
    },
  },
  manifest: 'brand/site.webmanifest',
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head />
      <Analytics/>
      <GoogleAnalytics gaId="G-CKH30LK8FE" />
      <Yandex/>
      <body className={cn("min-h-screen bg-background font-sans antialiased shadow-kononenko",fontSans.variable)}>
        <Header></Header>
        {children}
        <Player/>
        <div className="noise-bg"></div>
      </body>
    </html>
  )
}