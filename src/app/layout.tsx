<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DPhack Services - Servicios de Seguridad Informática",
  description: "Servicios especializados de seguridad informática y hacking ético",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
=======
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DPhack Services',
  description: 'Servicios elite de hacking. Máximo poder, discreción absoluta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
>>>>>>> 1b206d614589b0df7079994e41120cafce736271
}
