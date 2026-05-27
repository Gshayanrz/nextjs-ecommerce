"use client"

import { contact } from "@/actions/contact"
import { useActionState, useEffect } from "react"
import SubmitFormButton from "../SubmitFormButton"
import { toast } from "react-toastify"

const FormContact = () => {
  const [state, formAction] = useActionState(contact, {})

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` })
    // if (state?.status === "error") {
    //   toast.error(state.message)
    // }
  }, [state])
  return (
    <div className="form_container">
      <form action={formAction}>
        <div>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="ایمیل"
          />
        </div>
        <div>
          <input
            name="subject"
            type="text"
            className="form-control"
            placeholder="موضوع پیام"
          />
        </div>
        <div>
          <textarea
            name="text"
            rows="10"
            style={{ height: "100px" }}
            className="form-control"
            placeholder="متن پیام"
          ></textarea>
        </div>
        <div className="btn_box">
          <SubmitFormButton title="ارسال پیام" />
        </div>
      </form>
    </div>
  )
}

export default FormContact
