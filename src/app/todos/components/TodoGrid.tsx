import { Todo } from "@prisma/client";
import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { NewTodo } from "./NewTodo";

interface TodoGridProps {
  todos: Todo[];
}

export const TodoGrid = ({ todos }: TodoGridProps) => {
  return (
    <>
      <div className="p-10 pt-5">
        <NewTodo />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};
