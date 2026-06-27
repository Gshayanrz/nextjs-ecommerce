"use client"
import { editAddress } from "@/actions/profile"
import { useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify"
import DeleteForm from "./DeleteForm"

const EditForm = ({ address, provinces, cities }) => {
  const [stateEdit, formActionEdit] = useActionState(editAddress, {})
  const [citiesFilter, setCitiesFilter] = useState(cities)

  useEffect(() => {
    toast(stateEdit?.message, { type: `${stateEdit?.status}` })
  }, [stateEdit])

  const handleFilterCities = (e) => {
    setCitiesFilter(
      cities.filter((city) => city.province_id == e.target.value)
    )
  }

  return (
    <>
      <div className="position-relative" id="collapseExample">
        <form action={formActionEdit} className="card card-body mt-3">
          <div className="row g-4">
            <div className="col col-md-6">
              <label className="form-label">عنوان</label>
              <input
                name="title"
                defaultValue={address.title}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">شماره تماس</label>
              <input
                name="cellphone"
                type="text"
                className="form-control"
                defaultValue={address.cellphone}
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">کد پستی</label>
              <input
                name="postal_code"
                type="text"
                className="form-control"
                defaultValue={address.postal_code}
              />
            </div>
            <div className="col col-md-6">
              <label className="form-label">استان</label>
              <select
                name="province_id"
                className="form-select"
                onChange={handleFilterCities}
                defaultValue={address.province_id}
              >
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-6">
              <label className="form-label">شهر</label>
              <select
                name="city_id"
                className="form-select"
                defaultValue={address.city_id}
              >
                {citiesFilter.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col col-md-12">
              <label className="form-label">آدرس</label>
              <textarea
                name="address"
                type="text"
                rows="5"
                className="form-control"
                defaultValue={address.address}
              ></textarea>
            </div>
            <input
              type="hidden"
              name="address_id"
              value={address.id}
            ></input>
          </div>
          <div>
            <button className="btn btn-primary mt-4">ویرایش</button>
          </div>
        </form>
        <DeleteForm addressId={address.id}/>
      </div>
    </>
  )
}

export default EditForm
