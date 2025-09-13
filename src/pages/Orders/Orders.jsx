import React from "react";
import "../../styles/global.css";

const mockOrders = [
  { id: "ORD123", status: "Shipped", items: ["Tomato", "Potato"] },
  { id: "ORD124", status: "Delivered", items: ["Onion"] },
];

export default function Orders() {
  return (
    <div className="p-6 min-h-[80vh] bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">My Orders</h2>

        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-card shadow-md p-5 mb-5 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            <p className="mb-1">
              <strong className="text-secondary">Order ID:</strong> {order.id}
            </p>
            <p className="mb-1">
              <strong className="text-accent">Status:</strong> {order.status}
            </p>
            <p>
              <strong className="text-dark">Items:</strong> {order.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
