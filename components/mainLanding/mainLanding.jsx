import React from "react";
import BannerPart from "../landing/bannerPart";
import InstagramPart from "../landing/instagramPart";
import TopCategories from "../landing/topCategories";
import ValuesPart from "../landing/valuesPart";
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
                  <div className="owl-carousel owl-theme row owl-dot-inner owl-dot-white intro-slider animation-slider cols-1 gutter-no">
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
                        <h4 className="mb-0 text-left text-white banner-subtitle font-weight-semi-bold ls-normal lh-1 text-uppercase slide-animate">
                          Men’s wear
                        </h4>
                        <h2 className="text-white banner-title text-uppercase slide-animate">
                          Collection
                        </h2>
                        <h5 className="mb-1 text-right text-white font-weight-normal lh-1 ls-normal slide-animate">
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
                        <h4 className="banner-subtitle font-weight-normal lh-1 ls-m slide-animate">
                          Lifestyle collection
                        </h4>
                        <h3 className="text-white banner-title ls-l text-uppercase font-weight-bold lh-1 slide-animate">
                          For Women’s
                        </h3>
                        <h5 className="mb-1 text-white font-weight-normal text-uppercase lh-1 ls-m slide-animate">
                          sale Up to
                          <span className="text-secondary font-weight-bold">
                            30% Off
                          </span>
                        </h5>
                        <p className="font-weight-normal ls-s mb-7 slide-animate">
                          Get Free Shipping on all orders over $99.00
                        </p>
                        <a
                          href="demo2-shop.html"
                          className="btn btn-white btn-rounded slide-animate"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-md-6">
                  <div className="banner banner-fixed overlay-zoom intro-banner intro-banner1 content-middle ">
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
                  <div className="banner banner-fixed overlay-zoom intro-banner intro-banner2 content-middle ">
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
            <TopCategories />
            <BannerPart />

            <section className="pb-1 pt-7">
              <h2 className="title title-simple ls-m">Our Featured</h2>
              <div className="owl-carousel owl-theme row owl-nav-full cols-lg-4 cols-md-3 cols-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </section>
            <ValuesPart />

            <InstagramPart />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLanding;
