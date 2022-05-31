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
import Image from "next/image";

function MainLanding({ dataLanding }) {
  // const [dataLanding, setDataLanding] = useState();
  // useEffect(() => {
  //   async function getData() {
  //     const responseHeader = await http.get(
  //       "https://sarar-mansouri.fandogh.cloud/api/landing/main/"
  //     );
  //     const responseTwoPicture = await http.get(
  //       "https://sarar-mansouri.fandogh.cloud/api/landing/main/cart/top/"
  //     );
  //     const responseBanner = await http.get(
  //       "https://sarar-mansouri.fandogh.cloud/api/landing/main/middle-banner/"
  //     );
  //     const responseListBestSelling = await http.get(
  //       "https://sarar-mansouri.fandogh.cloud/api/landing/main/best-selling-product/"
  //     );
  //     const responseListNewProduct = await http.get(
  //       "https://sarar-mansouri.fandogh.cloud/api/landing/new-product/"
  //     );
  //     const allData = {
  //       header: responseHeader?.data,
  //       twoPicture: responseTwoPicture?.data,
  //       banner: responseBanner?.data,
  //       listBestSelling: responseListBestSelling?.data,
  //       listNewProduct: responseListNewProduct?.data,
  //     };
  //     console.log("allData :>> ", allData);
  //     setDataLanding(allData);
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <main className="main demo2-cls">
        <div className="page-content">
          <div className="container">
            {dataLanding?.header && (
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
                        <Image
                          loading="lazy"
                          width={1180}
                          height={550}
                          layout="responsive"
                          src={dataLanding.header.image_1}
                          alt=""
                          placeholder="blur"
                          blurDataURL="/static/images/logo.svg"
                        />
                      </div>
                      <div className="">
                        <Image
                          loading="lazy"
                          width={1180}
                          height={550}
                          layout="responsive"
                          src={dataLanding.header.image_2}
                          alt=""
                          placeholder="blur"
                          blurDataURL="/static/images/logo.svg"
                        />
                      </div>
                    </Carousel>
                  </div>

                  {dataLanding?.twoPicture && (
                    <>
                      {dataLanding.twoPicture.map((item, index) => (
                        <div className="mb-4 col-md-6">
                          <div className="banner banner-fixed overlay-zoom intro-banner intro-banner1 content-middle ">
                            <figure>
                              <Image
                                src={item.image}
                                width={580}
                                height={249}
                                layout="responsive"
                                alt="banner"
                                style={{ backgroundColor: "#eca5a9" }}
                              />
                            </figure>
                            <div className="banner-content">
                              <h4 className="text-white banner-subtitle ls-normal text-uppercase font-weight-normal lh-1">
                                {item.title}
                              </h4>
                              <h3 className="text-white banner-title font-weight-bold ls-md">
                                {item.description}
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
                      ))}
                    </>
                  )}
                </div>
              </section>
            )}
            {dataLanding?.listBestSelling && (
              <section className="pt-3 mt-10 mb-6">
                <h2 className="title title-simple title-center ls-m">
                  Best Selling
                </h2>
                <div className="product-wrapper row">
                  {dataLanding.listBestSelling.map((item, index) => (
                    <ProductCard dataCard={item} key={index} />
                  ))}
                </div>
              </section>
            )}

            {/* <TopCategories /> */}
            {dataLanding?.banner && (
              <BannerPart dataBaner={dataLanding.banner} />
            )}
            {dataLanding?.listNewProduct && (
              <section className="pb-1 pt-7">
                <h2 className="title title-simple ls-m">Our Featured</h2>
                <div className="owl-carousel owl-theme row owl-nav-full cols-lg-4 cols-md-3 cols-2">
                  {dataLanding.listNewProduct.map((item, index) => (
                    <ProductCard dataCard={item} key={index} />
                  ))}
                </div>
              </section>
            )}

            <ValuesPart />

            <InstagramPart />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLanding;
