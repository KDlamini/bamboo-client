import React from 'react';
import { Button } from 'react-bootstrap';

const OrderHistoryCard = () => (
  <div className="detail-box cart-info-wrapper p-3">
    <div className="d-flex justify-content-between">
      <div>
        <h2 className="card-text text-dark">Delivered Thu, 12 Aug 2021</h2>
        <p className="card-text">To: Customer name (Customer)</p>
      </div>

      <div className="actions">
        <Button
          variant="secondary"
          type="submit"
          className="buy btn-secondary rounded-1"
        >
          Order details
        </Button>
      </div>
    </div>

    <div className="order-img-wrapper">
      <img src="https://www.digicape.co.za/image/cache/catalog/product/Watch%20S7/GPS+Cell/Apple_Watch_Series_7_LTE_41mm_Blue_Aluminum_Abyss_Blue_Sport_Band_PDP_Image_Position-1_WWEN-1000x1000.jpg" alt="product" className="order-img" />
    </div>
  </div>
);

export default OrderHistoryCard;
