import BootstrapClient from "@/components/libraries/Bootstrap"
import "./globals.css"
import Header from "@/components/layout/Header"
import { ToastContainer } from "react-toastify"
import Footer from "@/components/layout/Footer"
import NextTopLoader from "nextjs-toploader"

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning // Fix Hydration Error
    >
      <body>
        <NextTopLoader color="#ffbe33" />
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
        <ToastContainer />
      </body>
    </html>
  )
}
