import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import CartDetails from './pages/CartDetails';
import Search from './pages/Search';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
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
