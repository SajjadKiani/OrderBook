import React from "react";
import classnames from "classnames";
import { ORDER_TYPE } from "../types";

function OrderbookListItem({ index, type, price, total, amount, bgWidth }) {
  return (
    <div
      data-testid={`orderbookRow-${type}-${index}`}
      className={classnames("row", {
        "sell-row": type === ORDER_TYPE.SELL,
        "buy-row": type === ORDER_TYPE.BUY,
      })}
    >
      <div className="background" style={{ width: bgWidth }} />
      <span className="price">{+price}</span>
      <span className="quantity">{+amount}</span>
      <span className="total">{+total}</span>
    </div>
  );
}

export default OrderbookListItem;
