"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const SortMenu = () => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (type, remove = false) => {
    const params = new URLSearchParams(searchParams)
    if (remove) {
      params.delete("sortBy")
      params.delete("page")
    } else {
      params.set("sortBy", type)
      params.delete("page")
    }

    router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div>
      <label className="form-label">
        مرتب سازی
        {searchParams.has("sortBy") && (
          <span
            onClick={() => handleClick(null, true)}
            className="text-danger fs-4 cursor-pointer"
          >
            <i className="bi bi-x"></i>
          </span>
        )}
      </label>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("max")}
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "max"
          }
        />
        <label className="form-check-label cursor-pointer">
          بیشترین قیمت
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("min")}
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "min"
          }
        />
        <label className="form-check-label cursor-pointer">
          کمترین قیمت
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("bestseller")}
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "bestseller"
          }
        />
        <label className="form-check-label cursor-pointer">
          پرفروش ترین
        </label>
      </div>
      <div className="form-check my-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("sale")}
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "sale"
          }
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  )
}

export default SortMenu
