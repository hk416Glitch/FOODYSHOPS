export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600">Exotic Snack Shop</h1>
        <p className="text-gray-600 mt-2">
          Bags full of exotic snacks, drinks, and surprises!
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <img src="https://via.placeholder.com/200" alt="Snack Bag" className="rounded-lg mb-3"/>
          <h2 className="font-bold text-lg">Sweet Surprise Bag</h2>
          <p className="text-sm text-gray-500">Mix of sweet exotic treats.</p>
          <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
            Order Now
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          <img src="https://via.placeholder.com/200" alt="Snack Bag" className="rounded-lg mb-3"/>
          <h2 className="font-bold text-lg">Drink Lovers Bag</h2>
          <p className="text-sm text-gray-500">Rare exotic drinks inside.</p>
          <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
            Order Now
          </button>
        </div>
      </main>
    </div>
  );
}