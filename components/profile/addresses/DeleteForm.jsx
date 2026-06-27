"use client"

import { deleteAddress } from "@/actions/profile"
import SubmitFormButton from "@/components/SubmitFormButton"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

const DeleteForm = ({ addressId }) => {
  const [stateDelete, formActionDelete] = useActionState(deleteAddress, {})
  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete?.status}` })
  }, [stateDelete])

  return (
    <div className="form-delete-address">
      <form action={formActionDelete}>
        <input type="hidden" name="address_id" value={addressId} />
        <SubmitFormButton style="btn btn-dark" title="حذف" />
      </form>
    </div>
  )
}

export default DeleteForm
