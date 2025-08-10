import React from "react";
import products from "./products";

function App() {
  // Group products by category
  const categories = [
    "Alcohol Gift Packs",
    "Exotic Snack Packs",
    "Exotic Snacks",
    "Mixed Gift Packs"
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Gift Pack Store</h1>
          <nav className="space-x-6 hidden sm:flex">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <section
            key={category}
            id={category.replace(/\s+/g, "-")}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <h3 className="mt-4 font-semibold text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex-grow">
                      {product.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.containsAlcohol && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                          18+
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Gift Pack Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
