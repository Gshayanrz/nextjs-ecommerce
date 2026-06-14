"use client"

import { otpActions } from "@/actions/auth"
import SubmitFormButton from "@/components/SubmitFormButton"
import AuthContext from "@/context/AuthContext"
import { useActionState, useContext, useEffect } from "react"
import { toast } from "react-toastify"
import ResendOtpButton from "./ResendOtpButton"
import { useRouter } from "next/navigation"

const CheckOtpForm = () => {
  const [stateOtp, formActionOtp] = useActionState(otpActions, {})
  const { loginContext } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    toast(stateOtp?.message, { type: `${stateOtp?.status}` })
    if (stateOtp?.status === "success") {
      loginContext(stateOtp.user)
      router.push("/")
    }
  }, [stateOtp])

  return (
    <div className="card-body">
      <div className="form_container">
        <form action={formActionOtp}>
          <div className="mb-3">
            <label className="form-label">کد ورود</label>
            <input name="otp" type="text" className="form-control" />
          </div>
          <SubmitFormButton
            title="تایید"
            style="btn btn-primary btn-auth"
          />
        </form>
        <ResendOtpButton />
      </div>
    </div>
  )
}

export default CheckOtpForm
