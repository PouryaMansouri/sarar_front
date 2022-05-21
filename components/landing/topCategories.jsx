import React from "react";

function TopCategories() {
  return (
    <>
      <section
        className="pt-md-2 pb-md-6 category-section "
        data-animation-options="{'name': 'fadeIn'}"
      >
        <h2 className="title title-simple ls-m">Top Categories</h2>
        <div className="grid row" style={{ position: "relative" }}>
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
          <div
            className="grid-item col-sm-6 height-x1"
            style={{ position: "absolute", left: "49.9922%", top: "0" }}
          >
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

          <div
            className="grid-item col-sm-6 height-x1"
            style={{ position: "absolute", left: "49.9922%", top: "300px" }}
          >
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
    </>
  );
}

export default TopCategories;
