"use client";

import { createContext, useContext } from "react";
import { create } from "zustand";

const createCartStore = () =>
  create<{
    count: number;
    add: () => void;
  }>((set, get) => ({
    count: 0,
    add: () => set({ count: get().count + 1 }),
  }));

type CartStoreGetter = ReturnType<typeof createCartStore>;

const CartStoreProvider = createContext<CartStoreGetter | null>(null);

export const useCart = () => useContext(CartStoreProvider)!;

export function CartContainer({ children }: { children: React.ReactNode }) {
  const store = createCartStore();
  return (
    <CartStoreProvider.Provider value={store}>
      {children}
    </CartStoreProvider.Provider>
  );
}

export function AddToCartButton() {
  const add = useCart()(({ add }) => add);
  return (
    <button
      onClick={add as () => void}
      className="rounded-full bg-green-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      Add to cart
    </button>
  );
}
