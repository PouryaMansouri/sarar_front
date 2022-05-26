import React from "react";

function CheckoutPage() {
  return (
    <main className="main checkout">
      <div className="page-content pt-7 pb-10 mb-10">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step">
            <a href="cart.html">1. Shopping Cart</a>
          </h3>
          <h3 className="title title-simple title-step active">
            <a href="checkout.html">2. Checkout</a>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="order.html">3. Order Complete</a>
          </h3>
        </div>
        <div className="container mt-7">
          <div className="card accordion">
            <div className="alert alert-light alert-primary alert-icon mb-4 card-header">
              <i className="fas fa-exclamation-circle" />
              <span className="text-body">Returning customer?</span>
              <a href="#alert-body1" className="text-primary collapse">
                Click here to login
              </a>
            </div>
            <div className="alert-body collapsed" id="alert-body1">
              <p>
                If you have shopped with us before, please enter your details
                below. If you are a new customer, please proceed to the Billing
                section.
              </p>
              <div className="row cols-md-2">
                <form className="mb-4 mb-md-0">
                  <label htmlFor="username">Username Or Email *</label>
                  <input
                    type="text"
                    className="input-text form-control mb-0"
                    name="username"
                    id="username"
                    autoComplete="username"
                  />
                </form>
                <form className="mb-4 mb-md-0">
                  <label htmlFor="password">Password *</label>
                  <input
                    className="input-text form-control mb-0"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </form>
              </div>
              <div className="checkbox d-flex align-items-center justify-content-between">
                <div className="form-checkbox pt-0 mb-0">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="signin-remember"
                    name="signin-remember"
                  />
                  <label
                    className="form-control-label"
                    htmlFor="signin-remember"
                  >
                    Remember Me
                  </label>
                </div>
                <a href="#" className="lost-link">
                  Lost your password?
                </a>
              </div>
              <div className="link-group">
                <a href="#" className="btn btn-dark btn-rounded mb-4">
                  Login
                </a>
                <span className="d-inline-block text-body font-weight-semi-bold">
                  or Login With
                </span>
                <div className="social-links mb-4">
                  <a
                    href="#"
                    className="social-link social-google fab fa-google"
                  />
                  <a
                    href="#"
                    className="social-link social-facebook fab fa-facebook-f"
                  />
                  <a
                    href="#"
                    className="social-link social-twitter fab fa-twitter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card accordion">
            <div className="alert alert-light alert-primary alert-icon mb-4 card-header">
              <i className="fas fa-exclamation-circle" />
              <span className="text-body">Have a coupon?</span>
              <a href="#alert-body2" className="text-primary">
                Click here to enter your code
              </a>
            </div>
            <div className="alert-body collapsed" id="alert-body2">
              <p>If you have a coupon code, please apply it below.</p>
              <div className="check-coupon-box d-flex">
                <input
                  type="text"
                  name="coupon_code"
                  className="input-text form-control text-grey ls-m mr-4 mb-4"
                  id="coupon_code"
                  defaultValue
                  placeholder="Coupon code"
                />
                <button
                  type="submit"
                  className="btn btn-dark btn-rounded btn-outline mb-4"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
          <form action="#" className="form">
            <div className="row">
              <div className="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
                <h3 className="title title-simple text-left text-uppercase">
                  Billing Details
                </h3>
                <div className="row">
                  <div className="col-xs-6">
                    <label>First Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first-name"
                      required
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last-name"
                      required
                    />
                  </div>
                </div>
                <label>Company Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  name="company-name"
                  required
                />
                <label>Country / Region *</label>
                <div className="select-box">
                  <select name="country" className="form-control">
                    <option value="us" selected>
                      United States (US)
                    </option>
                    <option value="uk"> United Kingdom</option>
                    <option value="fr">France</option>
                    <option value="aus">Austria</option>
                  </select>
                </div>
                <label>Street Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="address1"
                  required
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  className="form-control"
                  name="address2"
                  required
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
                <div className="row">
                  <div className="col-xs-6">
                    <label>Town / City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      required
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>State *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <label>ZIP *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      required
                    />
                  </div>
                  <div className="col-xs-6">
                    <label>Phone *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <label>Email Address *</label>
                <input
                  type="text"
                  className="form-control"
                  name="email-address"
                  required
                />
                <div className="form-checkbox mb-0">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="create-account"
                    name="create-account"
                  />
                  <label
                    className="form-control-label ls-s"
                    htmlFor="create-account"
                  >
                    Create an account?
                  </label>
                </div>
                <div className="form-checkbox mb-6">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    id="different-address"
                    name="different-address"
                  />
                  <label
                    className="form-control-label ls-s"
                    htmlFor="different-address"
                  >
                    Ship to a different address?
                  </label>
                </div>
                <h2 className="title title-simple text-uppercase text-left">
                  Additional Information
                </h2>
                <label>Order Notes (Optional)</label>
                <textarea
                  className="form-control pb-2 pt-2 mb-0"
                  cols={30}
                  rows={5}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  defaultValue={""}
                />
              </div>
              <aside className="col-lg-5 sticky-sidebar-wrapper">
                <div
                  className="sticky-sidebar mt-1"
                  data-sticky-options="{'bottom': 50}"
                >
                  <div className="summary pt-5">
                    <h3 className="title title-simple text-left text-uppercase">
                      Your Order
                    </h3>
                    <table className="order-table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-name">
                            Fashionable Overnight Bag{" "}
                            <span className="product-quantity">×&nbsp;1</span>
                          </td>
                          <td className="product-total text-body">$110.00</td>
                        </tr>
                        <tr>
                          <td className="product-name">
                            Mackintosh Poket backpack{" "}
                            <span className="product-quantity">×&nbsp;1</span>
                          </td>
                          <td className="product-total text-body">$180.00</td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>
                            <h4 className="summary-subtitle">Subtotal</h4>
                          </td>
                          <td className="summary-subtotal-price pb-0 pt-0">
                            $290.00
                          </td>
                        </tr>
                        <tr className="sumnary-shipping shipping-row-last">
                          <td colSpan={2}>
                            <h4 className="summary-subtitle">
                              Calculate Shipping
                            </h4>
                            <ul>
                              <li>
                                <div className="custom-radio">
                                  <input
                                    type="radio"
                                    id="flat_rate"
                                    name="shipping"
                                    className="custom-control-input"
                                    defaultChecked
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="flat_rate"
                                  >
                                    Flat rate
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="custom-radio">
                                  <input
                                    type="radio"
                                    id="free-shipping"
                                    name="shipping"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="free-shipping"
                                  >
                                    Free shipping
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="custom-radio">
                                  <input
                                    type="radio"
                                    id="local_pickup"
                                    name="shipping"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="local_pickup"
                                  >
                                    Local pickup
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="summary-total">
                          <td className="pb-0">
                            <h4 className="summary-subtitle">Total</h4>
                          </td>
                          <td className=" pt-0 pb-0">
                            <p className="summary-total-price ls-s text-primary">
                              $290.00
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="payment accordion radio-type">
                      <h4 className="summary-subtitle ls-m pb-3">
                        Payment Methods
                      </h4>
                      <div className="card">
                        <div className="card-header">
                          <a
                            href="#collapse1"
                            className="collapse text-body text-normal ls-m"
                          >
                            Check payments
                          </a>
                        </div>
                        <div
                          id="collapse1"
                          className="expanded"
                          style={{ display: "block" }}
                        >
                          <div className="card-body ls-m">
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <a
                            href="#collapse2"
                            className="expand text-body text-normal ls-m"
                          >
                            Cash on delivery
                          </a>
                        </div>
                        <div id="collapse2" className="collapsed">
                          <div className="card-body ls-m">
                            Pay with cash upon delivery.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-checkbox mt-4 mb-5">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="terms-condition"
                        name="terms-condition"
                      />
                      <label
                        className="form-control-label"
                        htmlFor="terms-condition"
                      >
                        I have read and agree to the website{" "}
                        <a href="#">terms and conditions</a>*
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark btn-rounded btn-order"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
