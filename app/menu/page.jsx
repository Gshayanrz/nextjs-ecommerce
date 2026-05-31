import CategoriesList from "@/components/menu/CategoriesList"
import LoadingMenu from "@/components/menu/Loading"
import ProductsList from "@/components/menu/ProductsList"
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
            <div>
              <label className="form-label">جستجو</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام محصول ..."
                />
                <a href="#" className="input-group-text">
                  <i className="bi bi-search"></i>
                </a>
              </div>
            </div>
            <hr />
            <CategoriesList categories={categories} />
            <hr />
            <div>
              <label className="form-label">مرتب سازی</label>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
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
                />
                <label className="form-check-label cursor-pointer">
                  با تخفیف
                </label>
              </div>
            </div>
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
