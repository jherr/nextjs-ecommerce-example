"use client";

import { createContext } from "react";
import { create } from "zustand";

type StoreProps = {
  slug: string;
  reviews: {
    id: string;
    text: string;
    name: string;
  }[];
};

const createStore = ({ slug, reviews }: StoreProps) => create<StoreProps>(() => {
  slug,
  reviews
})

const StoreProvider = createContext<ReturnType<createStore> | null>(null);

function Reviews({ slug, reviews }: StoreProps) {
  return (
    <>
      <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>
      <div className="mt-6 space-y-2 divide-y divide-gray-200 border-b border-t border-gray-200 pb-3">
        {reviews.map((review) => (
          <div key={review.id} className="">
            <div className="mt-4">
              <div
                className="mt-3 space-y-6 text-sm text-gray-500"
              >{review.text}</div>
            </div>
            <div className="mt-6 flex items-center text-sm">
              <p className="font-medium text-gray-900">{review.name}</p>
            </div>
          </div>
        ))}
      </div>

      <form className="mt-6">
        <div className="isolate -space-y-px rounded-md shadow-sm">
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="block text-xs font-medium text-gray-900">
              Comment
            </label>
            <input
              type="text"
              name="comment"
              id="comment"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Fantastic shoes"
            />
          </div>
          <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Review
          </button>
        </div>
      </form>
    </>
  );
}

export default Reviews;
