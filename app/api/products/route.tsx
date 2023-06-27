import { NextResponse } from "next/server";
import { getProducts } from "@/src/products";

export async function GET() {
  return NextResponse.json(await getProducts());
}
