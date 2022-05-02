import React from 'react';

function Navbar() {
  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <a className="navbar-brand text-success" href="#home">BAMBOO</a>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
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
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
