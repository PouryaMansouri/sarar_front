import React from "react";

function MenuNavbar({ title = "Men", url, sub }) {
  return (
    <li>
      <a href="demo2-shop.html">{title}</a>
      <div className="megamenu">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-4 col-lg-3">
            {/* <h4 className="menu-title">Variations 1</h4> */}
            <ul>
              <li>
                {[1, 1, 1, 1].map((item, index) => (
                  <a href="shop-classic-filter.html">Classic Filter</a>
                ))}
              </li>
            </ul>
          </div>
          {/* End Megamenu */}
        </div>
      </div>
    </li>
  );
}

export default MenuNavbar;
