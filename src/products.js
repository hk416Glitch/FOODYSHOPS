// Simple product catalog — edit/add items here.
const products = [
  // Alcohol gift packs
  {
    id: "ag1",
    category: "Alcohol Gift Packs",
    name: "Mini Cocktail Gift Bag",
    desc: "Three artisanal mini spirits with premium mixers, tasting notes included.",
    price: 34.0,
    containsAlcohol: true,
    image: "https://images.unsplash.com/photo-1598136490931-34e4d79a9e4f?w=400&h=300&fit=crop",
    stock: 12
  },
  {
    id: "ag2",
    category: "Alcohol Gift Packs",
    name: "Fortified Fruit Liqueur Set",
    desc: "Small-batch fruit liqueurs, perfect for dessert pairings or sipping.",
    price: 42.0,
    containsAlcohol: true,
    image: "https://images.unsplash.com/photo-1617196039200-bf0b2e4e96b1?w=400&h=300&fit=crop",
    stock: 8
  },

  // Exotic snack packs
  {
    id: "ep1",
    category: "Exotic Snack Packs",
    name: "Asian Variety Snack Pack",
    desc: "Pocky, mochi biscuits, wasabi crisps — a balanced flavor journey.",
    price: 22.0,
    containsAlcohol: false,
    image: "https://images.unsplash.com/photo-1604908177193-25b0d6c4fca3?w=400&h=300&fit=crop",
    stock: 30
  },
  {
    id: "ep2",
    category: "Exotic Snack Packs",
    name: "Latin Spice Pack",
    desc: "Chili mango candies, savory corn snacks, and dulce classics.",
    price: 20.0,
    containsAlcohol: false,
    image: "https://images.unsplash.com/photo-1589367920140-dc8eac37f4f4?w=400&h=300&fit=crop",
    stock: 18
  },

  // Single exotic snacks
  {
    id: "es1",
    category: "Exotic Snacks",
    name: "Japanese Matcha KitKat",
    desc: "Authentic Japanese KitKat with smooth matcha chocolate coating.",
    price: 4.5,
    containsAlcohol: false,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop",
    stock: 100
  },
  {
    id: "es2",
    category: "Exotic Snacks",
    name: "Thai Coconut Roll",
    desc: "Crisp coconut wafers with a sweet tropical aroma.",
    price: 3.8,
    containsAlcohol: false,
    image: "https://images.unsplash.com/photo-1625944522704-6b9c7a509179?w=400&h=300&fit=crop",
    stock: 50
  },

  // Mixed gift packs (alcohol + snacks)
  {
    id: "mg1",
    category: "Mixed Gift Packs",
    name: "Celebration Mix — Drinks + Snacks",
    desc: "Mini spirit, rare soda, and a curated selection of exotic treats.",
    price: 38.0,
    containsAlcohol: true,
    image: "https://images.unsplash.com/photo-1617191519105-f5e4b6d6f9df?w=400&h=300&fit=crop",
    stock: 10
  }
];

export default products;
