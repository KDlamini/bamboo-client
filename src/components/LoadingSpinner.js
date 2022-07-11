import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => (
  <div className="spinner-wrapper m-3 rounded-1">
    <Spinner animation="border" variant="success" />
  </div>
);

export default LoadingSpinner;
