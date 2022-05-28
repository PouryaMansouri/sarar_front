import React, { useEffect } from "react";
import ProductCardShop from "../../components/ui/productCardShop";
import { http } from "../../service/callApi/api";

function ShopPage() {
  useEffect(() => {
    async function fetchData() {
      let {data,status} = await http.get(
        "https://sarar-mansouri.fandogh.cloud/api/products/"
      );
      
    }

    fetchData();
  }, []);

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
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
              <ProductCardShop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
