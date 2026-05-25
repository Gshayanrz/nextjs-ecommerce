"use client"
import { useFormStatus } from "react-dom"

const SubmitFormButton = ({ title, style }) => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} className={style}>
      {title}
      {pending && (
        <div className="spinner-border spinner-border-sm ms-2"></div>
      )}
    </button>
  )
}

export default SubmitFormButton
