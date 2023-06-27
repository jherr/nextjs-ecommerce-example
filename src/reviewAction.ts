"use server";
import { revalidatePath } from "next/cache";

import { addReview } from "./products";

export const reviewAction = async (
  slug: string,
  text: string,
  name: string
) => {
  await addReview(slug, text, name);
  revalidatePath(`/products/${slug}`);
};
