import { NextResponse } from "next/server";
import { getProductBySlug, addReview } from "@/src/products";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  return NextResponse.json(
    (await getProductBySlug(params.slug))?.reviews || null
  );
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const body = await req.json();
  await addReview(params.slug, body.text, body.name);
  return NextResponse.json(
    (await getProductBySlug(params.slug))?.reviews || null
  );
}
