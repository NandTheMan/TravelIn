"use client"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import ChatToggler from "./(chatComponent)/chatToggler"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ClosePane = () => {
        isClosed = !isClosed
        console.log(isClosed)
        // return cls
    };

    var isClosed = true
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex w-vw`}
      >
        <Providers>{children}</Providers>
        <ChatToggler />
      </body>
    </html>
  )
}
