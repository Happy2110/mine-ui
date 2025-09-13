import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import ProductList from "../../components/product/ProductList";

export default function Shop() {
  const [filters, setFilters] = useState({
    type: [],
    delivery: [],
    offer: [],
    priceRange: [0, 200],
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar filters={filters} setFilters={setFilters} />

      {/* Product Grid */}
      <ProductList filters={filters} />
    </div>
  );
}
