import React from 'react';

function Navbar() {
  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-5">
        <a className="navbar-brand text-success" href="/">BAMBOO</a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cart">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
