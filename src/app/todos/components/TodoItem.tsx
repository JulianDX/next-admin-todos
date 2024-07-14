"use client";

import React, { startTransition, useOptimistic } from "react";
import styles from "./TodoItem.module.css";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import { Todo } from "@prisma/client";
import { toggleTodo } from "../actions/todo-actions";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  /*  const { refresh } = useRouter(); */

  /* const toggleTodo = async (id: string, complete: boolean) => {
    await apiCall(id, complete);
    refresh();
  }; */

  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo, // Valor inicial
    (state, newCompleteValue: boolean) => ({
      ...state, // Valor por el que queremos que se vea reemplazado en pantalla
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      await toggleTodo(todoOptimistic.id);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div
      className={`${
        todoOptimistic.complete ? styles.todoDone : styles.todoPending
      }`}
    >
      <div
        onClick={() => onToggleTodo()}
        className="p-1 bg-gray-500 bg-opacity-20 rounded-lg cursor-pointer"
      >
        {todoOptimistic.complete ? (
          <IoIosCheckbox size={25} />
        ) : (
          <IoIosCheckboxOutline size={25} />
        )}
      </div>
      <div>{todoOptimistic.description}</div>
    </div>
  );
};
