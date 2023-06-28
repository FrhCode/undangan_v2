import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const messages = await prisma.message.findMany();

  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
