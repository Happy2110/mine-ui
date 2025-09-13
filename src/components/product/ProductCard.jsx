import { useState } from "react";
import {
  PiHeartFill,
  PiHeartLight,
  PiShoppingCartSimpleFill,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      onClick={() => navigate(`/shop/${product.id}`)}
      className=" bg-white relative rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[320px] max-h-[400px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      {/* Price & Quantity Badge */}
      <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-full font-bold text-sm z-2">
        ₹{product.price} <span className="text-xs">({product.quantity})</span>
      </div>

      {/* Product Image Wrapper */}
      <div className="h-[80%] relative w-full flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Offer Section (overlay on image) */}
        {product.offer && product.offer !== "No Offer" && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-blue-500 text-white text-center font-semibold py-2 px-4 z-10">
            {product.offer}
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-cover mx-2 z-0"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-2 p-3 m-2 justify-end">
        {/* Name + Action Buttons */}
        <div className="h-12 flex items-center justify-between gap-2">
          <span className="font-semibold text-md flex item-center text-wrap text-gray-800 truncate">
            {product.name}
          </span>
          <div className="flex gap-2">
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={(e) => {
                e.stopPropagation();
                setIsInCart((prev) => !prev);
                console.log("Added to cart:", product.name);
              }}
            >
              {isInCart ? (
                <PiShoppingCartSimpleFill className="w-5 h-5 text-primary" />
              ) : (
                <PiShoppingCartSimpleLight className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked((prev) => !prev);
                console.log("Liked:", product.name);
              }}
            >
              {isLiked ? (
                <PiHeartFill className="w-5 h-5 text-primary" />
              ) : (
                <PiHeartLight className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Delivery Info */}
        <p className="text-sm text-gray-600">
          <span className="text-primary">Delivery:</span> {product.delivery}
        </p>
      </div>
    </div>
  );
}
