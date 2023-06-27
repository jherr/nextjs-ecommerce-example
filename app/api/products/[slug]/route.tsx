import { NextResponse } from "next/server";
import { getProductBySlug } from "@/src/products";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  return NextResponse.json(await getProductBySlug(params.slug));
}
