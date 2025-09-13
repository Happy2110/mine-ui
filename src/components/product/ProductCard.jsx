import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div  onClick={() => navigate(`/shop/${product}`)} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center min-h-[350px] max-h-[400px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex-shrink-0 hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 flex flex-col flex-1 items-center">
        <div className="my-2">
          <h3 className="font-bold text-xl mb-2 text-primary">
            {product.name}
          </h3>
          <p className="text-red-600 font-extrabold text-2xl mb-2">
            ₹{product.price}
            <span className="font-normal text-sm text-blue-600 ">
              {" "}
              ({product.quantity})
            </span>
          </p>
          <p className="font-normal text-sm  text-gray-600 mb-1">
            <span className="text-primary">Delivery:</span> {product.delivery}
          </p>
          <p className="text-green-600 font-semibold">{product.offer}</p>
        </div>

        {/* Add to Cart Button */}
        <button className=" mb-2 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity w-full sm:w-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
