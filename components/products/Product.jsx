import { getBlurDataUrl } from "@/utils/helper"
import Image from "next/image"

const Product = ({ product }) => {
  const { name, description, price, sale_price, primary_image, is_sale } =
    product
  return (
    <div className="box">
      <div>
        <div className="img-box">
          <Image
            src={primary_image}
            alt="product_image"
            width="100"
            height="65"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }}
            placeholder="blur"
            blurDataURL={getBlurDataUrl()}
          />
        </div>
        <div className="detail-box">
          <h5>{name}</h5>
          <p>{description}</p>
          <div className="options">
            <h6>
              {is_sale ? (
                <>
                  <span>{sale_price.toLocaleString()}</span>
                  <del className="me-2">{price.toLocaleString()}</del>
                </>
              ) : (
                <span>{price.toLocaleString()}</span>
              )}
              <span>تومان</span>
            </h6>
            <a href="">
              <i className="bi bi-cart-fill text-white fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
