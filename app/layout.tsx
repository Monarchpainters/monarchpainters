'use client'

import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import dynamic from 'next/dynamic'
import Head from 'next/head'
import LoadingScreen from "@/components/LoadingScreen"
import { useState, useEffect } from 'react'

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: true
})

const ConsentManager = dynamic(() => import('../components/ConsentManager').then(mod => mod.ConsentManager), {
  ssr: false
})

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w,d,s,o,r,js,fjs) {
                w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
                w[r]('app', 'DN9v-ZA4Aa');
                if(d.getElementById(o)) return;
                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
                js.async = 1; fjs.parentNode.insertBefore(js, fjs);
              }(window, document, 'script', 'trustmary-embed', 'tmary'));
            `
          }}
        />
        <link
          rel="preload"
          href="/fonts/LTMuseum-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"

        />
        <link
          rel="preload"
          href="/fonts/diplomata.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"

        />
        <link
          rel="preload"
          href="/fonts/QTGaromand.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/DiplomataSC-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"

        />
        <link
          rel="preload"
          href="/fonts/QTGaromand-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"

        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#711f50" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#f8f8f8] text-[#003366]`}>
        <ConsentManager privacyPolicyUrl="/privacy">
          <LoadingScreen isLoading={isLoading} />
          <Navbar />
          {children}
        </ConsentManager>
        <script src="https://widget.trustmary.com/${widgetId}"></script>

     
      </body>
    </html>
  )
}
