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

export const otpActions = async (state, formData) => {
  const otp = formData.get("otp")

  if (otp === "") {
    return {
      status: "error",
      message: "وارد کردن کد ورود الزامی است"
    }
  }
  const pattern = /^[0-9]{6}$/
  if (!pattern.test(otp)) {
    return {
      status: "error",
      message: "کد ورود معتبر نیست"
    }
  }

  const cookieStore = await cookies()
  const loginToken = cookieStore.get("login_token")
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی معتبر نیست. دوباره تلاش کنید"
    }
  }

  const data = await postFetch("/auth/check-otp", {
    otp,
    login_token: loginToken.value
  })

  if (data.status == "success") {
    ;(await cookies()).delete("login_token")
    ;(await cookies()).set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    return {
      status: data.status,
      message: "شما با موفقیت وارد شدید",
      user: data.data.user
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}

export const me = async () => {
  const token = (await cookies()).get("token")

  if (!token) {
    return {
      error: "Not Authorized"
    }
  }

  const data = await postFetch(
    "/auth/me",
    {},
    { Authorization: `Bearer ${token.value}` }
  )

  if (data.status == "success") {
    return {
      user: data.data
    }
  } else {
    return {
      error: "User Forbidden"
    }
  }
}

export const resendOtp = async (state, formData) => {
  const cookieStore = await cookies()
  const loginToken = cookieStore.get("login_token")
  if (!loginToken) {
    return {
      status: "error",
      message: "توکن ورودی معتبر نیست. دوباره تلاش کنید"
    }
  }

  const data = await postFetch("/auth/resend-otp", {
    login_token: loginToken.value
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
      message: "کد ورود دوباره ارسال شد",
      user: data.data.user
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}
