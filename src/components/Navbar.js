import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-5">
        <a className="navbar-brand text-success" href="/">BOOMSTORE</a>
        <ul className="navbar-nav">
          <li className="nav-item login active">
            <a className="nav-link" href="#login">Login</a>
          </li>
          <li className="nav-item register">
            <a className="nav-link" href="#register">Register</a>
          </li>
          <li className="nav-item register">
            <a className="nav-link" href="#orders">Orders</a>
          </li>
          <li className="nav-item account">
            <a className="nav-link" href="#orders">My Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cart">
              <i className="fas fa-shopping-cart" />
              <span className="badge badge-light">{cartItems.length}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
