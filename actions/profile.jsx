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

export const createAddress = async (state, formData) => {
  const title = formData.get("title")
  const cellphone = formData.get("cellphone")
  const postal_code = formData.get("postal_code")
  const province_id = formData.get("province_id")
  const city_id = formData.get("city_id")
  const address = formData.get("address")

  if (title === "") {
    return {
      status: "error",
      message: "وارد کردن عنوان الزامی است"
    }
  }
  const cellphonePattern = /^(\+98|0)?9\d{9}$/
  if (cellphone === "" || !cellphonePattern.test(cellphone)) {
    return {
      status: "error",
      message: "فیلد شماره تماس نامعتبر است"
    }
  }
  const postalCodePattern = /^\d{5}[ -]?\d{5}$/i
  if (postal_code === "" || !postalCodePattern.test(postal_code)) {
    return {
      status: "error",
      message: "وارد کردن کدپستی الزامی است"
    }
  }
  if (address === "") {
    return {
      status: "error",
      message: "وارد کردن آدرس الزامی است"
    }
  }

  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  const data = await postFetch(
    "/profile/addresses/create",
    {
      title,
      cellphone,
      postal_code,
      province_id,
      city_id,
      address
    },
    { Authorization: `Bearer ${token.value}` }
  )

  if (data.status == "success") {
    return {
      status: data.status,
      message: "اطلاعات با موفقیت ثبت شد"
    }
  } else {
    return {
      status: data.status,
      message: handleError(data.message)
    }
  }
}
