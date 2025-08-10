import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Exotic Snacks</h1>
        <ProductList />
      </main>
    </div>
  );
}
