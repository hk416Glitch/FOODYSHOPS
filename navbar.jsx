import React from "react";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-brand-700">Exotic Snack Shop</h1>
          <p className="text-xs text-slate-500">Curated snacks & gift packs — worldwide flavors</p>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-slate-600">
            <a className="hover:text-brand-700" href="#Alcohol">Alcohol Packs</a>
            <a className="hover:text-brand-700" href="#Exotic">Exotic Packs</a>
            <a className="hover:text-brand-700" href="#Snacks">Snacks</a>
            <a className="hover:text-brand-700" href="#Mixed">Mixed Packs</a>
          </nav>
          <div className="bg-slate-100 px-3 py-2 rounded-lg text-sm">
            Cart <span className="font-semibold ml-2">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
