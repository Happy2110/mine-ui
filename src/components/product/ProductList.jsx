import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "../../Constant/Products";


export default function ProductList({ filters }) {

const products  = Products;
  const filteredProducts = products.filter(p => {
    const typeMatch = filters.type.length ? filters.type.includes(p.type) : true;
    const deliveryMatch = filters.delivery.length ? filters.delivery.includes(p.delivery) : true;
    const offerMatch = filters.offer.length ? filters.offer.includes(p.offer) : true;
    const priceMatch = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    return typeMatch && deliveryMatch && offerMatch && priceMatch;
  });

  return (
    <main className="flex-1 p-6 flex flex-wrap gap-6 justify-center md:justify-start">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
