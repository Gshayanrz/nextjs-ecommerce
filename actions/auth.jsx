"use server"

import { postFetch } from "@/utils/fetch"
import { handleError } from "@/utils/helper"
import { cookies } from "next/headers"

export const loginActions = async (state, formData) => {
  const cellphone = formData.get("cellphone")

  if (cellphone === "") {
    return {
      status: "error",
      message: "وارد کردن شماره موبایل الزامی است"
    }
  }
  const pattern = /^(\+98|0)?9\d{9}$/
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل صحیح نیست!"
    }
  }

  const data = await postFetch("/auth/login", {
    cellphone
  })
  if (data.status == "success") {
    ;(await cookies()).set({
      name: "login_token",
      value: data.data.login_token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    return {
      status: data.status,
      message: "کد تایید با موفقیت برای شما ارسال شد."
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}
