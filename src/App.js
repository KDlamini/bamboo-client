import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';
import Search from './pages/Search';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import ErrorBoundary from './components/ErrorBoundary';
import { getCurrentUser, getGeoLocation } from './redux/actions/users';
import { getProducts } from './redux/actions/products';
import './App.css';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products.data);
  const location = JSON.parse(localStorage.getItem('geo')) || {};
  const locationSize = Object.keys(location).length;
  const productsSize = Object.keys(products).length;
  const userSize = Object.keys(user).length;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSize === 0) dispatch(getCurrentUser());

    if (productsSize === 0) dispatch(getProducts());

    if (isAuthenticated && locationSize === 0) dispatch(getGeoLocation());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            path="/product/:id"
            element={(
              <ProductDetails />
            )}
          />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/query" element={<Search />} />
          <Route
            path="/query/product/:id"
            element={(
              <ProductDetails />
            )}
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
