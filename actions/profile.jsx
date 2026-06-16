"use server"

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"

export const editInfo = async (state, formData) => {
  const name = formData.get("name")
  const email = formData.get("email")

  if (name === "") {
    return {
      status: "error",
      message: "وارد کردن نام و نام خانوادگی الزامی است"
    }
  }
  if (email === "") {
    return {
      status: "error",
      message: "وارد کردن ایمیل الزامی است"
    }
  }

  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  const data = await postFetch(
    "/profile/info/edit",
    {
      name,
      email
    },
    { Authorization: `Bearer ${token.value}` }
  )

  if (data.status == "success") {
    return {
      status: data.status,
      message: "اطلاعات با موفقیت ویرایش شد"
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}
