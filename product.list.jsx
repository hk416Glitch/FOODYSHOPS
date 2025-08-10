import React from "react";

const products = [
  { id: 1, name: "Matcha KitKat", price: "$3.50" },
  { id: 2, name: "Pocky Almond Crush", price: "$2.99" },
  { id: 3, name: "Korean Honey Butter Chips", price: "$4.25" },
  { id: 4, name: "Japanese Ramune Soda", price: "$2.50" }
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow p-4 rounded hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold">{p.name}</h2>
          <p className="text-gray-600">{p.price}</p>
        </div>
      ))}
    </div>
  );
}