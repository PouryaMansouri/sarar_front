import Image from "next/image";
import React from "react";
import MainMenu from "../mainMenu/mainMenu";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">Welcome to Sarar From UAE!</p>
            </div>
            <div className="header-right">
              <div className="dropdown">
                <a href="#currency">USD</a>
                <ul className="dropdown-box">
                  <li>
                    <a href="#USD">USD</a>
                  </li>
                  <li>
                    <a href="#EUR">EUR</a>
                  </li>
                </ul>
              </div>
              {/* End DropDown Menu */}
              <div className="ml-5 dropdown">
                <a href="#language">ENG</a>
                <ul className="dropdown-box">
                  <li>
                    <a href="#USD">ENG</a>
                  </li>
                  <li>
                    <a href="#EUR">FRH</a>
                  </li>
                </ul>
              </div>
              {/* End DropDown Menu */}
              <span className="divider" />
              <a href="contact-us.html" className="contact d-lg-show">
                <i className="d-icon-map" />
                Contact
              </a>
              <a href="#" className="help d-lg-show">
                <i className="d-icon-info" /> Need Help
              </a>
              <a
                className="login-link"
                href="ajax/login.html"
                data-toggle="login-modal"
              >
                <i className="d-icon-user" />
                Sign in
              </a>
              <span className="delimiter">/</span>
              <a
                className="ml-0 register-link"
                href="ajax/login.html"
                data-toggle="login-modal"
              >
                Register
              </a>
              {/* End of Login */}
            </div>
          </div>
        </div>
        {/* End HeaderTop */}
        <div className="header-middle sticky-header fix-top sticky-content">
          <div className="container">
            <div className="header-left">
              <a href="#" className="mobile-menu-toggle">
                <i className="d-icon-bars2" />
              </a>
              <a href="demo2.html" className="logo">
                <Image
                  layout="fixed"
                  height={44}
                  width={153}
                  src="/static/images/logo.svg"
                  alt="logo"
                />
                {/* <img
                  src="images/demos/demo2/logo.png"
                  alt="logo"
                  width={153}
                  height={44}
                /> */}
              </a>
              {/* End Logo */}
              <div className="header-search hs-simple">
                <form action="#" className="input-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    autoComplete="off"
                    placeholder="Search..."
                    required
                  />
                  <button
                    className="btn btn-search"
                    type="submit"
                    title="submit-button"
                  >
                    <i className="d-icon-search" />
                  </button>
                </form>
              </div>
              {/* End Header Search */}
            </div>
            <div className="header-right">
              <a href="tel:#" className="icon-box icon-box-side">
                <div className="mr-0 icon-box-icon mr-lg-2">
                  <i className="d-icon-phone" />
                </div>
                <div className="icon-box-content d-lg-show">
                  <h4 className="icon-box-title">Call Us Now:</h4>
                  <p>0(800) 123-456</p>
                </div>
              </a>
              <span className="divider" />
              <div className="dropdown wishlist wishlist-dropdown off-canvas">
                <a
                  href="wishlist.html"
                  className="wishlist-toggle"
                  title="wishlist"
                >
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
                    className="mt-4 btn btn-dark wishlist-btn"
                  >
                    <span>Go To Wishlist</span>
                  </a>
                  {/* End of Products  */}
                </div>
                {/* End Dropdown Box */}
              </div>
              <span className="divider" />
              <div className="mr-0 dropdown cart-dropdown type2 mr-lg-2">
                <a href="#" className="cart-toggle label-block link">
                  <div className="cart-label d-lg-show">
                    <span className="cart-name">Shopping Cart:</span>
                    <span className="cart-price">$0.00</span>
                  </div>
                  <i className="d-icon-bag">
                    <span className="cart-count">2</span>
                  </i>
                </a>
                <div className="dropdown-box">
                  <div className="products scrollable">
                    <div className="product product-cart">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="images/cart/product-1.jpg"
                            alt="product"
                            width={80}
                            height={88}
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                          <span className="sr-only">Close</span>
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="product.html" className="product-name">
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
                        <a href="product.html">
                          <img
                            src="images/cart/product-2.jpg"
                            alt="product"
                            width={80}
                            height={88}
                          />
                        </a>
                        <button className="btn btn-link btn-close">
                          <i className="fas fa-times" />
                          <span className="sr-only">Close</span>
                        </button>
                      </figure>
                      <div className="product-detail">
                        <a href="product.html" className="product-name">
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
              <div className="header-search hs-toggle mobile-search">
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
                  <button
                    className="btn btn-search"
                    type="submit"
                    title="submit-button"
                  >
                    <i className="d-icon-search" />
                  </button>
                </form>
              </div>
              {/* End of Header Search */}
            </div>
          </div>
        </div>

        <MainMenu />
      </header>
    </>
  );
}

export default Header;
