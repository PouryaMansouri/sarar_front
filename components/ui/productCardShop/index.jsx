import React from "react";

function ProductCardShop() {
  return (
    <div className="product-wrap">
      <div className="product">
        <figure className="product-media">
          <a href="product.html">
            <img
              src="images/shop/13.jpg"
              alt="product"
              width={280}
              height={315}
            />
          </a>
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
            <a href="shop-infinite-ajaxscroll.html">Clothing</a>
          </div>
          <h3 className="product-name">
            <a href="product.html">Coast Pool Comfort Jacket</a>
          </h3>
          <div className="product-price">
            <ins className="new-price">$199.00</ins>
            <del className="old-price">$210.00</del>
          </div>
          <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: "100%" }} />
              <span className="tooltiptext tooltip-top" />
            </div>
            <a href="product.html" className="rating-reviews">
              ( 6 reviews )
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardShop;
