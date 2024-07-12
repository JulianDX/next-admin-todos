"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  const updated = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete: !todo?.complete,
    },
  });

  revalidatePath("http://localhost:3000/dashboard/server-todos");
  return updated;
};
