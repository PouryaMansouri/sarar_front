import React from "react";
import ProductCard from "../ui/productCard";

function MainLanding() {
  return (
    <>
      <main className="main demo2-cls">
        <div className="page-content">
          <div className="container">
            <section className="intro-section">
              <div className="row">
                <div className="mb-4 col-12">
                  <div
                    className="owl-carousel owl-theme row owl-dot-inner owl-dot-white intro-slider animation-slider cols-1 gutter-no"
                    data-owl-options="{
                                    'nav': false,
                                    'dots': true,
                                    'loop': true,
                                    'items': 1,
                                    'autoplay': false
                                }"
                  >
                    <div
                      className="content-center banner banner-fixed intro-slide1 content-middle"
                      style={{ backgroundColor: "#444342" }}
                    >
                      <figure>
                        <img
                          src="images/demos/demo2/slides/1.jpg"
                          alt="intro-banner"
                          width={1180}
                          height={600}
                          style={{ backgroundColor: "#444342" }}
                        />
                      </figure>
                      <div className="banner-content">
                        <h4
                          className="mb-0 text-left text-white banner-subtitle font-weight-semi-bold ls-normal lh-1 text-uppercase slide-animate"
                          data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                        >
                          Men’s wear
                        </h4>
                        <h2
                          className="text-white banner-title text-uppercase slide-animate"
                          data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s', 'delay': '.3s'}"
                        >
                          Collection
                        </h2>
                        <h5
                          className="mb-1 text-right text-white font-weight-normal lh-1 ls-normal slide-animate"
                          data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '1s'}"
                        >
                          Start at
                          <span className="text-secondary font-weight-bold">
                            $19.99
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="intro-slide2 banner banner-fixed">
                      <figure>
                        <img
                          src="images/demos/demo2/slides/2.jpg"
                          alt="banner"
                          width={1180}
                          height={600}
                          style={{ backgroundColor: "#686868" }}
                        />
                      </figure>
                      <div className="banner-content y-50">
                        <h4
                          className="banner-subtitle font-weight-normal lh-1 ls-m slide-animate"
                          data-animation-options="{'name': 'fadeInDownShorter', 'duration': '1.2s', 'delay': '.5s'}"
                        >
                          Lifestyle collection
                        </h4>
                        <h3
                          className="text-white banner-title ls-l text-uppercase font-weight-bold lh-1 slide-animate"
                          data-animation-options="{'name': 'blurIn', 'duration': '1.4s', 'delay': '.1s'}"
                        >
                          For Women’s
                        </h3>
                        <h5
                          className="mb-1 text-white font-weight-normal text-uppercase lh-1 ls-m slide-animate"
                          data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '.7s'}"
                        >
                          sale Up to
                          <span className="text-secondary font-weight-bold">
                            30% Off
                          </span>
                        </h5>
                        <p
                          className="font-weight-normal ls-s mb-7 slide-animate"
                          data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1s', 'delay': '.9s'}"
                        >
                          Get Free Shipping on all orders over $99.00
                        </p>
                        <a
                          href="demo2-shop.html"
                          className="btn btn-white btn-rounded slide-animate"
                          data-animation-options="{'name': 'fadeInUpShorter', 'duration': '1.2s', 'delay': '1.1s'}"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-6">
                  <div
                    className="banner banner-fixed overlay-zoom intro-banner intro-banner1 content-middle appear-animate"
                    data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.3s'
                                }"
                  >
                    <figure>
                      <img
                        src="images/demos/demo2/banners/1.jpg"
                        width={580}
                        height={249}
                        alt="banner"
                        style={{ backgroundColor: "#eca5a9" }}
                      />
                    </figure>
                    <div className="banner-content">
                      <h4 className="text-white banner-subtitle ls-normal text-uppercase font-weight-normal lh-1">
                        New Arrivals
                      </h4>
                      <h3 className="text-white banner-title font-weight-bold ls-md">
                        Women's Sale
                      </h3>
                      <a
                        href="demo2-shop.html"
                        className="btn btn-white btn-link btn-underline font-weight-semi-bold"
                      >
                        Shop Now
                        <i className="d-icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-6">
                  <div
                    className="banner banner-fixed overlay-zoom intro-banner intro-banner2 content-middle appear-animate"
                    data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'delay': '.5s'
                                }"
                  >
                    <figure>
                      <img
                        src="images/demos/demo2/banners/2.jpg"
                        width={580}
                        height={249}
                        alt="banner"
                        style={{ backgroundColor: "#494442" }}
                      />
                    </figure>
                    <div className="banner-content">
                      <h4 className="text-white banner-subtitle ls-normal text-uppercase font-weight-normal lh-1">
                        Trending
                      </h4>
                      <h3 className="text-white banner-title font-weight-bold ls-md">
                        New Sneaker
                      </h3>
                      <a
                        href="demo2-shop.html"
                        className="btn btn-white btn-link btn-underline font-weight-semi-bold"
                      >
                        Shop Now
                        <i className="d-icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-3 mt-10 mb-6">
              <h2 className="title title-simple title-center ls-m">
                Best Selling
              </h2>
              <div className="product-wrapper row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </section>
            <section
              className="pt-md-2 pb-md-6 category-section appear-animate"
              data-animation-options="{'name': 'fadeIn'}"
            >
              <h2 className="title title-simple ls-m">Top Categories</h2>
              <div className="grid row">
                <div className="grid-item col-md-6 height-x2">
                  <div className="content-center banner banner-fixed content-middle overlay-dark">
                    <a href="demo2-shop.html">
                      <figure>
                        <img
                          src="images/demos/demo2/category/1.jpg"
                          alt="category"
                          width={585}
                          height={397}
                          style={{ backgroundColor: "#eef0f1" }}
                        />
                      </figure>
                    </a>
                    <div className="text-center banner-content w-100 h-100 d-flex flex-column">
                      <h3 className="mb-0 banner-title text-uppercase ls-s">
                        Padded Clothes
                      </h3>
                      <h4 className="flex-1 mb-0 banner-subtitle font-weight-normal text-capitalize text-body ls-md lh-1">
                        Collection
                      </h4>
                      <div className="btn-group">
                        <a
                          href="demo2-shop.html"
                          className="btn btn-white btn-rounded font-weight-semi-bold"
                        >
                          Women’s
                        </a>
                        <a
                          href="demo2-shop.html"
                          className="btn btn-white btn-rounded font-weight-semi-bold"
                        >
                          Men's
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                  <div className="category category-light category-absolute overlay-dark">
                    <a href="demo2-shop.html">
                      <figure className="category-media">
                        <img
                          src="images/demos/demo2/category/2.jpg"
                          alt="category"
                          width={585}
                          height={205}
                          style={{ backgroundColor: "#c8ced4" }}
                        />
                      </figure>
                    </a>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo2-shop.html">Women’s T-Shirt</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                  <div className="category category-light category-absolute overlay-dark">
                    <a href="demo2-shop.html">
                      <figure className="category-media">
                        <img
                          src="images/demos/demo2/category/3.jpg"
                          alt="category"
                          width={585}
                          height={397}
                          style={{ backgroundColor: "#ebedef" }}
                        />
                      </figure>
                    </a>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="demo2-shop.html">Sports &amp; Outdoors</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-1 grid-space" />
              </div>
            </section>
            <section
              className="mt-10 mb-10 banner banner-sale appear-animate"
              data-animation-options="{'name': 'fadeIn'}"
              style={{
                backgroundImage: "url(images/demos/demo2/banners/3.jpg)",
                backgroundColor: "#1f272b",
              }}
            >
              <div
                className="banner-content appear-animate"
                data-animation-options="{'name': 'fadeInUpShorter','duration': '1s'}"
              >
                <h4 className="mb-0 text-white banner-subtitle text-uppercase font-weight-normal lh-1 ls-m">
                  End Of Season
                </h4>
                <hr className="mb-2 divider" />
                <h3 className="mb-0 text-white banner-title text-uppercase lh-1">
                  Sale
                </h3>
                <div className="price-rotated">
                  <div
                    className="banner-price-info d-flex align-items-center justify-content-center skrollr"
                    data-options='{"data-bottom-top":"transform: translate(0, 0) scale(1.6); transform-origin: center;", "data-center":"transform: translate(0, 0) scale(1);"}'
                    data-animation-options="{'name': 'fadeIn', 'duration': '1.2s', 'delay': '.2s'}"
                  >
                    <h5 className="mb-0 text-white text-uppercase ls-l">
                      At Up To
                      <br />
                      <span className="text-secondary ls-l">50%</span>
                      Off
                    </h5>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-1 pt-7">
              <h2 className="title title-simple ls-m">Our Featured</h2>
              <div
                className="owl-carousel owl-theme row owl-nav-full cols-lg-4 cols-md-3 cols-2"
                data-owl-options="{
                            'items': 4,
                            'nav': false,
                            'dots': true,
                            'loop': false,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4,
                                    'dots': false,
                                    'nav': true
                                }
                            }
                        }"
              >
                <div
                  className="product appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.2s'
                            }"
                >
                  <figure className="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/9.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width={280}
                        height={315}
                        style={{ backgroundColor: "#f2f3f5" }}
                      />
                    </a>
                    <div className="product-label-group">
                      <label className="product-label label-sale">
                        35% Off
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
                      <a href="demo2-shop.html">Accessories</a>
                    </div>
                    <h3 className="product-name">
                      <a href="demo2-product.html">Hand Electric Cell</a>
                    </h3>
                    <div className="product-price">
                      <ins className="new-price">$26.00</ins>
                      <del className="old-price">$38.00</del>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: "100%" }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="demo2-product.html" className="rating-reviews">
                        ( 6 reviews )
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="product appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.3s'
                            }"
                >
                  <figure className="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/10.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width={280}
                        height={315}
                        style={{ backgroundColor: "#f2f3f5" }}
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
                      <a href="demo2-shop.html">Shoes</a>
                    </div>
                    <h3 className="product-name">
                      <a href="demo2-product.html">
                        Season Sports Blue Sneaker
                      </a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$119.58</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: "80%" }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="demo2-product.html" className="rating-reviews">
                        ( 52 reviews )
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="product appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.4s'
                            }"
                >
                  <figure className="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/11.jpg"
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
                      <a href="demo2-shop.html">Women</a>
                    </div>
                    <h3 className="product-name">
                      <a href="demo2-product.html">Hempen Hood a Mourner</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$43.26</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: "40%" }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="demo2-product.html" className="rating-reviews">
                        ( 62 reviews )
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="product appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.5s'
                            }"
                >
                  <figure className="product-media">
                    <a href="demo2-product.html">
                      <img
                        src="images/demos/demo2/products/12.jpg"
                        alt="Blue Pinafore Denim Dress"
                        width={280}
                        height={315}
                        style={{ backgroundColor: "#f2f3f5" }}
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
                      <a href="demo2-shop.html">Bags &amp; Backpacks</a>
                    </div>
                    <h3 className="product-name">
                      <a href="demo2-product.html">Women’s Fashion Handbag</a>
                    </h3>
                    <div className="product-price">
                      <span className="price">$184.00</span>
                    </div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: "80%" }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <a href="demo2-product.html" className="rating-reviews">
                        ( 23 reviews )
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-10 service-list">
              <div
                className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-sm-2 cols-1"
                data-owl-options="{
                            'items': 4,
                            'nav': false,
                            'dots': false,
                            'autoplay': true,
                            'autoplayTimeout': 7000,
                            'margin': 20,
                            'responsive': {
                                '0': {
                                    'items': 1
                                },
                                '576': {
                                    'items': 2
                                },
                                '768': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4,
                                    'autoplay': false
                                }
                            }
                        }"
              >
                <div
                  className="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.2s'
                            }"
                >
                  <div className="icon-box-content">
                    <h3 className="mb-0 icon-box-title font-weight-bold text-capitalize ls-normal">
                      Free delivery
                    </h3>
                    <p className="text-primary">When You Spend $80 or More</p>
                  </div>
                </div>
                <div
                  className="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.3s'
                            }"
                >
                  <div className="icon-box-content">
                    <h3 className="mb-0 icon-box-title font-weight-bold text-capitalize ls-normal">
                      Tracked delivery
                    </h3>
                    <p className="text-primary">Only $6 Standard 6-10 Days</p>
                  </div>
                </div>
                <div
                  className="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.4s'
                            }"
                >
                  <div className="icon-box-content">
                    <h3 className="mb-0 icon-box-title font-weight-bold text-capitalize ls-normal">
                      Need it in a hurry
                    </h3>
                    <p className="text-primary">
                      You can Express Shipping in 5 Days
                    </p>
                  </div>
                </div>
                <div
                  className="icon-box appear-animate"
                  data-animation-options="{
                                'name': 'fadeInRightShorter',
                                'delay': '.5s'
                            }"
                >
                  <div className="icon-box-content">
                    <h3 className="mb-0 icon-box-title font-weight-bold text-capitalize ls-normal">
                      30 - Day returns
                    </h3>
                    <p className="text-primary">
                      Return Most Items Within 30 Days
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="pb-8 mt-10 mb-10 instagram-section pt-7 appear-animate"
              data-animation-options="{
                        'delay': '.2s',
                        'duration': '.5s'
                    }"
            >
              <h2 className="title title-simple">Our Instagram</h2>
              <div
                className="owl-carousel owl-theme row cols-xl-5 cols-lg-4 cols-sm-3 cols-2"
                data-owl-options="{
                            'items': 5,
                            'nav': false,
                            'dots': false,
                            'margin': 20,
                            'autoplay': true,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '576': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4
                                },
                                '1200': {
                                    'items': 5
                                }
                            }
                        }"
              >
                <figure className="instagram">
                  <a href="#">
                    <img
                      src="images/demos/demo2/instagram/1.jpg"
                      alt="Instagram"
                      width={220}
                      height={220}
                    />
                  </a>
                </figure>
                <figure className="instagram">
                  <a href="#">
                    <img
                      src="images/demos/demo2/instagram/2.jpg"
                      alt="Instagram"
                      width={220}
                      height={220}
                    />
                  </a>
                </figure>
                <figure className="instagram">
                  <a href="#">
                    <img
                      src="images/demos/demo2/instagram/3.jpg"
                      alt="Instagram"
                      width={220}
                      height={220}
                    />
                  </a>
                </figure>
                <figure className="instagram">
                  <a href="#">
                    <img
                      src="images/demos/demo2/instagram/4.jpg"
                      alt="Instagram"
                      width={220}
                      height={220}
                    />
                  </a>
                </figure>
                <figure className="instagram">
                  <a href="#">
                    <img
                      src="images/demos/demo2/instagram/5.jpg"
                      alt="Instagram"
                      width={220}
                      height={220}
                    />
                  </a>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLanding;
