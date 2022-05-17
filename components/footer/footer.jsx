import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer appear-animate">
        <div className="container">
          <div className="footer-middle">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <a href="demo2.html" className="mb-4 logo-footer">
                    <img
                      src="images/demos/demo2/logo-footer.png"
                      alt="logo-footer"
                      width={150}
                      height={43}
                    />
                  </a>
                  <div className="widget-body">
                    <p className="ls-s">
                      Fringilla urna porttitor rhoncus dolor purus
                      <br /> luctus venenatis lectus magna fringilla diam
                      <br /> maecenas ultricies mi eget mauris.
                    </p>
                    <a href="mailto:mail@riode.com">Riode@example.com</a>
                  </div>
                </div>
                {/* End of Widget */}
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">About Us</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="#">Order History</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Custom Service</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Condition</a>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget */}
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">Customer Service</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="#">Payment Methods</a>
                        </li>
                        <li>
                          <a href="#">Money-back Guarantee!</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Shipping</a>
                        </li>
                        <li>
                          <a href="#">Terms and Conditions</a>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget */}
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">My Account</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="#">Sign In</a>
                        </li>
                        <li>
                          <a href="cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Track My Order</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of FooterMiddle */}
          <div className="footer-bottom">
            <div className="footer-left">
              <figure className="payment">
                <img
                  src="images/payment.png"
                  alt="payment"
                  width={159}
                  height={29}
                />
              </figure>
            </div>
            <div className="footer-center">
              <p className="copyright">
                Riode eCommerce © 2021. All Rights Reserved
              </p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a
                  href="#"
                  title="social-link"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="#"
                  title="social-link"
                  className="social-link social-twitter fab fa-twitter"
                />
                <a
                  href="#"
                  title="social-link"
                  className="social-link social-linkedin fab fa-linkedin-in"
                />
              </div>
            </div>
          </div>
          {/* End of FooterBottom */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
