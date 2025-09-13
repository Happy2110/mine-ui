import React from "react";

export default function Sidebar({ filters, setFilters }) {
  const handleCheckbox = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const handlePrice = (min, max) => {
    setFilters(prev => ({ ...prev, priceRange: [min, max] }));
  };

  const checkboxStyle =
    "accent-red-500 h-5 w-5 rounded cursor-pointer transition-colors duration-300";

  const labelStyle =
    "ml-2 text-gray-700 font-medium hover:text-red-500 transition-colors text-lg";

  return (
<aside className="w-64 bg-gradient-to-b from-red-500 to-blue-500 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Filters</h2>

      {/* Product Type Card */}
      <div className="bg-white/90 p-4 rounded-lg shadow-md space-y-3">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Item Type
        </h3>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("type", "Fruit")} className={checkboxStyle} />
          <span className={labelStyle}>Fruit</span>
        </label>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("type", "Vegetable")} className={checkboxStyle} />
          <span className={labelStyle}>Vegetable</span>
        </label>
      </div>

      {/* Delivery Card */}
      <div className="bg-white/90 p-4 rounded-lg shadow-md space-y-3">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Delivery
        </h3>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("delivery", "Free")} className={checkboxStyle} />
          <span className={labelStyle}>Free</span>
        </label>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("delivery", "Charged")} className={checkboxStyle} />
          <span className={labelStyle}>Charged</span>
        </label>
      </div>

      {/* Offers Card */}
      <div className="bg-white/90 p-4 rounded-lg shadow-md space-y-3">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Offers
        </h3>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("offer", "10% Off")} className={checkboxStyle} />
          <span className={labelStyle}>10% Off</span>
        </label>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("offer", "5% Off")} className={checkboxStyle} />
          <span className={labelStyle}>5% Off</span>
        </label>
        <label className="flex items-center my-1">
          <input type="checkbox" onChange={() => handleCheckbox("offer", "No Offer")} className={checkboxStyle} />
          <span className={labelStyle}>No Offer</span>
        </label>
      </div>

      {/* Price Range Card */}
      <div className="bg-white/90 p-4 rounded-lg shadow-md space-y-3">
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Price Range
        </h3>
        <input
          type="range"
          min={0}
          max={200}
          value={filters.priceRange[1]}
          onChange={e => handlePrice(0, Number(e.target.value))}
          className="w-full h-2 rounded-lg bg-gradient-to-r from-red-500 to-blue-500 accent-red-500 cursor-pointer"
        />
        <p className="text-gray-700 font-semibold text-lg mt-1">
          Up to <span className="text-red-600">₹{filters.priceRange[1]}</span>
        </p>
      </div>
    </aside>
  );
}
