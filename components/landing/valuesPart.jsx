import React from "react";

function ValuesPart() {
  const Item = ({ tilte, explain }) => {
    return (
      <>
        <div className="icon-box ">
          <div className="icon-box-content">
            <h3 className="mb-0 icon-box-title font-weight-bold text-capitalize ls-normal">
              Free delivery
            </h3>
            <p className="text-primary">When You Spend $80 or More</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <section className="mt-10 service-list">
      <div className="owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
        <Item tilte="Free delivery" explain="When You Spend $80 or More" />
        <Item tilte="Tracked delivery" explain="Only $6 Standard 6-10 Days" />
        <Item
          tilte="Need it in a hurry"
          explain="You can Express Shipping in 5 Days"
        />
        <Item
          tilte="30 - Day returns"
          explain="Return Most Items Within 30 Days"
        />
      </div>
    </section>
  );
}

export default ValuesPart;
