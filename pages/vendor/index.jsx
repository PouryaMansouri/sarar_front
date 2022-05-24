import React from 'react'

function VendorPage() {
  return (
    <main class="main">
            <div class="page-content mb-10">
                <div class="container">
                    <nav class="breadcrumb-nav">
                        <ul class="breadcrumb">
                            <li><a href="market1.html"><i class="d-icon-home"></i></a></li>
                            <li><a href="store-listing.html">Store</a></li>
                            <li>vendor1</li>
                        </ul>
                    </nav>
                    <div class="row gutter-lg">
                        <aside class="col-xl-3 col-lg-4 sidebar left-sidebar sidebar-fixed sticky-sidebar-wrapper">
                            <div class="sidebar-overlay"></div>
                            <a class="sidebar-close" href="#"><i class="d-icon-times"></i></a>
                            <a href="#" class="sidebar-toggle"><i class="fas fa-chevron-right"></i></a>
                            <div class="sidebar-content">
                                <div class="sticky-sidebar">
                                    <div class="widget widget-collapsible">
                                        <h2 class="widget-title">Store Product Category</h2>
                                        <ul class="widget-body filter-items search-ul">
                                            <li>
                                                <a href="#">Speakers</a>
                                                <ul>
                                                    <li><a href="#">5G</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Clothing &amp; Apparal</a></li>
                                            <li>
                                                <a href="#">SmartPhone</a>
                                                <ul>
                                                    <li><a href="#">Samsung</a></li>
                                                    <li><a href="#">Arcade1UP</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Healthy &amp; Beauty</a></li>
                                            <li><a href="#">Watches &amp; Accessories</a></li>
                                            <li><a href="#">Home Audio &amp; Accessories</a></li>
                                            <li><a href="#">Office Computers</a></li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Game Consoles</a></li>
                                            <li><a href="#">Rice Cooker</a></li>
                                        </ul>
                                    </div>
                                    <div class="widget widget-collapsible widget-contact-vendor">
                                        <h3 class="widget-title">Contact Vendor</h3>
                                        <div class="widget-body">
                                            <input type="text" class="form-control" id="name" name="name"
                                                placeholder="Your Name" required="">
                                            <input type="text" class="form-control" id="address" name="address"
                                                placeholder="you@example.com" required="">
                                            <textarea id="message" cols="30" rows="6" class="form-control"
                                                placeholder="Type your message..." required=""></textarea>
                                            <a href="#" class="btn btn-dark btn-rounded">Send Message</a>
                                        </div>
                                    </div>
                                    <div class="widget widget-collapsible">
                                        <h2 class="widget-title">Store Time</h2>
                                        <ul class="widget-body widget-store-time">
                                            <li>
                                                <label>Sunday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Monday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Tuesday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Wednesday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Thursday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Friday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                            <li>
                                                <label>Saturday</label><span>6:00 am - 10:00 pm</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="widget widget-collapsible">
                                        <h2 class="widget-title">Best Selling Product</h2>
                                        <div class="widget-body mt-2 mb-6">
                                            <div class="product product-list-sm">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/5.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Fashionable Pro
                                                            Hairdye Black</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <ins class="new-price">$36.00</ins><del
                                                            class="old-price">$210.00</del>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:100%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product product-list-sm">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/9.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Processed Foodstuffs
                                                        </a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <span class="price">$25.00</span>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:60%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product product-list-sm mb-0">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/6.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Fashionable Hand
                                                            Bag</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <ins class="new-price">$198.00</ins><del
                                                            class="old-price">$270.00</del>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:100%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget widget-collapsible">
                                        <h2 class="widget-title">Top Rated Product</h2>
                                        <div class="widget-body mt-2">
                                            <div class="product product-list-sm">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/5.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Fashionable Pro
                                                            Hairdye Black</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <ins class="new-price">$36.00</ins><del
                                                            class="old-price">$210.00</del>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:100%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product product-list-sm">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/9.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Processed Foodstuffs
                                                        </a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <span class="price">$25.00</span>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:60%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product product-list-sm mb-0">
                                                <figure class="product-media">
                                                    <a href="market1-product.html">
                                                        <img src="images/demos/demo-market1/product/6.jpg" alt="product"
                                                            width="165" height="184">
                                                    </a>
                                                </figure>
                                                <div class="product-details">
                                                    <h3 class="product-name">
                                                        <a href="market1-product.html">Fashionable Hand
                                                            Bag</a>
                                                    </h3>
                                                    <div class="product-price">
                                                        <ins class="new-price">$198.00</ins><del
                                                            class="old-price">$270.00</del>
                                                    </div>
                                                    <div class="ratings-container">
                                                        <div class="ratings-full">
                                                            <span class="ratings" style="width:100%"></span>
                                                            <span class="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="market1-product.html" class="rating-reviews">( 6
                                                            reviews )</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div class="col-xl-9 col-lg-8 main-content">
                            <div class="vendor-store-banner banner banner-fixed banner-radius">
                                <figure>
                                    <img src="images/vendor/store/7.jpg" alt="Vendor" width="1030" height="500" />
                                </figure>
                                <div class="vendor-store-content banner-content">
                                    <figure>
                                        <img src="images/vendor/store/vendor.png" alt="Vendor avatar" width="80"
                                            height="80" />
                                    </figure>
                                    <h2 class="vendor-store-title">Sterling Captial Group</h2>
                                    <ul>
                                        <li>
                                            <i class="d-icon-map"></i>
                                            <span class="street"> Steven Street,</span>
                                            <span class="city"> El Carjon,</span>
                                            <span class="state"> California,</span>
                                            <span class="country"> United States (US) </span>
                                        </li>
                                        <li>
                                            <i class="d-icon-phone"></i>
                                            <a href="tel:123456789">123456789</a>
                                        </li>
                                        <li>
                                            <i class="d-icon-star-full"></i>
                                            <span>4.67 rating from 9 reviews</span>
                                        </li>
                                        <li>
                                            <i class="d-icon-bag"></i>
                                            <span>Store Open</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row product-wrapper cols-xl-3 cols-lg-3 cols-md-3 cols-2 mt-6">
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/10.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Electronics</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Blutooth Keyboard</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$98.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 6 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/11.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Electronics</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Professional Pixel Camera</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$210.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 6 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/18.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Bags</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Professional Pixel Camera</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$198.00</ins><del class="old-price">$210.00</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:80%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 9 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/19.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Clothing</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Women’s Original Trucker</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$98.00</ins><del class="old-price">$120.00</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 2 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/20.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Shoes</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Bule Training Shoes</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$68.00</ins><del class="old-price">$80.00</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:40%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 5 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/33.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Grocery</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Protective Foods</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$101.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 5 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/27.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Grocery</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Cups of Tea</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$68.00</ins><del class="old-price">$75.00</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 5 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/24.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Clothing</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Fashionable Hooded Coat</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$96.00</ins><del class="old-price">$134.05</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:80%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 9 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/15.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Electronics</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Apple Super Notecom</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$990.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 3 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/31.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Grocery</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Wholesome Food Walnut</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$100.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:100%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 10 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/23.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Clothing</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Fashionable Blue Towel</a>
                                            </h4>
                                            <div class="product-price">
                                                <ins class="new-price">$23.00</ins><del class="old-price">$41.05</del>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 8 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-wrap">
                                    <div class="product">
                                        <figure class="product-media">
                                            <a href="market1-product.html">
                                                <img src="images/demos/demo-market1/product/17.jpg" alt="Product"
                                                    width="238" height="267" />
                                            </a>
                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-cart" data-toggle="modal"
                                                    data-target="#addCartModal" title="Add to cart"><i
                                                        class="d-icon-bag"></i></a>
                                                <a href="#" class="btn-product-icon btn-wishlist"
                                                    title="Add to wishlist"><i class="d-icon-heart"></i></a>
                                                <a href="#" class="btn-product-icon btn-compare" title="Compare">
                                                    <i class="d-icon-compare"></i>
                                                </a>
                                            </div>
                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-quickview" title="Quick View">Quick
                                                    View</a>
                                            </div>
                                        </figure>
                                        <div class="product-details">
                                            <div class="product-cat">
                                                <a href="shop-grid-3col.html">Electronics</a>
                                            </div>
                                            <h4 class="product-name">
                                                <a href="market1-product.html">Fashionable Smart Speaker</a>
                                            </h4>
                                            <div class="product-price">
                                                <span class="price">$500.00</span>
                                            </div>
                                            <div class="ratings-container">
                                                <div class="ratings-full">
                                                    <span class="ratings" style="width:60%"></span>
                                                    <span class="tooltiptext tooltip-top"></span>
                                                </div>
                                                <a href="market1-product.html" class="rating-reviews">( 8 reviews )</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav class="toolbox justify-content-center">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                        <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1"
                                            aria-disabled="true">
                                            <i class="d-icon-arrow-left"></i>Prev
                                        </a>
                                    </li>
                                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link page-link-next" href="#" aria-label="Next">
                                            Next<i class="d-icon-arrow-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </main>
  )
}

export default VendorPage