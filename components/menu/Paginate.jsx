"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const PaginateMenu = ({ links }) => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePage = (page) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", page)

    router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {links.slice(1, -1).map((link, index) => (
          <li
            className={`page-item ${link.active == true ? "active" : ""}`}
            key={index}
          >
            <button
              className={"page-link"}
              onClick={() => handlePage(link.label)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PaginateMenu
