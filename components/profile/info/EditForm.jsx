"use client"

import { editInfo } from "@/actions/profile"
import SubmitFormButton from "@/components/SubmitFormButton"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

const EditForm = ({ data }) => {
  const { name, email, cellphone } = data
  const [state, formAction] = useActionState(editInfo, {})

  useEffect(() => {
    toast(state?.message, { type: `${state?.status}` })
  }, [state])

  return (
    <form action={formAction}>
      <div className="row g-4">
        <div className="col col-md-6">
          <label className="form-label">نام و نام خانوادگی</label>
          <input
            type="text"
            className="form-control"
            defaultValue={name}
            name="name"
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label">ایمیل</label>
          <input
            type="text"
            className="form-control"
            defaultValue={email}
            name="email"
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label">شماره تلفن</label>
          <input
            type="text"
            disabled
            className="form-control"
            defaultValue={cellphone}
          />
        </div>
      </div>
      <SubmitFormButton title="ویرایش" style="btn btn-primary mt-4" />
    </form>
  )
}

export default EditForm
