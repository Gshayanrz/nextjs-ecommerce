"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const SearchMenu = () => {
  const [term, setTerm] = useState("")
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (remove) => {
    const params = new URLSearchParams(searchParams)
    params.delete("page")
    if (remove) {
      params.delete("search")
      setTerm("")
    } else {
      params.set("search", term)
    }
    router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div>
      <label className="form-label">جستجو</label>
      {searchParams.has("search") && (
        <span
          onClick={() => handleSearch(true)}
          className="text-danger fs-4 cursor-pointer"
        >
          <i className="bi bi-x"></i>
        </span>
      )}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="نام محصول ..."
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button
          onClick={() => term !== "" && handleSearch()}
          className="input-group-text"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchMenu
