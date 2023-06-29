"use client";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

import { useCart } from "./Cart";

function Header() {
  const count = useCart()(({ count }) => count);
  return (
    <header className="bg-blue-800 shadow flex px-4 py-2 justify-center items-center mb-4 rounded-b-xl">
      <div className="text-white flex-grow text-3xl font-bold">
        <Link href="/">Shoes</Link>
      </div>
      <Menu as="div" className="relative">
        <Menu.Button className="rounded-full bg-green-700 text-white border border-white h-12 w-12 flex items-center justify-center font-bold text-xl">
          <span>{count}</span>
        </Menu.Button>
        <Transition
          as="span"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-1 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2">
              <Menu.Item as="div" className="text-black">
                Foo
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}

export default Header;
