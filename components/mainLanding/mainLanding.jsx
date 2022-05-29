import React from "react";
import BannerPart from "../landing/bannerPart";
import InstagramPart from "../landing/instagramPart";
import TopCategories from "../landing/topCategories";
import ValuesPart from "../landing/valuesPart";
import ProductCard from "../ui/productCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { http } from "../../service/callApi/api";

function MainLanding() {
  const [dataHeader, setDataHeader] = useState();
  useEffect(() => {
    async function getData() {
      const responseHeader = await http.get(
        "https://sarar-mansouri.fandogh.cloud/api/landing/main/"
      );
      if (responseHeader.status == 200) {
        setDataHeader(responseHeader.data);
      }
    }
    getData();
  }, []);
  return (
    <>
      <main className="main demo2-cls">
        <div className="page-content">
          <div className="container">
            {dataHeader && (
              <section className="intro-section">
                <div className="row">
                  <div className="mb-4 col-12">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                      interval={5000}
                    >
                      <div className="">
                        <img loading="lazy" src={dataHeader.image_1} alt="" />
                      </div>
                      <div className="">
                        <img loading="lazy" src={dataHeader.image_1} alt="" />
                      </div>
                      <div className="">
                        <img
                          loading="lazy"
                          src="https://links.papareact.com/7ma"
                          alt=""
                        />
                      </div>
                    </Carousel>
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
            )}
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
            {/* <TopCategories /> */}
            <BannerPart />

            <section className="pb-1 pt-7">
              <h2 className="title title-simple ls-m">Our Featured</h2>
              <div className="owl-carousel owl-theme row owl-nav-full cols-lg-4 cols-md-3 cols-2">
                {[1, 1, 1, 1].map((item, index) => (
                  <ProductCard />
                ))}
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
