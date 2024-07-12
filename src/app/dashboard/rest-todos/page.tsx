import { TodoGrid } from "@/app/todos";
import prisma from "@/lib/prisma";

export default async function NamePage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      updatedAt: "asc",
    },
  });

  return (
    <div>
      {/* TODO: src/components <WidgetItem /> */}
      <TodoGrid todos={todos} />
      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}
