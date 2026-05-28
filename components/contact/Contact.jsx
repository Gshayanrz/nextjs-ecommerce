import React from "react"
import FormContact from "./Form"
import dynamic from "next/dynamic"
import MapWrapper from "./MapWrapper"

const Contact = () => {
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>تماس با ما</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormContact />
          </div>
          <div className="col-md-6">
            <div className="map_container ">
              <MapWrapper />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
