import React from "react";

function StickyFooter() {
  return (
    <>
      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo2.html" className="sticky-link">
          <i className="d-icon-home" />
          <span>Home</span>
        </a>
        <a href="demo2-shop.html" className="sticky-link">
          <i className="d-icon-volume" />
          <span>Categories</span>
        </a>
        <a href="wishlist.html" className="sticky-link">
          <i className="d-icon-heart" />
          <span>Wishlist</span>
        </a>
        <a href="account.html" className="sticky-link">
          <i className="d-icon-user" />
          <span>Account</span>
        </a>
        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="d-icon-search" />
            <span>Search</span>
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
      </div>
    </>
  );
}

export default StickyFooter;
