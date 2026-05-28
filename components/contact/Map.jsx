"use client"

import { useEffect } from "react"
import "leaflet/dist/leaflet.css"

const Map = () => {
  useEffect(() => {
    let map
    const loadMap = async () => {
      const L = await import("leaflet")
      map = L.map("map").setView(
        [35.727217907579885, 51.30119375980735],
        14
      )
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18
      }).addTo(map)
      L.marker([35.727217907579885, 51.30119375980735], {
        icon: L.icon({
          popupAnchor: [12, 6],
          iconUrl: "images/map/marker-icon.png",
          shadowUrl: "images/map/marker-shadow.png"
        })
      })
        .addTo(map)
        .bindPopup(
          "<p style='font-family: Vazir, sans-serif; font-weight: bolder'>ما اینجا هستیم</p>"
        )
        .openPopup()
    }
    loadMap()

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  return <div id="map" style={{ height: "345px" }}></div>
}

export default Map
