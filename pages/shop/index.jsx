import React from "react";

function ShopPage() {
  return (
    <div className="page-content mb-10">
      <div className="container">
        <div className="row gutter-lg main-content-wrap">
          <aside className="col-lg-3 sidebar sidebar-fixed sidebar-toggle-remain shop-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay" />
            <a className="sidebar-close" href="#">
              <i className="d-icon-times" />
            </a>
            <div className="sidebar-content">
              <div className="sticky-sidebar" data-sticky-options="{'top': 10}">
                <div className="filter-actions mb-4">
                  <a
                    href="#"
                    className="sidebar-toggle-btn toggle-remain btn btn-outline btn-primary btn-rounded btn-icon-right"
                  >
                    Filter
                    <i className="d-icon-arrow-left" />
                  </a>
                  <a href="#" className="filter-clean">
                    Clean All
                  </a>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">All Categories</h3>
                  <ul className="widget-body filter-items search-ul">
                    <li>
                      <a href="#">Accessosries</a>
                    </li>
                    <li>
                      <a href="#">Bags</a>
                      <ul>
                        <li>
                          <a href="#">Backpacks &amp; Fashion Bags</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Electronics</a>
                      <ul>
                        <li>
                          <a href="#">Computer</a>
                        </li>
                        <li>
                          <a href="#">Gaming &amp; Accessosries</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">For Fitness</a>
                    </li>
                    <li>
                      <a href="#">Home &amp; Kitchen</a>
                    </li>
                    <li>
                      <a href="#">Men's</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                    <li>
                      <a href="#">Sporting Goods</a>
                    </li>
                    <li>
                      <a href="#">Summer Season's</a>
                    </li>
                    <li>
                      <a href="#">Travel &amp; Clothing</a>
                    </li>
                    <li>
                      <a href="#">Watches</a>
                    </li>
                    <li>
                      <a href="#">Women’s</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">Filter by Price</h3>
                  <div className="widget-body mt-3">
                    <form action="#">
                      <div className="filter-price-slider" />
                      <div className="filter-actions">
                        <div className="filter-price-text mb-4">
                          Price:
                          <span className="filter-price-range" />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-dark btn-filter btn-rounded"
                        >
                          Filter
                        </button>
                      </div>
                    </form>
                    {/* End Filter Price Form */}
                  </div>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">Size</h3>
                  <ul className="widget-body filter-items filter-price">
                    <li>
                      <a href="#">Extra Large</a>
                    </li>
                    <li>
                      <a href="#">Large</a>
                    </li>
                    <li>
                      <a href="#">Medium</a>
                    </li>
                    <li>
                      <a href="#">Small</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">Color</h3>
                  <ul className="widget-body filter-items filter-price">
                    <li>
                      <a href="#">Black</a>
                    </li>
                    <li>
                      <a href="#">Blue</a>
                    </li>
                    <li>
                      <a href="#">Green</a>
                    </li>
                    <li>
                      <a href="#">White</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">Brands</h3>
                  <ul className="widget-body filter-items filter-price">
                    <li>
                      <a href="#">Cinderella</a>
                    </li>
                    <li>
                      <a href="#">Comedy</a>
                    </li>
                    <li>
                      <a href="#">Rightcheck</a>
                    </li>
                    <li>
                      <a href="#">SkillStar</a>
                    </li>
                    <li>
                      <a href="#">SLS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-lg-9 main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <a
                  href="#"
                  className="toolbox-item left-sidebar-toggle btn btn-outline btn-primary 
										btn-rounded btn-icon-right d-lg-none"
                >
                  Filter
                  <i className="d-icon-arrow-right" />
                </a>
                <div className="toolbox-item toolbox-sort select-box text-dark">
                  <label>Sort By :</label>
                  <select name="orderby" className="form-control">
                    <option value="default">Default</option>
                    <option value="popularity" selected="selected">
                      Most Popular
                    </option>
                    <option value="rating">Average rating</option>
                    <option value="date">Latest</option>
                    <option value="price-low">Sort forward price low</option>
                    <option value="price-high">Sort forward price high</option>
                    <option value>Clear custom sort</option>
                  </select>
                </div>
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box text-dark">
                  <label>Show :</label>
                  <select name="count" className="form-control">
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>
                <div className="toolbox-item toolbox-layout">
                  <a
                    href="shop-list-mode.html"
                    className="d-icon-mode-list btn-layout"
                  />
                  <a
                    href="shop.html"
                    className="d-icon-mode-grid btn-layout active"
                  />
                </div>
              </div>
            </nav>
            <div className="row cols-2 cols-sm-3 product-wrapper scroll-load">
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/1.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">bags</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Fashionable Hooded Coat</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$35.00</span>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/2.jpg"
                        alt="product"
                        width={280}
                        height={315}
                      />
                    </a>
                    <div className="product-label-group">
                      <label className="product-label label-sale">
                        27% off
                      </label>
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
                      <a href="shop-infinite-ajaxscroll.html">bags</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Women's Fashion Handbag</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$19.00</span>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/4.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="product.html">Fashionable Padded Jacket</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/14.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">bags</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Cavin Fashion Suede Handbag</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/3.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">shoes</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Women's Fashion Hood</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/5.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">Watches</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Converse Blue Training Shoes</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/12.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">Watches</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Beyond OTP Jacket</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/15.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">Women’s</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Fashion Overnight Bag</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/7.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">shoes</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Fashion Brown Suede Shoes</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/8.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">Women’s</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Men's Fashion Jacket</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
              <div className="product-wrap">
                <div className="product">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="images/shop/9.jpg"
                        alt="product"
                        width={280}
                        height={315}
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
                      <a href="shop-infinite-ajaxscroll.html">electronics</a>
                    </div>
                    <h3 className="product-name">
                      <a href="product.html">Fashion Cowboy Hat</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$98.00</ins>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
