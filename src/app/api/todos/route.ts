import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";

  const todos = await prisma.todo.findMany({
    take: +take,
  });

  return NextResponse.json(
    {
      todos,
    },
    { status: 200 }
  );
}

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false),
});

export async function POST(request: Request) {
  const body = await postSchema.validate(await request.json());

  await prisma.todo.create({ data: body });

  return NextResponse.json(body);
}

export async function DELETE() {
  await prisma.todo.deleteMany({
    where: {
      complete: true,
    },
  });

  return NextResponse.json({ msg: "Todos elminados" });
}
