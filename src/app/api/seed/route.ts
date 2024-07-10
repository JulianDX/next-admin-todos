import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  // Purgar base

  await prisma.todo.deleteMany();

  /*  const todo = await prisma.todo.create({
    data: { description: "Estudiar Next" },
  }); */

  await prisma.todo.createMany({
    data: [
      {
        description: "Prueba 1",
        complete: true,
      },
      {
        description: "Prueba 2",
      },
      {
        description: "Prueba 3",
      },
      {
        description: "Prueba 4",
      },
    ],
  });

  return NextResponse.json(
    {
      message: "Seed executed",
    },
    { status: 200 }
  );
}
