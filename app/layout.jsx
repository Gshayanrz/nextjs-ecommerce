import BootstrapClient from "@/components/libraries/Bootstrap"
import "./globals.css"
import Header from "@/components/layout/Header"
import { ToastContainer } from "react-toastify"
import Footer from "@/components/layout/Footer"
import NextTopLoader from "nextjs-toploader"
import { AuthProvider } from "@/context/AuthContext"

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning // Fix Hydration Error
    >
      <body>
        <AuthProvider>
          <NextTopLoader color="#ffbe33" />
          <Header />
          {children}
          <Footer />
          <BootstrapClient />
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  )
}
