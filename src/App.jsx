import React from "react";
import OrderbookHeader from "./components/OrderbookHeader";
import OrderbookListItem from "./components/OrderbookListItem";

const organizeOrders = (orders) => {
    const newOrders = []

    orders.map((order) => {
      let quantity = 0
      const sameOrders = orders.filter((x) => x.price === order.price)
      sameOrders.map((i) => quantity += i.quantity)
      orders = orders.filter((j) => j.price !== order.price)
      newOrders.push({...order , quantity: quantity})
    });
    return newOrders.filter((i) => i.quantity !== 0);
}

const calTotal = (orders, order) => {
  let total = 0;
  let res;
  orders.forEach(i => {
      total += i.quantity; 
      if (i.price === order.price) {
        res = total;
      }
        
  });
  return res
}


const calSum = (orders) => {
  let sum=0
  orders.forEach((i) => {sum += i.quantity})
  return sum
}


function App({ data }) {

  const buyOrders = organizeOrders(data.filter((order) => order.type === "buy")).sort((a,b) => b.price - a.price);
  const sellOrders = organizeOrders(data.filter((order) => order.type === "sell")).sort((a,b) => a.price - b.price);
  
  const sumBuyOrders = calSum(buyOrders)
  const sumSellOrders = calSum(sellOrders)


  return (
    <div className="container">
      <div className="wrapper">
        <OrderbookHeader />
        <div className="table">
          <div className="sell-side side">
            {sellOrders.map((order,i) => {
              const total =calTotal(sellOrders,order);
               return <OrderbookListItem key={i} index={i} type={'sell'} price={order.price} total={total} amount={order.quantity} bgWidth={total*100/sumSellOrders} />
            })}
          </div>
          <div className="buy-side side">
            {buyOrders.map((order , i) => {
                const total = calTotal(buyOrders,order);
                return <OrderbookListItem key={i} index={i} type={'buy'} price={order.price} total={total} amount={order.quantity} bgWidth={total*100/sumBuyOrders} />
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
