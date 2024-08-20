import React from 'react';
import '../App.css';

function OrderList() {
  const orders = [
    { id: 1, timeLeft: '10 min', amount: '1000000', token: 'ST', chain: 'ETH', output: '1000 DT on BNB', status: 'active' },
    { id: 2, timeLeft: '7 min', amount: '1000000', token: 'ST', chain: 'ETH', output: '1000 DT on BNB', status: 'active' },
    { id: 3, timeLeft: '5 min', amount: '1000000', token: 'ST', chain: 'ETH', output: '1000 DT on BNB', status: 'expired' },
  ];

  return (
    <div className="order-list">
      <h2>Order List</h2>
      <div className="order-tabs">
        <button className="tab-btn active">My Orders</button>
        <button className="tab-btn">All Orders</button>
      </div>
      <div className="orders">
        {orders.map(order => (
          <div key={order.id} className={`order ${order.status}`}>
            <div>Expires in {order.timeLeft}</div>
            <div>Offering {order.amount} {order.token} from {order.chain} for {order.output}</div>
            <button className="order-action-btn">
              {order.status === 'expired' ? 'Reclaim' : 'Fill order'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
