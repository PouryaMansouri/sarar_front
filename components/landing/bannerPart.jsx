import React from "react";

function BannerPart({ dataBaner }) {
  return (
    <section
      className="mt-10 mb-10 banner banner-sale "
      style={{
        backgroundImage: dataBaner.image,
        backgroundColor: "#1f272b",
      }}
    >
      <div className="banner-content ">
        <h4 className="mb-0 text-white banner-subtitle text-uppercase font-weight-normal lh-1 ls-m">
          {dataBaner.title}
        </h4>
        <hr className="mb-2 divider" />
        <h3 className="mb-0 text-white banner-title text-uppercase lh-1">
          Sale
        </h3>
        <div className="price-rotated">
          <div
            className="banner-price-info d-flex align-items-center justify-content-center skrollr"
            data-options='{"data-bottom-top":"transform: translate(0, 0) scale(1.6); transform-origin: center;", "data-center":"transform: translate(0, 0) scale(1);"}'
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
  );
}

export default BannerPart;
