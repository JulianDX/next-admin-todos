import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";

  const todos = await prisma.todo.findMany({
    take: +take
  });

  return NextResponse.json(
    {
      todos,
    },
    { status: 200 }
  );
}
