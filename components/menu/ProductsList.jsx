import { getFetch } from "@/utils/fetch"
import Product from "../products/Product"
import PaginateMenu from "./Paginate"

const ProductsList = async ({ params }) => {
  const data = await getFetch(`/menu?${params}`)
  return (
    <>
      <div className="row gx-3">
        {data.products.map((product) => (
          <div key={product.id} className="col-sm-6 col-lg-4">
            <Product product={product} />
          </div>
        ))}
      </div>
      <PaginateMenu links={data.meta.links} />
    </>
  )
}

export default ProductsList
