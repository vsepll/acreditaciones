import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Include more weights
  display: "swap",
})

export const metadata: Metadata = {
  title: "Autoentrada - Soluciones de Acreditación para Eventos",
  description: "Ofrecemos soluciones integrales para la acreditación y gestión de acceso en todo tipo de eventos.",
  icons: {
    icon: "/favicon.ico", // Assuming you have a favicon
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-subtle-gradient text-neutral-800`}>
        {children}
      </body>
    </html>
  )
}
