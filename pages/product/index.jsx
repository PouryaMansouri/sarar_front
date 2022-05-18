import React from "react";

function ProductPage() {
  return (
    <div className="page-wrapper">
      <h1 className="d-none">Riode - Responsive eCommerce HTML Template</h1>
      <header className="header">
        <div className="header-middle sticky-header fix-top sticky-content">
          <div className="container-fluid">
            <div className="header-left">
              <a href="#" className="mobile-menu-toggle">
                <i className="d-icon-bars2" />
              </a>
              <a href="demo7.html" className="logo">
                <img
                  src="images/demos/demo7/logo.png"
                  alt="logo"
                  width={154}
                  height={43}
                />
              </a>
              {/* End of Logo */}
            </div>
            <div className="header-center">
              <nav className="main-nav ml-0 mr-0">
                <ul className="menu">
                  <li>
                    <a href="demo7.html">Home</a>
                  </li>
                  <li>
                    <a href="demo7-shop.html">Categories</a>
                    <div className="megamenu">
                      <div className="row">
                        <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                          <h4 className="menu-title">Variations 1</h4>
                          <ul>
                            <li>
                              <a href="shop-classic-filter.html">
                                Classic Filter
                              </a>
                            </li>
                            <li>
                              <a href="shop-left-toggle-sidebar.html">
                                Left Toggle Filter
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-toggle-sidebar.html">
                                Right Toggle Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-horizontal-filter.html">
                                Horizontal Filter{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-navigation-filter.html">
                                Navigation Filter
                              </a>
                            </li>
                            <li>
                              <a href="shop-off-canvas-filter.html">
                                Off-Canvas Filter{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-top-banner.html">Top Banner</a>
                            </li>
                            <li>
                              <a href="shop-inner-top-banner.html">
                                Inner Top Banner
                              </a>
                            </li>
                            <li>
                              <a href="shop-with-bottom-block.html">
                                With Bottom Block
                              </a>
                            </li>
                            <li>
                              <a href="shop-category-in-page-header.html">
                                Category In Page Header
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                          <h4 className="menu-title">Variations 2</h4>
                          <ul>
                            <li>
                              <a href="shop-grid-3cols.html">3 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-4cols.html">4 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-5cols.html">5 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-6cols.html">6 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-7cols.html">7 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-grid-8cols.html">8 Columns Mode</a>
                            </li>
                            <li>
                              <a href="shop-list-mode.html">List Mode</a>
                            </li>
                            <li>
                              <a href="shop-pagination.html">Pagination</a>
                            </li>
                            <li>
                              <a href="shop-infinite-ajaxscroll.html">
                                Infinite Ajaxscroll{" "}
                              </a>
                            </li>
                            <li>
                              <a href="shop-loadmore-button.html">
                                Loadmore Button
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                          <h4 className="menu-title">Variations 3</h4>
                          <ul>
                            <li>
                              <a href="shop-category-grid-shop.html">
                                Category Grid Shop
                              </a>
                            </li>
                            <li>
                              <a href="shop-category+products.html">
                                Category + Products
                              </a>
                            </li>
                            <li>
                              <a href="shop-default-1.html">Shop Default 1 </a>
                            </li>
                            <li>
                              <a href="shop-default-2.html">Shop Default 2</a>
                            </li>
                            <li>
                              <a href="shop-default-3.html">Shop Default 3</a>
                            </li>
                            <li>
                              <a href="shop-default-4.html">Shop Default 4</a>
                            </li>
                            <li>
                              <a href="shop-default-5.html">Shop Default 5</a>
                            </li>
                            <li>
                              <a href="shop-default-6.html">Shop Default 6</a>
                            </li>
                            <li>
                              <a href="shop-default-7.html">Shop Default 7</a>
                            </li>
                            <li>
                              <a href="shop-default-8.html">Shop Default 8</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-3 menu-banner menu-banner1 banner banner-fixed">
                          <figure>
                            <img
                              src="images/menu/banner-1.jpg"
                              alt="Menu banner"
                              width={221}
                              height={330}
                            />
                          </figure>
                          <div className="banner-content y-50">
                            <h4 className="banner-subtitle font-weight-bold text-primary ls-m">
                              Sale.
                            </h4>
                            <h3 className="banner-title font-weight-bold">
                              <span className="text-uppercase">Up to</span>70%
                              Off
                            </h3>
                            <a href="#" className="btn btn-link btn-underline">
                              shop now
                              <i className="d-icon-arrow-right" />
                            </a>
                          </div>
                        </div>
                        {/* End of Megamenu */}
                      </div>
                    </div>
                  </li>
                  {/* End of Dropdown */}
                  <li className="active">
                    <a href="demo7-product.html">Products</a>
                    <div className="megamenu">
                      <div className="row">
                        <div className="col-6 col-sm-4 col-md-3">
                          <h4 className="menu-title">Product Pages</h4>
                          <ul>
                            <li>
                              <a href="product-simple.html">Simple Product</a>
                            </li>
                            <li>
                              <a href="product-featured.html">
                                Featured &amp; On Sale
                              </a>
                            </li>
                            <li>
                              <a href="product.html">Variable Product</a>
                            </li>
                            <li>
                              <a href="product-variable-swatch.html">
                                Variation Swatch Product
                              </a>
                            </li>
                            <li>
                              <a href="product-grouped.html">
                                Grouped Product{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-external.html">
                                External Product
                              </a>
                            </li>
                            <li>
                              <a href="product-in-stock.html">
                                In Stock Product
                              </a>
                            </li>
                            <li>
                              <a href="product-out-stock.html">
                                Out of Stock Product
                              </a>
                            </li>
                            <li>
                              <a href="product-upsell.html">Upsell Products</a>
                            </li>
                            <li>
                              <a href="product-cross-sell.html">
                                Cross Sell Products
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <h4 className="menu-title">Product Layouts</h4>
                          <ul>
                            <li>
                              <a href="product-vertical.html">Vertical Thumb</a>
                            </li>
                            <li>
                              <a href="product-horizontal.html">
                                Horizontal Thumb
                              </a>
                            </li>
                            <li>
                              <a href="product-gallery.html">Gallery Type</a>
                            </li>
                            <li>
                              <a href="product-grid.html">Grid Images</a>
                            </li>
                            <li>
                              <a href="product-masonry.html">Masonry Images</a>
                            </li>
                            <li>
                              <a href="product-sticky.html">Sticky Info</a>
                            </li>
                            <li>
                              <a href="product-sticky-both.html">
                                Left &amp; Right Sticky
                              </a>
                            </li>
                            <li>
                              <a href="product-left-sidebar.html">
                                With Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-right-sidebar.html">
                                With Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="product-full.html">Full Width Layout </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3">
                          <h4 className="menu-title">Product Features</h4>
                          <ul>
                            <li>
                              <a href="product-sale.html">Sale Countdown</a>
                            </li>
                            <li>
                              <a href="product-hurryup.html">
                                Hurry Up Notification{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-attribute-guide.html">
                                Attribute Guide{" "}
                              </a>
                            </li>
                            <li>
                              <a href="product-sticky-cart.html">
                                Add Cart Sticky
                              </a>
                            </li>
                            <li>
                              <a href="product-thumbnail-label.html">
                                Labels on Thumbnail
                              </a>
                            </li>
                            <li>
                              <a href="product-more-description.html">
                                More Description Tabs
                              </a>
                            </li>
                            <li>
                              <a href="product-accordion-data.html">
                                Data In Accordion
                              </a>
                            </li>
                            <li>
                              <a href="product-tabinside.html">Data Inside</a>
                            </li>
                            <li>
                              <a href="product-video.html">Video Thumbnail </a>
                            </li>
                            <li>
                              <a href="product-360-degree.html">
                                360 Degree Thumbnail{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 menu-banner menu-banner2 banner banner-fixed">
                          <figure>
                            <img
                              src="images/menu/banner-2.jpg"
                              alt="Menu banner"
                              width={221}
                              height={330}
                            />
                          </figure>
                          <div className="banner-content x-50 text-center">
                            <h3 className="banner-title text-white text-uppercase">
                              Sunglasses
                            </h3>
                            <h4 className="banner-subtitle font-weight-bold text-white mb-0">
                              $23.00 - $120.00
                            </h4>
                          </div>
                        </div>
                        {/* End MegaMenu */}
                      </div>
                    </div>
                  </li>
                  {/* End of Dropdown */}
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about-us.html">About</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="account.html">My Account</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="error-404.html">Error 404</a>
                        <ul>
                          <li>
                            <a href="error-404.html">Error 404-1</a>
                          </li>
                          <li>
                            <a href="error-404-1.html">Error 404-2</a>
                          </li>
                          <li>
                            <a href="error-404-2.html">Error 404-3</a>
                          </li>
                          <li>
                            <a href="error-404-3.html">Error 404-4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                    </ul>
                  </li>
                  {/* End of Dropdown */}
                  <li>
                    <a href="blog-classic.html">Blog</a>
                    <ul>
                      <li>
                        <a href="blog-classic.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-listing.html">Listing</a>
                      </li>
                      <li>
                        <a href="#">Grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid-2col.html">Grid 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-3col.html">Grid 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-4col.html">Grid 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2col.html">
                              Masonry 2 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-3col.html">
                              Masonry 3 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-4col.html">
                              Masonry 4 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">
                              Masonry sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">Blog mask grid</a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">
                              Blog mask masonry
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="post-single.html">Single Post</a>
                      </li>
                    </ul>
                  </li>
                  {/* End of Dropdown */}
                  <li>
                    <a href="element.html">Elements</a>
                    <div className="megamenu">
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="menu-title">Elements 1</h4>
                          <ul>
                            <li>
                              <a href="element-accordions.html">Accordions</a>
                            </li>
                            <li>
                              <a href="element-alerts.html">
                                Alert &amp; Notification
                              </a>
                            </li>
                            <li>
                              <a href="element-banner-effect.html">
                                Banner Effect
                              </a>
                            </li>
                            <li>
                              <a href="element-banner.html">Banner</a>
                            </li>
                            <li>
                              <a href="element-blog-posts.html">Blog Posts</a>
                            </li>
                            <li>
                              <a href="element-breadcrumb.html">Breadcrumb</a>
                            </li>
                            <li>
                              <a href="element-buttons.html">Buttons</a>
                            </li>
                            <li>
                              <a href="element-cta.html">Call to Action</a>
                            </li>
                            <li>
                              <a href="element-countdown.html">Countdown</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title">Elements 2</h4>
                          <ul>
                            <li>
                              <a href="element-counter.html">Counter </a>
                            </li>
                            <li>
                              <a href="element-creative-grid.html">
                                Creative Grid
                              </a>
                            </li>
                            <li>
                              <a href="element-animation.html">
                                Entrance Effect
                              </a>
                            </li>
                            <li>
                              <a href="element-floating.html">Floating</a>
                            </li>
                            <li>
                              <a href="element-hotspot.html">Hotspot</a>
                            </li>
                            <li>
                              <a href="element-icon-boxes.html">Icon Boxes</a>
                            </li>
                            <li>
                              <a href="element-icons.html">Icons</a>
                            </li>
                            <li>
                              <a href="element-image-box.html">Image box</a>
                            </li>
                            <li>
                              <a href="element-instagrams.html">Instagrams</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title">Elements 3</h4>
                          <ul>
                            <li>
                              <a href="element-categories.html">
                                Product Category
                              </a>
                            </li>
                            <li>
                              <a href="element-products.html">Products</a>
                            </li>
                            <li>
                              <a href="element-product-banner.html">
                                Products + Banner
                              </a>
                            </li>
                            <li>
                              <a href="element-product-grid.html">
                                Products + Grid
                              </a>
                            </li>
                            <li>
                              <a href="element-product-single.html">
                                Product Single
                              </a>
                            </li>
                            <li>
                              <a href="element-product-tab.html">
                                Products + Tab
                              </a>
                            </li>
                            <li>
                              <a href="element-single-product.html">
                                Single Product
                              </a>
                            </li>
                            <li>
                              <a href="element-slider.html">Slider</a>
                            </li>
                            <li>
                              <a href="element-social-link.html">
                                Social Icons{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title">Elements 4</h4>
                          <ul>
                            <li>
                              <a href="element-subcategory.html">Subcategory</a>
                            </li>
                            <li>
                              <a href="element-svg-floating.html">
                                Svg Floating
                              </a>
                            </li>
                            <li>
                              <a href="element-tabs.html">Tabs</a>
                            </li>
                            <li>
                              <a href="element-testimonials.html">
                                Testimonials
                              </a>
                            </li>
                            <li>
                              <a href="element-titles.html">Title</a>
                            </li>
                            <li>
                              <a href="element-typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="element-vendor.html">Vendor</a>
                            </li>
                            <li>
                              <a href="element-video.html">Video</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* End of Dropdown */}
                  <li>
                    <a href="https://d-themes.com/buynow/riodehtml">
                      Buy Riode!
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End of Divider */}
            </div>
            <div className="header-right">
              <div className="header-search hs-toggle">
                <a href="#" className="search-toggle">
                  <i className="d-icon-search" />
                </a>
                <form action="#" className="input-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    autoComplete="off"
                    placeholder="Search your keyword..."
                    required
                  />
                  <button className="btn btn-search" type="submit">
                    <i className="d-icon-search" />
                  </button>
                </form>
              </div>
              {/* End of Header Search */}
              <a
                className="login-link"
                href="ajax/login.html"
                data-toggle="login-modal"
              >
                <i className="d-icon-user" />
              </a>
              <div className="dropdown wishlist wishlist-dropdown off-canvas mr-4 d-lg-show">
                <a href="wishlist.html" className="wishlist-toggle">
                  <i className="d-icon-heart" />
                </a>
                <div className="canvas-overlay" />
                {/* End Wishlist Toggle */}
                <div className="dropdown-box scrollable">
                  <div className="canvas-header">
                    <h4 className="canvas-title">wishlist</h4>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-icon-right btn-close"
                    >
                      close
                      <i className="d-icon-arrow-right" />
                      <span className="sr-only">wishlist</span>
                    </a>
                  </div>
                  <div className="products scrollable">
                    <div className="product product-wishlist">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/wishlist/product-1.jpg"
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                          <span className="sr-only">Close</span>
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="product.html" className="product-name">
                          Girl's Dark Bag
                        </a>
                        <div className="price-box">
                          <span className="product-price">$84.00</span>
                        </div>
                      </div>
                    </div>
                    {/* End of wishlist Product */}
                    <div className="product product-wishlist">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/wishlist/product-2.jpg"
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                          <span className="sr-only">Close</span>
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="product.html" className="product-name">
                          Women's Fashional Comforter
                        </a>
                        <div className="price-box">
                          <span className="product-price">$84.00</span>
                        </div>
                      </div>
                    </div>
                    {/* End of wishlist Product */}
                    <div className="product product-wishlist">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/wishlist/product-3.jpg"
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                          <span className="sr-only">Close</span>
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="product.html" className="product-name">
                          Wide Knickerbockers
                        </a>
                        <div className="price-box">
                          <span className="product-price">$84.00</span>
                        </div>
                      </div>
                    </div>
                    {/* End of wishlist Product */}
                  </div>
                  <a
                    href="wishlist.html"
                    className="btn btn-dark wishlist-btn mt-4"
                  >
                    <span>Go To Wishlist</span>
                  </a>
                  {/* End of Products  */}
                </div>
                {/* End Dropdown Box */}
              </div>
              <div className="dropdown cart-dropdown type2 mr-0 mr-lg-2">
                <a href="#" className="cart-toggle link">
                  <i className="d-icon-bag">
                    <span className="cart-count">2</span>
                  </i>
                </a>
                {/* End Cart Toggle */}
                <div className="dropdown-box">
                  <div className="products scrollable">
                    <div className="product product-cart">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/cart/product-1.jpg"
                            alt="product"
                            width={80}
                            height={88}
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="demo7-product.html" className="product-name">
                          Riode White Trends
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$21.00</span>
                        </div>
                      </div>
                    </div>
                    {/* End of Cart Product */}
                    <div className="product product-cart">
                      <figure className="product-media">
                        <a href="demo7-product.html">
                          <img
                            src="images/cart/product-2.jpg"
                            alt="product"
                            width={80}
                            height={88}
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="demo7-product.html" className="product-name">
                          Dark Blue Women’s Leomora Hat
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$118.00</span>
                        </div>
                      </div>
                    </div>
                    {/* End of Cart Product */}
                  </div>
                  {/* End of Products  */}
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">$139.00</span>
                  </div>
                  {/* End of Cart Total */}
                  <div className="cart-action">
                    <a href="cart.html" className="btn btn-dark btn-link">
                      View Cart
                    </a>
                    <a href="checkout.html" className="btn btn-dark">
                      <span>Go To Checkout</span>
                    </a>
                  </div>
                  {/* End of Cart Action */}
                </div>
                {/* End Dropdown Box */}
              </div>
            </div>
          </div>
        </div>
      </header>
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
                    <div className="product-gallery row cols-sm-2">
                      <figure className="product-image mb-4">
                        <img
                          src="images/demos/demo7/product/product-1-580x580.jpg"
                          data-zoom-image="images/demos/demo7/product/product-1-800x900.jpg"
                          alt="Blue Pinafore Denim Dress"
                          width={800}
                          height={900}
                        />
                        <a href="#" className="product-image-full">
                          <i className="d-icon-zoom" />
                        </a>
                      </figure>
                      <figure className="product-image mb-4">
                        <img
                          src="images/demos/demo7/product/product-2-580x580.jpg"
                          data-zoom-image="images/demos/demo7/product/product-2-800x900.jpg"
                          alt="Blue Pinafore Denim Dress"
                          width={800}
                          height={900}
                        />
                        <a href="#" className="product-image-full">
                          <i className="d-icon-zoom" />
                        </a>
                      </figure>
                      <figure className="product-image mb-4">
                        <img
                          src="images/demos/demo7/product/product-3-580x580.jpg"
                          data-zoom-image="images/demos/demo7/product/product-3-800x900.jpg"
                          alt="Blue Pinafore Denim Dress"
                          width={800}
                          height={900}
                        />
                        <a href="#" className="product-image-full">
                          <i className="d-icon-zoom" />
                        </a>
                      </figure>
                      <figure className="product-image mb-4">
                        <img
                          src="images/demos/demo7/product/product-4-580x580.jpg"
                          data-zoom-image="images/demos/demo7/product/product-4-800x900.jpg"
                          alt="Blue Pinafore Denim Dress"
                          width={800}
                          height={900}
                        />
                        <a href="#" className="product-image-full">
                          <i className="d-icon-zoom" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="product-details">
                      <h1 className="product-name pt-lg-2">
                        Desde 1979 Running Trainer
                      </h1>
                      <div className="product-meta mb-3">
                        SKU: <span className="product-sku">12345670</span>
                        BRAND:{" "}
                        <span className="product-brand">The Northland</span>
                      </div>
                      <div className="product-price">$139.00</div>
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
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Morbi
                        purus liberpuro ate vol faucibus adipiscing. Sed lectus
                        te.
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
      <footer
        className="footer appear-animate"
        data-animation-options="{ 'delay': '.2s' }"
      >
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget-about">
                  <a href="demo7.html" className="logo-footer mb-5">
                    <img
                      src="images/demos/demo7/footer-logo.png"
                      alt="logo-footer"
                      width={154}
                      height={43}
                    />
                  </a>
                  <div className="widget-body">
                    <p>
                      Fringilla urna porttitor rhoncus dolor purus
                      <br />
                      luctus venenatis lectus magna fringilla diam
                      <br />
                      maecenas ultricies mi eget mauris.
                    </p>
                    <a href="mailto:mail@riode.com">Riode@example.com</a>
                  </div>
                </div>
                {/* End of Widget */}
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Account</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="account.html">My Account</a>
                    </li>
                    <li>
                      <a href="#">Our Guarantees</a>
                    </li>
                    <li>
                      <a href="#">Terms And Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Intellectual Property Claims</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
                {/* End of Widget */}
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="widget mb-6 mb-sm-0">
                  <h4 className="widget-title">Get Help</h4>
                  <ul className="widget-body">
                    <li>
                      <a href="#">Shipping &amp; Delivery</a>
                    </li>
                    <li>
                      <a href="#">Order Status</a>
                    </li>
                    <li>
                      <a href="#">Brand</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Payment Options</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                {/* End of Widget */}
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title text-normal">
                    Subscribe to Our Newsletter
                  </h4>
                  <div className="widget-body widget-newsletter">
                    <form
                      action="#"
                      className="input-wrapper input-wrapper-inline"
                    >
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email address here..."
                        required
                      />
                      <button
                        className="btn btn-primary btn-sm btn-icon-right btn-rounded"
                        type="submit"
                      >
                        subscribe
                        <i className="d-icon-arrow-right" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="footer-info">
                  <figure className="payment">
                    <img
                      src="images/demos/demo4/payment.png"
                      alt="payment"
                      width={135}
                      height={24}
                    />
                  </figure>
                  <div className="social-links">
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
                      className="social-link social-linkedin fab fa-linkedin-in"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of FooterMiddle */}
        <div className="footer-bottom d-block text-center">
          <p className="copyright">
            Riode eCommerce © 2021. All Rights Reserved
          </p>
        </div>
        {/* End of FooterBottom */}
      </footer>
      {/* End of Footer */}
    </div>
  );
}

export default ProductPage;
