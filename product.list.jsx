// Simple product catalog — edit/add items here.
// Keep small images or remote URLs for fast builds.
const products = [
  // Alcohol gift packs
  {
    id: "ag1",
    category: "Alcohol Gift Packs",
    name: "Mini Cocktail Gift Bag",
    desc: "Three artisanal mini spirits + mixers, tasting notes included.",
    price: 34.0,
    containsAlcohol: true,
    image: "https://via.placeholder.com/400x300?text=Cocktail+Bag",
    stock: 12
  },
  {
    id: "ag2",
    category: "Alcohol Gift Packs",
    name: "Fortified Fruit Liqueur Set",
    desc: "Handcrafted fruit liqueurs — great for dessert pairings.",
    price: 42.0,
    containsAlcohol: true,
    image: "https://via.placeholder.com/400x300?text=Liqueur+Set",
    stock: 8
  },

  // Exotic snack packs
  {
    id: "ep1",
    category: "Exotic Snack Packs",
    name: "Asian Variety Snack Pack",
    desc: "Pocky, mochi biscuits, wasabi crisps — curated for flavor balance.",
    price: 22.0,
    containsAlcohol: false,
    image: "https://via.placeholder.com/400x300?text=Asian+Pack",
    stock: 30
  },
  {
    id: "ep2",
    category: "Exotic Snack Packs",
    name: "Latin Spice Pack",
    desc: "Chili mango candies, savory corn snacks, and classic dulce treats.",
    price: 20.0,
    containsAlcohol: false,
    image: "https://via.placeholder.com/400x300?text=Latin+Pack",
    stock: 18
  },

  // Single exotic snacks
  {
    id: "es1",
    category: "Exotic Snacks",
    name: "Japanese Matcha KitKat",
    desc: "Premium matcha-coated KitKat from Japan.",
    price: 4.5,
    containsAlcohol: false,
    image: "https://via.placeholder.com/400x300?text=Matcha+KitKat",
    stock: 100
  },
  {
    id: "es2",
    category: "Exotic Snacks",
    name: "Thai Coconut Roll",
    desc: "Crisp coconut wafer, a taste of Thailand.",
    price: 3.8,
    containsAlcohol: false,
    image: "https://via.placeholder.com/400x300?text=Coconut+Roll",
    stock: 50
  },

  // Mixed gift packs (alcohol + snacks)
  {
    id: "mg1",
    category: "Mixed Gift Packs",
    name: "Celebration Mix — Drinks + Snacks",
    desc: "Mini spirit, rare soda, and a handful of exotic treats.",
    price: 38.0,
    containsAlcohol: true,
    image: "https://via.placeholder.com/400x300?text=Mixed+Gift",
    stock: 10
  }
];

export default products;
