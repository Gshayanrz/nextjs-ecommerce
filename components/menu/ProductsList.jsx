import { getFetch } from "@/utils/fetch"
import Product from "../products/Product"
import PaginateMenu from "./Paginate"

const ProductsList = async () => {
  const data = await getFetch("/menu")
  return (
    <>
      <div className="row gx-3">
        {data.products.map((product) => (
          <div key={product.id} className="col-sm-6 col-lg-4">
            <Product product={product} />
          </div>
        ))}
      </div>
      <PaginateMenu />
    </>
  )
}

export default ProductsList
