"use client"

import Link from "next/link"
import { useState } from "react"
import Product from "./Product"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const ProductsTab = ({ tabList, tabPanel }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <Tabs>
          <TabList>
            <ul className="filters_menu">
              {tabList.map((list, index) => (
                <Tab
                  className={`mx-1 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {list}
                </Tab>
              ))}
            </ul>
          </TabList>

          <div className="filters-content">
            {tabPanel.map((panel, index) => (
              <TabPanel key={index}>
                <div className="row grid">
                  {panel.map((product, index) => (
                    <div className="col-sm-6 col-lg-4" key={index}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>

        <div className="btn-box">
          <Link href="/menu">مشاهده بیشتر</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsTab
