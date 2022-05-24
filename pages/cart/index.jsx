import React from "react";

function CartPage() {
  return (
    <main className="main cart">
      <div className="page-content pt-7 pb-10">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step active">
            <a href="cart.html">1. Shopping Cart</a>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="checkout.html">2. Checkout</a>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="order.html">3. Order Complete</a>
          </h3>
        </div>
        <div className="container mt-7 mb-2">
          <div className="row">
            <div className="col-lg-8 col-md-12 pr-lg-4">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th>
                      <span>Product</span>
                    </th>
                    <th />
                    <th>
                      <span>Price</span>
                    </th>
                    <th>
                      <span>quantity</span>
                    </th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <figure>
                        <a href="product-simple.html">
                          <img
                            src="images/products/product18.jpg"
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </a>
                      </figure>
                    </td>
                    <td className="product-name">
                      <div className="product-name-section">
                        <a href="product-simple.html">
                          Converse Training Shoes
                        </a>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$129.99</span>
                    </td>
                    <td className="product-quantity">
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
                    </td>
                    <td className="product-price">
                      <span className="amount">$129.99</span>
                    </td>
                    <td className="product-close">
                      <a
                        href="#"
                        className="product-remove"
                        title="Remove this product"
                      >
                        <i className="fas fa-times" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <figure>
                        <a href="product-simple.html">
                          <img
                            src="images/products/product19.jpg"
                            width={100}
                            height={100}
                            alt="product"
                          />
                        </a>
                      </figure>
                    </td>
                    <td className="product-name">
                      <div className="product-name-section">
                        <a href="product-simple.html">
                          Women Beautiful Headgear
                        </a>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">$98.00</span>
                    </td>
                    <td className="product-quantity">
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
                    </td>
                    <td className="product-price">
                      <span className="amount">$98.00</span>
                    </td>
                    <td className="product-close">
                      <a
                        href="#"
                        className="product-remove"
                        title="Remove this product"
                      >
                        <i className="fas fa-times" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-actions mb-6 pt-4">
                <a
                  href="shop.html"
                  className="btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4"
                >
                  <i className="d-icon-arrow-left" />
                  Continue Shopping
                </a>
                <button
                  type="submit"
                  className="btn btn-outline btn-dark btn-md btn-rounded btn-disabled"
                >
                  Update Cart
                </button>
              </div>
              <div className="cart-coupon-box mb-8">
                <h4 className="title coupon-title text-uppercase ls-m">
                  Coupon Discount
                </h4>
                <input
                  type="text"
                  name="coupon_code"
                  className="input-text form-control text-grey ls-m mb-4"
                  id="coupon_code"
                  defaultValue
                  placeholder="Enter coupon code here..."
                />
                <button
                  type="submit"
                  className="btn btn-md btn-dark btn-rounded btn-outline"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <aside className="col-lg-4 sticky-sidebar-wrapper">
              <div
                className="sticky-sidebar"
                data-sticky-options="{'bottom': 20}"
              >
                <div className="summary mb-4">
                  <h3 className="summary-title text-left">Cart Totals</h3>
                  <table className="shipping">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Subtotal</h4>
                        </td>
                        <td>
                          <p className="summary-subtotal-price">$426.99</p>
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
                    </tbody>
                  </table>
                  <div className="shipping-address">
                    <label>
                      Shipping to <strong>CA.</strong>
                    </label>
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
                    <div className="select-box">
                      <select name="country" className="form-control">
                        <option value="us" selected>
                          California
                        </option>
                        <option value="uk">Alaska</option>
                        <option value="fr">Delaware</option>
                        <option value="aus">Hawaii</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      placeholder="Town / City"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      placeholder="ZIP"
                    />
                    <a
                      href="#"
                      className="btn btn-md btn-dark btn-rounded btn-outline"
                    >
                      Update totals
                    </a>
                  </div>
                  <table className="total">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>
                          <h4 className="summary-subtitle">Total</h4>
                        </td>
                        <td>
                          <p className="summary-total-price ls-s">$426.99</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="checkout.html"
                    className="btn btn-dark btn-rounded btn-checkout"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
