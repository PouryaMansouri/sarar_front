import React, { useEffect, useState } from "react";

import HeaderProductPage from "../../components/productPage/headerProductPage";
import { http } from "../../service/callApi/api";

function ProductPage() {
  const [dataProductPage, setDataProductPage] = useState();
  useEffect(() => {
    async function getData() {
      const responseProduct = await http.get(
        "https://sarar-mansouri.fandogh.cloud/api/products/1/"
      );

      const data = {
        product: responseProduct?.data,
      };
      setDataProductPage(data);
    }
    getData();
  }, []);

  return (
    <div className="page-wrapper">
      <HeaderProductPage />
      {/* End of Header */}
      <main className="main single-product">
        <div className="page-content mb-10">
          <div className="container-fluid">
            <div className="product-navigation">
              <ul className="breadcrumb breadcrumb-lg">
                <li>
                  <a href="demo7.html">
                    <i className="d-icon-home" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    Products
                  </a>
                </li>
                <li>Detail</li>
              </ul>
              <ul className="product-nav">
                <li className="product-nav-prev">
                  <a href="#">
                    <i className="d-icon-arrow-left" /> Prev
                    <span className="product-nav-popup">
                      <img
                        src="images/product/product-thumb-prev.jpg"
                        alt="product thumbnail"
                        width={110}
                        height={123}
                      />
                      <span className="product-name">
                        Sed egtas Dnte Comfort
                      </span>
                    </span>
                  </a>
                </li>
                <li className="product-nav-next">
                  <a href="#">
                    Next <i className="d-icon-arrow-right" />
                    <span className="product-nav-popup">
                      <img
                        src="images/product/product-thumb-next.jpg"
                        alt="product thumbnail"
                        width={110}
                        height={123}
                      />
                      <span className="product-name">
                        Sed egtas Dnte Comfort
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="row gutter-lg">
              <aside className="col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                <div className="sidebar-overlay">
                  <a className="sidebar-close" href="#">
                    <i className="d-icon-times" />
                  </a>
                </div>
                <a href="#" className="sidebar-toggle">
                  <i className="fas fa-chevron-left" />
                </a>
                <div className="sidebar-content">
                  <div className="sticky-sidebar">
                    <div className="service-list mb-4">
                      <div className="icon-box icon-box-side icon-box3">
                        <span className="icon-box-icon">
                          <i className="d-icon-secure" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Secured Payment</h4>
                          <p>We ensure secure payment!</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side icon-box1">
                        <span className="icon-box-icon">
                          <i className="d-icon-truck" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Free Shipping</h4>
                          <p>On all US orders above $99</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side icon-box2">
                        <span className="icon-box-icon">
                          <i className="d-icon-money" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Money Back guarantee
                          </h4>
                          <p>Any back within 30 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="product-banner banner banner-fixed overlay-zoom overlay-dark mb-4">
                      <figure>
                        <img
                          src="images/demos/demo7/product/banner.jpg"
                          width={280}
                          height={312}
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-price-info font-weight-bold text-white text-uppercase ls-m">
                        20-22<sup>th</sup> April
                      </div>
                      <div className="banner-content text-center mt-1">
                        <h4 className="banner-subtitle d-inline-block bg-primary text-uppercase ls-m font-weight-semi-bold text-dark mb-0">
                          Ultimate Sale
                        </h4>
                        <h3 className="banner-title ls-l text-uppercase text-white font-weight-bold mb-0">
                          Up to 70%
                        </h3>
                        <p className="mb-4 font-primary text-white lh-1 ls-m">
                          Discount Selected Items
                        </p>
                        <a
                          href="#"
                          className="btn btn-white btn-link btn-underline"
                        >
                          Shop now
                          <i className="d-icon-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="col-lg-9 col-xxl-10">
                <div className="product product-single row mb-4">
                  <div className="col-lg-7">
                    {dataProductPage?.product?.gallery && (
                      <div className="product-gallery row cols-sm-2">
                        {dataProductPage.product.gallery.map((dataProduct) => (
                          <figure className="product-image mb-4">
                            <img
                              src={dataProduct.image}
                              data-zoom-image="images/demos/demo7/product/product-1-800x900.jpg"
                              alt="Blue Pinafore Denim Dress"
                              width={800}
                              height={900}
                            />
                            <a href="#" className="product-image-full">
                              <i className="d-icon-zoom" />
                            </a>
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-5">
                    <div className="product-details">
                      <h1 className="product-name pt-lg-2">
                        {dataProductPage?.product?.name}
                      </h1>
                      <div className="product-meta mb-3">
                        SKU: <span className="product-sku">12345670</span>
                        BRAND:{" "}
                        <span className="product-brand">The Northland</span>
                      </div>
                      <div className="product-price">
                        ${dataProductPage?.product?.min_price}
                      </div>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "80%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a
                          href="#product-tab-reviews"
                          className="link-to-tab rating-reviews"
                        >
                          ( 6 reviews )
                        </a>
                      </div>
                      <p className="product-short-desc">
                        {dataProductPage?.product?.description}
                      </p>
                      <div className="product-form product-color">
                        <label>Color:</label>
                        <div className="product-variations">
                          <a
                            className="color"
                            data-src="images/demos/demo7/products/big1.jpg"
                            href="#"
                            style={{ backgroundColor: "#d99e76" }}
                          />
                          <a
                            className="color"
                            data-src="images/demos/demo7/products/2.jpg"
                            href="#"
                            style={{ backgroundColor: "#267497" }}
                          />
                          <a
                            className="color"
                            data-src="images/demos/demo7/products/3.jpg"
                            href="#"
                            style={{ backgroundColor: "#9a999d" }}
                          />
                          <a
                            className="color"
                            data-src="images/demos/demo7/products/4.jpg"
                            href="#"
                            style={{ backgroundColor: "#2b2b2b" }}
                          />
                        </div>
                      </div>
                      <div className="product-form product-size">
                        <label>Size:</label>
                        <div className="product-form-group">
                          <div className="product-variations">
                            <a className="size" href="#">
                              S
                            </a>
                            <a className="size" href="#">
                              M
                            </a>
                            <a className="size" href="#">
                              L
                            </a>
                            <a className="size" href="#">
                              XL
                            </a>
                          </div>
                          <a href="#" className="product-variation-clean">
                            Clean All
                          </a>
                        </div>
                      </div>
                      <div className="product-variation-price">
                        <span>$239.00</span>
                      </div>
                      <hr className="product-divider" />
                      <div className="product-form product-qty">
                        <div className="product-form-group">
                          <div className="input-group">
                            <button className="quantity-minus d-icon-minus" />
                            <input
                              className="quantity form-control"
                              type="number"
                              min={1}
                              max={1000000}
                            />
                            <button className="quantity-plus d-icon-plus" />
                          </div>
                          <button className="btn-product btn-cart">
                            <i className="d-icon-bag" />
                            Add To Cart
                          </button>
                        </div>
                      </div>
                      <hr className="product-divider mb-3" />
                      <div className="product-footer">
                        <div className="social-links mr-2">
                          <a
                            href="#"
                            className="social-link social-facebook fab fa-facebook-f"
                          />
                          <a
                            href="#"
                            className="social-link social-twitter fab fa-twitter"
                          />
                          <a
                            href="#"
                            className="social-link social-pinterest fab fa-pinterest-p"
                          />
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn-product btn-wishlist">
                            <i className="d-icon-heart" />
                            Add To Wishlist
                          </a>
                          <span className="divider" />
                          <a href="#" className="btn-product btn-compare">
                            <i className="d-icon-random" />
                            Add To Compare
                          </a>
                        </div>
                      </div>
                      <div className="accordion accordion-simple mb-4">
                        <div className="card border-no card-description">
                          <div className="card-header">
                            <a href="#collapse1-1" className="collapse">
                              Description
                            </a>
                          </div>
                          <div id="collapse1-1" className="card-body expanded">
                            <div className="row mt-4">
                              <div className="mb-4">
                                <h5 className="description-title mb-4 font-weight-semi-bold ls-m">
                                  Features
                                </h5>
                                <p className="mb-2">
                                  Praesent id enim sit amet.Tdio vulputate
                                  eleifend in in tortor. ellus massa. siti
                                  iMassa ristique sit amet condim vel, facilisis
                                  quimequistiqutiqu amet condim Dilisis
                                  Facilisis quis sapien. Praesent id enim sit
                                  amet.
                                </p>
                                <ul className="mb-8">
                                  <li>
                                    Praesent id enim sit amet.Tdio vulputate
                                  </li>
                                  <li>
                                    Eleifend in in tortor. ellus massa.Dristique
                                    sitii
                                  </li>
                                  <li>Massa ristique sit amet condim vel</li>
                                  <li>
                                    Dilisis Facilisis quis sapien. Praesent id
                                    enim sit amet
                                  </li>
                                </ul>
                                <h5 className="description-title mb-3 font-weight-semi-bold ls-m">
                                  Specifications
                                </h5>
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <th className="font-weight-semi-bold text-dark pl-0">
                                        Material
                                      </th>
                                      <td className="pl-4">
                                        Praesent id enim sit amet.Tdio
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="font-weight-semi-bold text-dark pl-0">
                                        Claimed Size
                                      </th>
                                      <td className="pl-4">
                                        Praesent id enim sit
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="font-weight-semi-bold text-dark pl-0">
                                        Recommended Use
                                      </th>
                                      <td className="pl-4">
                                        Praesent id enim sit amet.Tdio vulputate
                                        eleifend in in tortor. ellus massa. siti
                                      </td>
                                    </tr>
                                    <tr>
                                      <th className="font-weight-semi-bold text-dark border-no pl-0">
                                        Manufacturer
                                      </th>
                                      <td className="border-no pl-4">
                                        Praesent id enim
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div>
                                <h5 className="description-title font-weight-semi-bold ls-m mb-5">
                                  Video Description
                                </h5>
                                <figure className="p-relative d-inline-block mb-2">
                                  <img
                                    src="images/product/product.jpg"
                                    width={559}
                                    height={370}
                                    alt="Product"
                                  />
                                  <a
                                    className="btn-play btn-iframe"
                                    href="video/memory-of-a-woman.mp4"
                                  >
                                    <i className="d-icon-play-solid" />
                                  </a>
                                </figure>
                                <div className="icon-box-wrap d-flex flex-wrap">
                                  <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10">
                                    <div className="icon-box-icon">
                                      <i className="d-icon-lock" />
                                    </div>
                                    <div className="icon-box-content">
                                      <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">
                                        2 year warranty
                                      </h4>
                                      <p>Guarantee with no doubt</p>
                                    </div>
                                  </div>
                                  <div className="divider d-xl-show mr-10" />
                                  <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4">
                                    <div className="icon-box-icon">
                                      <i className="d-icon-truck" />
                                    </div>
                                    <div className="icon-box-content">
                                      <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">
                                        Free shipping
                                      </h4>
                                      <p>On orders over $50.00</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card card-additional">
                          <div className="card-header">
                            <a href="#collapse1-2" className="expand">
                              Additional information
                            </a>
                          </div>
                          <div className="card-body collapsed" id="collapse1-2">
                            <ul className="list-none">
                              <li>
                                <label>Brands:</label>
                                <p>SkillStar, SLS</p>
                              </li>
                              <li>
                                <label>Color:</label>
                                <p>Blue, Brown</p>
                              </li>
                              <li>
                                <label>Size:</label>
                                <p>Large, Medium, Small</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card card-reviews">
                          <div className="card-header">
                            <a href="#collapse1-4" className="expand">
                              Reviews (2)
                            </a>
                          </div>
                          <div className="card-body collapsed" id="collapse1-4">
                            <div className="row">
                              <div className="col-12 mb-6">
                                <div className="avg-rating-container">
                                  <mark>5.0</mark>
                                  <div className="avg-rating">
                                    <span className="avg-rating-title">
                                      Average Rating
                                    </span>
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                      <span className="rating-reviews">
                                        (2 Reviews)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="ratings-list mb-2">
                                  <div className="ratings-item">
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "100%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <div className="rating-percent">
                                      <span style={{ width: "100%" }} />
                                    </div>
                                    <div className="progress-value">100%</div>
                                  </div>
                                  <div className="ratings-item">
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top">
                                          4.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="rating-percent">
                                      <span style={{ width: "0%" }} />
                                    </div>
                                    <div className="progress-value">0%</div>
                                  </div>
                                  <div className="ratings-item">
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top">
                                          4.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="rating-percent">
                                      <span style={{ width: "0%" }} />
                                    </div>
                                    <div className="progress-value">0%</div>
                                  </div>
                                  <div className="ratings-item">
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "40%" }}
                                        />
                                        <span className="tooltiptext tooltip-top">
                                          4.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="rating-percent">
                                      <span style={{ width: "0%" }} />
                                    </div>
                                    <div className="progress-value">0%</div>
                                  </div>
                                  <div className="ratings-item">
                                    <div className="ratings-container mb-0">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "20%" }}
                                        />
                                        <span className="tooltiptext tooltip-top">
                                          4.00
                                        </span>
                                      </div>
                                    </div>
                                    <div className="rating-percent">
                                      <span style={{ width: "0%" }} />
                                    </div>
                                    <div className="progress-value">0%</div>
                                  </div>
                                </div>
                                <a
                                  className="btn btn-dark btn-rounded submit-review-toggle"
                                  href="#"
                                >
                                  Submit Review
                                </a>
                              </div>
                              <div className="col-12 comments pt-2 pb-10 border-no">
                                <nav className="toolbox">
                                  <div className="toolbox-left">
                                    <div className="toolbox-item">
                                      <a
                                        href="#"
                                        className="btn btn-outline btn-rounded"
                                      >
                                        All Reviews
                                      </a>
                                    </div>
                                    <div className="toolbox-item">
                                      <a
                                        href="#"
                                        className="btn btn-outline btn-rounded"
                                      >
                                        With Images
                                      </a>
                                    </div>
                                    <div className="toolbox-item">
                                      <a
                                        href="#"
                                        className="btn btn-outline btn-rounded"
                                      >
                                        With Videos
                                      </a>
                                    </div>
                                  </div>
                                  <div className="toolbox-right">
                                    <div className="toolbox-item toolbox-sort select-box text-dark">
                                      <label>Sort By :</label>
                                      <select
                                        name="orderby"
                                        className="form-control"
                                      >
                                        <option value>Default Order</option>
                                        <option
                                          value="newest"
                                          selected="selected"
                                        >
                                          Newest Reviews
                                        </option>
                                        <option value="oldest">
                                          Oldest Reviews
                                        </option>
                                        <option value="high_rate">
                                          Highest Rating
                                        </option>
                                        <option value="low_rate">
                                          Lowest Rating
                                        </option>
                                        <option value="most_likely">
                                          Most Likely
                                        </option>
                                        <option value="most_unlikely">
                                          Most Unlikely
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </nav>
                                <ul className="comments-list">
                                  <li>
                                    <div className="comment">
                                      <figure className="comment-media">
                                        <a href="#">
                                          <img
                                            src="images/blog/comments/1.jpg"
                                            alt="avatar"
                                          />
                                        </a>
                                      </figure>
                                      <div className="comment-body">
                                        <div className="comment-rating ratings-container">
                                          <div className="ratings-full">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                        </div>
                                        <div className="comment-user">
                                          <span className="comment-date">
                                            by{" "}
                                            <span className="font-weight-semi-bold text-uppercase text-dark">
                                              John Doe
                                            </span>{" "}
                                            on
                                            <span className="font-weight-semi-bold text-dark">
                                              Nov 22, 2018
                                            </span>
                                          </span>
                                        </div>
                                        <div className="comment-content mb-5">
                                          <p>
                                            Sed pretium, ligula sollicitudin
                                            laoreet viverra, tortor libero
                                            sodales leo, eget blandit nunc
                                            tortor eu nibh. Nullam mollis. Ut
                                            justo. Suspendisse potenti. Sed
                                            egestas, ante et vulputate volutpat,
                                            eros pede semper est, vitae luctus
                                            metus libero eu augue.
                                          </p>
                                        </div>
                                        <div className="file-input-wrappers">
                                          <img
                                            className="btn-play btn-img pwsp"
                                            src="images/products/product1.jpg"
                                            width={280}
                                            height={315}
                                            alt="product"
                                          />
                                          <img
                                            className="btn-play btn-img pwsp"
                                            src="images/products/product3.jpg"
                                            width={280}
                                            height={315}
                                            alt="product"
                                          />
                                          <a
                                            className="btn-play btn-iframe"
                                            style={{
                                              backgroundImage:
                                                "url(images/product/product.jpg)",
                                              backgroundSize: "cover",
                                            }}
                                            href="video/memory-of-a-woman.mp4"
                                          >
                                            <i className="d-icon-play-solid" />
                                          </a>
                                        </div>
                                        <div className="feeling mt-5">
                                          <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                            <i className="fa fa-thumbs-up" />
                                            Like (
                                            <span className="count">0</span>)
                                          </button>
                                          <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                            <i className="fa fa-thumbs-down" />
                                            Unlike (
                                            <span className="count">0</span>)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="comment">
                                      <figure className="comment-media">
                                        <a href="#">
                                          <img
                                            src="images/blog/comments/2.jpg"
                                            alt="avatar"
                                          />
                                        </a>
                                      </figure>
                                      <div className="comment-body">
                                        <div className="comment-rating ratings-container">
                                          <div className="ratings-full">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                        </div>
                                        <div className="comment-user">
                                          <span className="comment-date">
                                            by{" "}
                                            <span className="font-weight-semi-bold text-uppercase text-dark">
                                              John Doe
                                            </span>{" "}
                                            on
                                            <span className="font-weight-semi-bold text-dark">
                                              Nov 22, 2018
                                            </span>
                                          </span>
                                        </div>
                                        <div className="comment-content">
                                          <p>
                                            Sed pretium, ligula sollicitudin
                                            laoreet viverra, tortor libero
                                            sodales leo, eget blandit nunc
                                            tortor eu nibh. Nullam mollis. Ut
                                            justo. Suspendisse potenti. Sed
                                            egestas, ante et vulputate volutpat,
                                            eros pede semper est, vitae luctus
                                            metus libero eu augue. Morbi purus
                                            libero, faucibus adipiscing, commodo
                                            quis, avida id, est. Sed lectus.
                                            Praesent elementum hendrerit tortor.
                                            Sed semper lorem at felis.
                                            Vestibulum volutpat.
                                          </p>
                                        </div>
                                        <div className="feeling mt-5">
                                          <button className="btn btn-link btn-icon-left btn-slide-up btn-infinite like mr-2">
                                            <i className="fa fa-thumbs-up" />
                                            Like (
                                            <span className="count">0</span>)
                                          </button>
                                          <button className="btn btn-link btn-icon-left btn-slide-down btn-infinite unlike">
                                            <i className="fa fa-thumbs-down" />
                                            Unlike (
                                            <span className="count">0</span>)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <nav className="toolbox toolbox-pagination justify-content-end">
                                  <ul className="pagination">
                                    <li className="page-item disabled">
                                      <a
                                        className="page-link page-link-prev"
                                        href="#"
                                        aria-label="Previous"
                                        tabIndex={-1}
                                        aria-disabled="true"
                                      >
                                        <i className="d-icon-arrow-left" />
                                        Prev
                                      </a>
                                    </li>
                                    <li
                                      className="page-item active"
                                      aria-current="page"
                                    >
                                      <a className="page-link" href="#">
                                        1
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        2
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        3
                                      </a>
                                    </li>
                                    <li className="page-item page-item-dots">
                                      <a className="page-link" href="#">
                                        6
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a
                                        className="page-link page-link-next"
                                        href="#"
                                        aria-label="Next"
                                      >
                                        Next
                                        <i className="d-icon-arrow-right" />
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                            {/* End Comments */}
                            <div className="review-form-section">
                              <div className="review-overlay" />
                              <div className="review-form-wrapper">
                                <div className="title-wrapper text-left">
                                  <h3 className="title title-simple text-left text-normal">
                                    Add a Review
                                  </h3>
                                  <p>
                                    Your email address will not be published.
                                    Required fields are marked *
                                  </p>
                                </div>
                                <div className="rating-form">
                                  <label htmlFor="rating" className="text-dark">
                                    Your rating *
                                  </label>
                                  <span className="rating-stars selected">
                                    <a className="star-1" href="#">
                                      1
                                    </a>
                                    <a className="star-2" href="#">
                                      2
                                    </a>
                                    <a className="star-3" href="#">
                                      3
                                    </a>
                                    <a className="star-4 active" href="#">
                                      4
                                    </a>
                                    <a className="star-5" href="#">
                                      5
                                    </a>
                                  </span>
                                  <select
                                    name="rating"
                                    id="rating"
                                    required
                                    style={{ display: "none" }}
                                  >
                                    <option value>Rate…</option>
                                    <option value={5}>Perfect</option>
                                    <option value={4}>Good</option>
                                    <option value={3}>Average</option>
                                    <option value={2}>Not that bad</option>
                                    <option value={1}>Very poor</option>
                                  </select>
                                </div>
                                <form action="#">
                                  <textarea
                                    id="reply-message"
                                    cols={30}
                                    rows={6}
                                    className="form-control mb-4"
                                    placeholder="Comment *"
                                    required
                                    defaultValue={""}
                                  />
                                  <div className="review-medias">
                                    <div
                                      className="file-input form-control image-input"
                                      style={{
                                        backgroundImage:
                                          "url(images/product/placeholder.png)",
                                      }}
                                    >
                                      <div className="file-input-wrapper"></div>
                                      <label
                                        className="btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          name="riode_comment_medias_image_1"
                                        />
                                      </label>
                                      <label
                                        className="btn-action btn-remove"
                                        title="Remove Media"
                                      ></label>
                                    </div>
                                    <div
                                      className="file-input form-control image-input"
                                      style={{
                                        backgroundImage:
                                          "url(images/product/placeholder.png)",
                                      }}
                                    >
                                      <div className="file-input-wrapper"></div>
                                      <label
                                        className=" btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          name="riode_comment_medias_image_2"
                                        />
                                      </label>
                                      <label
                                        className="btn-action btn-remove"
                                        title="Remove Media"
                                      ></label>
                                    </div>
                                    <div
                                      className="file-input form-control video-input"
                                      style={{
                                        backgroundImage:
                                          "url(images/product/placeholder.png)",
                                      }}
                                    >
                                      <video
                                        className="file-input-wrapper"
                                        controls
                                      />
                                      <label
                                        className="btn-action btn-upload"
                                        title="Upload Media"
                                      >
                                        <input
                                          type="file"
                                          accept=".avi, .mp4"
                                          name="riode_comment_medias_video_1"
                                        />
                                      </label>
                                      <label
                                        className="btn-action btn-remove"
                                        title="Remove Media"
                                      ></label>
                                    </div>
                                  </div>
                                  <p>
                                    Upload images and videos. Maximum count: 3,
                                    size: 2MB
                                  </p>
                                  <button
                                    type="submit"
                                    className="btn btn-primary btn-rounded"
                                  >
                                    Submit
                                    <i className="d-icon-arrow-right" />
                                  </button>
                                </form>
                              </div>
                            </div>
                            {/* End Reply */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  <h2 className="title title-simple title-center text-capitalize mb-4">
                    Related Products
                  </h2>
                  <div className="owl-carousel owl-theme owl-nav-full row cols-2 cols-md-3 cols-lg-4">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/demos/demo7/shop/1.jpg"
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
                          <a href="demo7-shop.html">Shoes</a>
                        </div>
                        <h3 className="product-name">
                          <a href="demo7-product.html">
                            Fashion Football Boots
                          </a>
                        </h3>
                        <div className="product-price">
                          <ins className="new-price">$199.00</ins>
                          <del className="old-price">$210.00</del>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="demo7-product.html"
                            className="rating-reviews"
                          >
                            ( <span className="review-count">6</span>
                            reviews )
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/demos/demo7/shop/2.jpg"
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
                          <a href="demo7-shop.html">Shoes</a>
                        </div>
                        <h3 className="product-name">
                          <a href="demo7-product.html">
                            Fashion White Training Shoes
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="price">$35.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="demo7-product.html"
                            className="rating-reviews"
                          >
                            ( <span className="review-count">6</span>
                            reviews )
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/demos/demo7/shop/3.jpg"
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
                          <a href="demo7-shop.html">Clothing</a>
                        </div>
                        <h3 className="product-name">
                          <a href="demo7-product.html">
                            Women's Fashion Sportswear
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="price">$19.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="demo7-product.html"
                            className="rating-reviews"
                          >
                            ( <span className="review-count">6</span>
                            reviews )
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/demos/demo7/shop/4.jpg"
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
                          <a href="demo7-shop.html">Shoes</a>
                        </div>
                        <h3 className="product-name">
                          <a href="demo7-product.html">
                            Skyblue Basketball Boots
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="price">$19.00</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="demo7-product.html"
                            className="rating-reviews"
                          >
                            ( <span className="review-count">6</span>
                            reviews )
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product shadow-media text-center">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/demos/demo7/shop/5.jpg"
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
                          <a href="demo7-shop.html">categories</a>
                        </div>
                        <h3 className="product-name">
                          <a href="demo7-product.html">
                            Fashion Nike Training Shoes
                          </a>
                        </h3>
                        <div className="product-price">
                          <ins className="new-price">$98.00</ins>
                          <del className="old-price">$210.00</del>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="demo7-product.html"
                            className="rating-reviews"
                          >
                            ( <span className="review-count">6</span>
                            reviews )
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}

      {/* End of Footer */}
    </div>
  );
}

export default ProductPage;
