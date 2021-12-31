import React from "react";

function OrderbookHeader() {
  return (
    <div className="header">
      <div className="header-row1">
        <h2>Sell</h2>
        <h2>Buy</h2>
      </div>
      <div className="header-row2">
        <span>Total (BTC)</span>
        <span>Amount (BTC)</span>
        <span>PRICE (USD)</span>
        <span>Amount (BTC)</span>
        <span>Total (BTC)</span>
      </div>
    </div>
  );
}

export default OrderbookHeader;
