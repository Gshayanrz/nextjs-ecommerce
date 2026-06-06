import Product from "@/components/products/Product"
import { getFetch } from "@/utils/fetch"
import { getBlurDataUrl, salePercent } from "@/utils/helper"
import Image from "next/image"

const ProductPage = async ({ params }) => {
  const { slug } = await params
  const decodedSlug = decodeURI(slug)
  const product = await getFetch(`/products/${decodedSlug}`)
  const randomProducts = await getFetch(`/random-products?count=4`)
  const {
    name,
    is_sale,
    price,
    sale_price,
    primary_image,
    description,
    images
  } = product

  return (
    <>
      <section className="single_page_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row gy-5">
                <div className="col-sm-12 col-lg-6">
                  <h3 className="fw-bold mb-4">{name}</h3>
                  <div className="mb-3">
                    {is_sale ? (
                      <div className="d-flex gap-2">
                        <del>{price?.toLocaleString()}</del>
                        <span>{sale_price?.toLocaleString()} تومان</span>
                      </div>
                    ) : (
                      <p>{price?.toLocaleString()} تومان</p>
                    )}
                    {is_sale && (
                      <div className="text-danger fs-6">
                        {salePercent(price, sale_price)}% تخفیف
                      </div>
                    )}
                  </div>
                  <p>{description}</p>

                  <div className="mt-5 d-flex">
                    <button className="btn-add">افزودن به سبد خرید</button>
                    <div className="input-counter ms-4">
                      <span className="plus-btn">+</span>
                      <div className="input-number">1</div>
                      <span className="minus-btn">-</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      {images.map((image, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={index + 1}
                        ></button>
                      ))}
                    </div>

                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <Image
                          src={primary_image}
                          className="d-block w-100"
                          alt="product-primary-image"
                          width="464"
                          height="309"
                          placeholder="blur"
                          blurDataURL={getBlurDataUrl()}
                        />
                      </div>
                      {images.map((image) => (
                        <div key={image.id} className="carousel-item">
                          <Image
                            src={image.image}
                            className="d-block w-100"
                            alt="product-image"
                            width="464"
                            height="309"
                            placeholder="blur"
                            blurDataURL={getBlurDataUrl()}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="food_section my-5">
        <div className="container">
          <div className="row gx-3">
            {randomProducts.map((rndProduct, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <Product product={rndProduct} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage
