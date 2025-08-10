import React from "react";

const products = [
  { id: 1, name: "Japanese KitKat - Matcha", price: "$4.99" },
  { id: 2, name: "Korean Honey Butter Chips", price: "$3.49" },
  { id: 3, name: "Thai Coconut Roll", price: "$5.29" },
];

export default function ProductList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Our Snacks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
