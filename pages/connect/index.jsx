import React from "react";

function ConnectPage() {
  return (
    <main className="main">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="demo1.html">
                <i className="d-icon-home" />
              </a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      <div
        className="page-header"
        style={{ backgroundImage: "url(images/page-header/contact-us.jpg)" }}
      >
        <h1 className="page-title font-weight-bold text-capitalize ls-l">
          Contact Us
        </h1>
      </div>
      <div className="page-content mt-10 pt-7">
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 ls-m mb-4">
                <div className="grey-section d-flex align-items-center h-100">
                  <div>
                    <h4 className="mb-2 text-capitalize">Headquarters</h4>
                    <p>
                      1600 Amphitheatre Parkway
                      <br />
                      New York WC1 1BA
                    </p>
                    <h4 className="mb-2 text-capitalize">Phone Number</h4>
                    <p>
                      <a href="tel:#">1.800.458.56</a>
                      <br />
                      <a href="tel:#">1.800.458.56</a>
                    </p>
                    <h4 className="mb-2 text-capitalize">Support</h4>
                    <p className="mb-4">
                      <a href="#">support@your-domain.com</a>
                      <br />
                      <a href="#">help@your-domain.com</a>
                      <br />
                      <a href="#">Sale</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-6 d-flex align-items-center mb-4">
                <div className="w-100">
                  <form className="pl-lg-2" action="#">
                    <h4 className="ls-m font-weight-bold">Let’s Connect</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="row mb-2">
                      <div className="col-12 mb-4">
                        <textarea
                          className="form-control"
                          required
                          placeholder="Comment*"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>
                    <button className="btn btn-dark btn-rounded">
                      Post Comment
                      <i className="d-icon-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section*/}
        <section className="store-section mt-6 pt-10 pb-8">
          <div className="container">
            <h2 className="title title-center mb-7 text-normal">Our store</h2>
            <div className="row cols-sm-2 cols-lg-4">
              <div className="store">
                <figure className="banner-radius">
                  <img
                    src="images/subpages/store-1.jpg"
                    alt="store"
                    width={280}
                    height={280}
                  />
                  <h4 className="overlay-visible">New York</h4>
                  <div className="overlay overlay-transparent">
                    <a className="mt-8" href="mail:#">
                      mail@newyorkriodestore.com
                    </a>
                    <a href="tel:#">Phone: (123) 456-7890</a>
                    <div className="social-links mt-1">
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
                </figure>
              </div>
              <div className="store">
                <figure className="banner-radius">
                  <img
                    src="images/subpages/store-2.jpg"
                    alt="store"
                    width={280}
                    height={280}
                  />
                  <h4 className="overlay-visible">London</h4>
                  <div className="overlay overlay-transparent">
                    <a className="mt-8" href="mail:#">
                      mail@londonriodestore.com
                    </a>
                    <a href="tel:#">Phone: (123) 456-7890</a>
                    <div className="social-links mt-1">
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
                </figure>
              </div>
              <div className="store">
                <figure className="banner-radius">
                  <img
                    src="images/subpages/store-3.jpg"
                    alt="store"
                    width={280}
                    height={280}
                  />
                  <h4 className="overlay-visible">Oslo</h4>
                  <div className="overlay overlay-transparent">
                    <a className="mt-8" href="mail:#">
                      mail@osloriodestore.com
                    </a>
                    <a href="tel:#">Phone: (123) 456-7890</a>
                    <div className="social-links mt-1">
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
                </figure>
              </div>
              <div className="store">
                <figure className="banner-radius">
                  <img
                    src="images/subpages/store-4.jpg"
                    alt="store"
                    width={280}
                    height={280}
                  />
                  <h4 className="overlay-visible">Stockholm</h4>
                  <div className="overlay overlay-transparent">
                    <a className="mt-8" href="mail:#">
                      mail@stockholmriodestore.com
                    </a>
                    <a href="tel:#">Phone: (123) 456-7890</a>
                    <div className="social-links mt-1">
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
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* End Store Section */}
        {/* Google Maps - Go to the bottom of the page to change settings and map location. */}
        <div
          className="grey-section google-map"
          id="googlemaps"
          style={{ height: "386px" }}
        />
        {/* End Map Section */}
      </div>
    </main>
  );
}

export default ConnectPage;
