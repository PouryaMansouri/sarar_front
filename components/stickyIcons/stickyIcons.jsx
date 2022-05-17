import React from "react";

function StickyIcons() {
  return (
    <>
      <div className="sticky-icons-wrapper">
        <div className="sticky-icon-links">
          <ul>
            <li>
              <a href="#" className="demo-toggle">
                <i className="fas fa-home" />
                <span>Demos</span>
              </a>
            </li>
            <li>
              <a href="documentation.html">
                <i className="fas fa-info-circle" />
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="https://themeforest.net/downloads/">
                <i className="fas fa-star" />
                <span>Reviews</span>
              </a>
            </li>
            <li>
              <a href="https://d-themes.com/buynow/riodehtml">
                <i className="fas fa-shopping-cart" />
                <span>Buy now!</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="demos-list">
          <div className="demos-overlay" />
          <a className="demos-close" href="#">
            <i className="close-icon" />
          </a>
          <div className="demos-content scrollable scrollable-light">
            <h3 className="demos-title">Demos</h3>
            <div className="demos" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyIcons;
