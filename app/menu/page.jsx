import CategoriesList from "@/components/menu/CategoriesList"
import LoadingMenu from "@/components/menu/Loading"
import ProductsList from "@/components/menu/ProductsList"
import SearchMenu from "@/components/menu/Search"
import SortMenu from "@/components/menu/Sort"
import { getFetch } from "@/utils/fetch"
import React, { Suspense } from "react"

const MenuPage = async ({ searchParams }) => {
  const categories = await getFetch("/categories")
  const sp = await searchParams
  const params = new URLSearchParams(sp)
  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <SearchMenu />
            <hr />
            <CategoriesList categories={categories} />
            <hr />
            <SortMenu />
          </div>
          <div className="col-sm-12 col-lg-9">
            <Suspense key={params.toString()} fallback={<LoadingMenu />}>
              <ProductsList params={params.toString()} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuPage
