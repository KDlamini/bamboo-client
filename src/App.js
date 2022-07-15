import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';
import Search from './pages/Search';
import Checkout from './components/Checkout';
import OrderReview from './components/OrderReview';
import Payment from './components/Payment';
import ErrorBoundary from './components/ErrorBoundary';
import { getCurrentUser, getGeoLocation } from './redux/actions/users';
import { getProducts } from './redux/actions/products';
import './App.css';

const stripePromise = loadStripe(
  'pk_test_51LLkufIMZeVYl1jrFxaNHvq7jCxODcPK6yCWhQgn9w0AH8nnLicgnOSWXihhE5vph79NJvRA4JsUfS4a63MWdR6a00RckUELq8',
);

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
          <Route path="/review_order" element={<OrderReview />} />
          <Route
            path="/payment"
            element={(
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
          )}
          />
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
