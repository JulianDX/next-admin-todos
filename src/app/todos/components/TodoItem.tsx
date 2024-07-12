"use client";

import React from "react";
import styles from "./TodoItem.module.css";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { apiCall } from "../helpers";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { refresh } = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    await apiCall(id, complete);
    refresh();
  };

  return (
    <div className={`${todo.complete ? styles.todoDone : styles.todoPending}`}>
      <div
        onClick={() => toggleTodo(todo.id, todo.complete)}
        className="p-1 bg-gray-500 bg-opacity-20 rounded-lg cursor-pointer"
      >
        {todo.complete ? (
          <IoIosCheckbox size={25} />
        ) : (
          <IoIosCheckboxOutline size={25} />
        )}
      </div>
      <div>{todo.description}</div>
    </div>
  );
};
