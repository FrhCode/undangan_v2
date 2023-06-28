import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const messages = await prisma.message.findMany();

  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const { name, content } = (await request.json()) as {
    name: string;
    content: string;
  };

  await prisma.message.create({ data: { name, content } });

  return NextResponse.json("OK");
}
