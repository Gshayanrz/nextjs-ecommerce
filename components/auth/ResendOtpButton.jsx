"use client"

import { resendOtp } from "@/actions/auth"
import SubmitFormButton from "@/components/SubmitFormButton"
import { useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify"

const ResendOtpButton = () => {
  const [stateResend, formActionResend] = useActionState(resendOtp, {})
  const [minutes, setMinutes] = useState(0)
  const [secondes, setSecondes] = useState(10)

  useEffect(() => {
    toast(stateResend?.message, { type: `${stateResend?.status}` })
    if (stateResend?.status === "success") {
      setMinutes(0)
      setSecondes(10)
    }
  }, [stateResend])

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondes > 0) {
        setSecondes(secondes - 1)
      }
      if (secondes === 0) {
        if (minutes === 0) {
          clearInterval(interval)
        } else {
          setSecondes(59)
          setMinutes(minutes - 1)
        }
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [secondes])

  return (
    <div className="resend-otp-btn">
      {secondes > 0 || minutes > 0 ? (
        <div className="mb-1 me-3">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {secondes < 10 ? `0${secondes}` : secondes}
        </div>
      ) : (
        <form action={formActionResend}>
          <SubmitFormButton title="ارسال دوباره" style="btn btn-dark" />
        </form>
      )}
    </div>
  )
}

export default ResendOtpButton
