"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const CategoriesList = ({ categories }) => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleClick = (id, remove = false) => {
    const params = new URLSearchParams(searchParams)
    if (remove) {
      params.delete("category")
    } else {
      params.set("category", id)
      params.delete("page")
    }

    router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className="filter-list">
      <div className="form-label">
        دسته بندی
        {searchParams.has("category") && (
          <span
            onClick={() => handleClick(null, true)}
            className="text-danger fs-4 cursor-pointer"
          >
            <i className="bi bi-x"></i>
          </span>
        )}
      </div>

      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={
              searchParams.has("category") &&
              searchParams.get("category") == category.id
                ? "my-2 cursor-pointer filter-list-active"
                : "my-2 cursor-pointer"
            }
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList
