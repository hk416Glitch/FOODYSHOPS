import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <ProductList />
      </main>
    </div>
  );
}
