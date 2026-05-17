"use client"

import Link from "next/link"
import { useState } from "react"
import Product from "./Product"

const ProductsTab = ({ tabList, tabPanel }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <ul className="filters_menu">
          {tabList.map((list, index) => (
            <li
              className={`mx-1 ${activeIndex === index ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              {list}
            </li>
          ))}
        </ul>

        <div className="filters-content">
          {tabPanel.map((panel, index) => (
            <div className="row grid" key={index}>
              {panel.map((product, index) => (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="btn-box">
          <Link href="/menu">مشاهده بیشتر</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsTab
