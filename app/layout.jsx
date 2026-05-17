import BootstrapClient from "@/components/libraries/Bootstrap"
import "./globals.css"
import Header from "@/components/layout/Header"

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning // Fix Hydration Error
    >
      <body>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
