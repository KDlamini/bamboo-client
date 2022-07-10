import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <header className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between px-5">
        <button
          type="button"
          className="navbar-brand text-success"
          onClick={() => navigate('/')}
        >
          SHOPCART
        </button>
        <ul className="navbar-nav">
          <li className="nav-item login">
            {isAuthenticated ? (
              <a className="nav-link text-light" href="#user">
                Hi,
                {' '}
                {user.name.split(' ')[0]}
              </a>
            ) : (
              <LoginModal />
            )}
          </li>
          <li className="nav-item register">
            {isAuthenticated ? <Logout /> : <RegisterModal />}
          </li>
          <li className="nav-item orders">
            <a className="nav-link" href="#orders">Orders</a>
          </li>
          <li className="nav-item account">
            <a className="nav-link" href="#orders">My Account</a>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={() => navigate('/cart')}
            >
              <i className="fas fa-shopping-cart" />
              <span className="badge badge-light">{cartItems.length}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
