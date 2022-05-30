import React from "react";

function ProductCard({ dataCard, ...props }) {
  return (
    <div className="mb-4 col-lg-3 col-md-4 col-6">
      <div
        className="product "
        data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'delay': '.4s'
                                }"
      >
        <figure className="product-media">
          <a href="demo2-product.html">
            <img
              src={dataCard?.image}
              alt="Blue Pinafore Denim Dress"
              width={280}
              height={315}
              style={{ backgroundColor: "#f2f3f5" }}
            />
          </a>
          <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-cart"
              data-toggle="modal"
              data-target="#addCartModal"
              title="Add to cart"
            >
              <i className="d-icon-bag" />
            </a>
            <a
              href="#"
              className="btn-product-icon btn-wishlist"
              title="Add to wishlist"
            >
              <i className="d-icon-heart" />
            </a>
          </div>
        </figure>
        <div className="product-details">
          <div className="product-cat">
            <a href="demo2-shop.html">{dataCard?.category?.name}</a>
          </div>
          <h3 className="product-name">
            <a href="demo2-product.html">{dataCard?.title}</a>
          </h3>
          <div className="product-price">
            <span className="price">$7{dataCard?.min_price}</span>
          </div>
          <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: "100%" }} />
              <span className="tooltiptext tooltip-top" />
            </div>
            <a href="demo2-product.html" className="rating-reviews">
              ( {dataCard?.star} reviews )
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
