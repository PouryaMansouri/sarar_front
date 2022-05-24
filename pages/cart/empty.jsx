import React from "react";

function EmptyPage() {
  return (
    <main className="main cart-page">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="demo1.html">
                <i className="d-icon-home" />
              </a>
            </li>
            <li>cart</li>
          </ul>
        </div>
      </nav>
      <div className="page-content cart-empty">
        <div className="container">
          <div className="main-content">
            <i className="d-icon-bag cart-icon" />
            <h2 className="cart-descri">No products added to the cart</h2>
            <a className="btn btn-primary btn-rounded" href="shop.html">
              GO SHOP{" "}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EmptyPage;
