"use client"

import CheckOtpForm from "@/components/auth/CheckOtpForm"
import LoginForm from "@/components/auth/LoginForm"
import Image from "next/image"
import { useState } from "react"

const LoginPage = () => {
  const [step, setStep] = useState(1)

  return (
    <section className="auth_section book_section">
      <div className="container">
        <div className="col-md-4 offset-md-4">
          <div className="row mt-5">
            <div className="card">
              <Image
                src="/images/login.svg"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              {step === 1 && <LoginForm setStep={setStep} />}
              {step === 2 && <CheckOtpForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
