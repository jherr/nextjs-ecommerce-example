import { createContext, useContext } from "react";
import { create } from "zustand";

type StoreProps = {
  reviews: {
    id: number;
    text: string;
    name: string;
  }[];
};

type AddReviewAction = (
  slug: string,
  text: string,
  name: string
) => Promise<void>;

// Helper function to create a zustand store hook that we then store in the context
const createStore = ({
  slug,
  reviews,
  reviewAction,
}: StoreProps & {
  slug: string;
  reviewAction: AddReviewAction;
}) =>
  create<
    StoreProps & {
      name: string;
      text: string;
      setName: (name: string) => void;
      setText: (text: string) => void;
      sendReview: () => void;
    }
  >((set, get) => ({
    slug,
    reviews,
    reviewAction,
    name: "",
    text: "",
    setName: (name) => set({ name }),
    setText: (text) => set({ text }),
    sendReview: async () => {
      await reviewAction(slug, get().name, get().text);
      set({ name: "", text: "" });
    },
  }));

// The context we use to store the zustand store hook
const StoreProvider = createContext<ReturnType<typeof createStore> | null>(
  null
);

// The hook we use to access the zustand store hook
export const useStore = () => useContext(StoreProvider)!();

export type ReviewsContainerProps = StoreProps & {
  slug: string;
  reviewAction: AddReviewAction;
};

// A React component that wraps the children in the context provider that contains the zustand store hook
export function ReviewsContainer({
  slug,
  reviews,
  reviewAction,
  children,
}: ReviewsContainerProps & {
  children: React.ReactNode;
}) {
  const store = createStore({ slug, reviews, reviewAction });
  return (
    <StoreProvider.Provider value={store}>{children}</StoreProvider.Provider>
  );
}
