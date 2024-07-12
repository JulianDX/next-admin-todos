import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { boolean, object, string } from "yup";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!todo) {
    return NextResponse.json(
      { msg: "No se ha encontrado el todo" },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = object({
  complete: boolean().optional().default(false),
});

export async function PUT(request: Request, { params }: Segments) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!todo) {
    return NextResponse.json(
      { msg: "No se ha encontrado el todo" },
      { status: 404 }
    );
  }

  const body = await putSchema.validate(await request.json());

  const updated = await prisma.todo.update({
    where: {
      id: params.id,
    },
    data: {
      complete: !body.complete,
    },
  });

  return NextResponse.json(updated);
}
