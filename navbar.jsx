import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-600">Exotic Snack Shop</h1>
      <ul className="flex gap-4">
        <li className="hover:text-pink-600 cursor-pointer">Home</li>
        <li className="hover:text-pink-600 cursor-pointer">Shop</li>
        <li className="hover:text-pink-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}