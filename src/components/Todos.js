import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todoSlice from "../features/todo/todoSlice";
import { removeTodo } from "../features/todo/todoSlice";

// const { deleteTodo } = todoSlice.actions;

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

//   const handleDelete = (todoId) => {
//     dispatch(deleteTodo(todoId));
//   };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between py-2 border-b">
          <span className="text-gray-800">{todo.text}</span>
          <button
            className="px-2 py-1 text-red-600 hover:text-red-800"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
