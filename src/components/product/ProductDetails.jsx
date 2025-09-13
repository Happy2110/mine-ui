import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Products } from "../../Constant/Products";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const {productId} = useParams()
  const product = Products.find((product) => product.id == productId);
  if (!product) {
    return <div className="p-6 text-red-600">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 md:px-12 py-10">
      {/* Breadcrumbs */}
      <nav className="text-gray-600 text-sm mb-6 self-start">
        Home &gt; Vegetables &gt; {product.name}
      </nav>

      {/* Product Card */}
      <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover md:h-full"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-green-600 font-semibold text-lg">
              {product.offer}
            </p>
            <p className="text-2xl font-bold text-red-600 mb-2">
              ₹{product.offerPrice}{" "}
              <span className="line-through text-gray-400 text-lg">
                ₹{product.price}
              </span>
            </p>
            <p className="text-gray-700 font-medium mb-2">
              Size / Weight: {product.weight}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all">
            <FaCartPlus className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-white rounded-xl shadow-md mt-8 p-6 w-full max-w-5xl space-y-6">
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Know Your Product
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Also known as:</strong> {product.alsoKnownAs}
          </p>
          <p>
            <strong>Seasonality:</strong> {product.seasonality}
          </p>
          <p>
            <strong>Basic Information:</strong> {product.basicInfo}
          </p>
          <p>
            <strong>Health and Nutrition:</strong> {product.health}
          </p>
          <p>
            <strong>Speciality:</strong> {product.speciality}
          </p>
        </div>
      </div>
    </div>
  );
}
