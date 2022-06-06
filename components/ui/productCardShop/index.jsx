import Link from "next/link";
import React from "react";

function ProductCardShop({ dataCard, ...props }) {
  console.log("dataCard :>> ", dataCard);
  return (
    <div className="product-wrap">
      <div className="product">
        <figure className="product-media">
          <Link href={`/product/${dataCard.id}/`}>
            <a href="product.html">
              <img
                src={dataCard?.product?.image}
                alt="product"
                width={280}
                height={315}
              />
            </a>
          </Link>
          <div className="product-label-group">
            <label className="product-label label-new">new</label>
          </div>
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
          <div className="product-action">
            <a
              href="#"
              className="btn-product btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </div>
        </figure>
        <div className="product-details">
          <div className="product-cat">
            <Link href={`/`}>
              <a>{dataCard?.category?.name}</a>
            </Link>
          </div>
          <h3 className="product-name">
            <Link href={`/product/${dataCard.id}/`}>
              <a>{dataCard?.title}</a>
            </Link>
          </h3>
          <div className="product-price">
            <ins className="new-price">${dataCard?.price}</ins>
            <del className="old-price">$210.00</del>
          </div>
          <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: "100%" }} />
              <span className="tooltiptext tooltip-top" />
            </div>
            <a href="product.html" className="rating-reviews">
              ( {dataCard?.star} reviews )
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardShop;
