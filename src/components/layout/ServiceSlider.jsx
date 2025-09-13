import React from "react";
import { Products } from "../../Constant/Products";
import ProductCard from "../product/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServiceSlider() {
  const navigate = useNavigate();
  return (
    <div className=" p-2 w-full rounded-x shadow-lg shadow-blue-500">
      <div className="p-2 flex w-full justify-between">
        <h2 className="p-2 text-2xl font-bold text-center text-white">
          Our Products
        </h2>

        <span
          className="flex items-center justify-self-end gap-1 text-white font-medium hover:text-red-400"
          onClick={() => navigate("/shop")}
        >
          View All <FaArrowRight className="w-5 h-5" />
        </span>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto flex gap-6 p-4 no-scrollbar">
        {Products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
