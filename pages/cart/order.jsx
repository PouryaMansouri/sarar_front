import React from "react";

function OrderPage() {
  return (
    <main className="main order">
      <div className="page-content pt-7 pb-10 mb-10">
        <div className="step-by pr-4 pl-4">
          <h3 className="title title-simple title-step">
            <a href="cart.html">1. Shopping Cart</a>
          </h3>
          <h3 className="title title-simple title-step">
            <a href="checkout.html">2. Checkout</a>
          </h3>
          <h3 className="title title-simple title-step active">
            <a href="order.html">3. Order Complete</a>
          </h3>
        </div>
        <div className="container mt-8">
          <div className="order-message mr-auto ml-auto">
            <div className="icon-box d-inline-flex align-items-center">
              <div className="icon-box-icon mb-0">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  enableBackground="new 0 0 50 50"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="none"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                      strokeMiterlimit={10}
                      d="
											M33.3,3.9c-2.7-1.1-5.6-1.8-8.7-1.8c-12.3,0-22.4,10-22.4,22.4c0,12.3,10,22.4,22.4,22.4c12.3,0,22.4-10,22.4-22.4
											c0-0.7,0-1.4-0.1-2.1"
                    />
                    <polyline
                      fill="none"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="bevel"
                      strokeMiterlimit={10}
                      points="
											48,6.9 24.4,29.8 17.2,22.3 	"
                    />
                  </g>
                </svg>
              </div>
              <div className="icon-box-content text-left">
                <h5 className="icon-box-title font-weight-bold lh-1 mb-1">
                  Thank You!
                </h5>
                <p className="lh-1 ls-m">Your order has been received</p>
              </div>
            </div>
          </div>
          <div className="order-results">
            <div className="overview-item">
              <span>Order number:</span>
              <strong>4935</strong>
            </div>
            <div className="overview-item">
              <span>Status:</span>
              <strong>Processing</strong>
            </div>
            <div className="overview-item">
              <span>Date:</span>
              <strong>November 20, 2020</strong>
            </div>
            <div className="overview-item">
              <span>Email:</span>
              <strong>12345@gmail.com</strong>
            </div>
            <div className="overview-item">
              <span>Total:</span>
              <strong>$312.00</strong>
            </div>
            <div className="overview-item">
              <span>Payment method:</span>
              <strong>Cash on delivery</strong>
            </div>
          </div>
          <h2 className="title title-simple text-left pt-4 font-weight-bold text-uppercase">
            Order Details
          </h2>
          <div className="order-details">
            <table className="order-details-table">
              <thead>
                <tr className="summary-subtotal">
                  <td>
                    <h3 className="summary-subtitle">Product</h3>
                  </td>
                  <td />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-name">
                    Beige knitted shoes{" "}
                    <span>
                      {" "}
                      <i className="fas fa-times" />1
                    </span>
                  </td>
                  <td className="product-price">$84.00</td>
                </tr>
                <tr>
                  <td className="product-name">
                    Best dark blue pedestrian{" "}
                    <span>
                      <i className="fas fa-times" /> 1
                    </span>
                  </td>
                  <td className="product-price">$76.00</td>
                </tr>
                <tr>
                  <td className="product-name">
                    Women's fashion handing{" "}
                    <span>
                      <i className="fas fa-times" />2
                    </span>
                  </td>
                  <td className="product-price">$152.00</td>
                </tr>
                <tr className="summary-subtotal">
                  <td>
                    <h4 className="summary-subtitle">Subtotal:</h4>
                  </td>
                  <td className="summary-subtotal-price">$312.00</td>
                </tr>
                <tr className="summary-subtotal">
                  <td>
                    <h4 className="summary-subtitle">Shipping:</h4>
                  </td>
                  <td className="summary-subtotal-price">Free shipping</td>
                </tr>
                <tr className="summary-subtotal">
                  <td>
                    <h4 className="summary-subtitle">Payment method:</h4>
                  </td>
                  <td className="summary-subtotal-price">Cash on delivery</td>
                </tr>
                <tr className="summary-subtotal">
                  <td>
                    <h4 className="summary-subtitle">Total:</h4>
                  </td>
                  <td>
                    <p className="summary-total-price">$312.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="title title-simple text-left pt-10 mb-2">
            Billing Address
          </h2>
          <div className="address-info pb-8 mb-6">
            <p className="address-detail pb-2">
              John Doe
              <br />
              Riode Company
              <br />
              Steven street
              <br />
              El Carjon, CA 92020
              <br />
              123456789
            </p>
            <p className="email">mail@riode.com</p>
          </div>
          <a
            href="shop.html"
            className="btn btn-icon-left btn-dark btn-back btn-rounded btn-md mb-4"
          >
            <i className="d-icon-arrow-left" /> Back to List
          </a>
        </div>
      </div>
    </main>
  );
}

export default OrderPage;
