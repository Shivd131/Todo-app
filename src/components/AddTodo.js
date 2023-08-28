import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-500 roundedf border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:rind-indigo-900 text-base transition-colors ease-in-out duration-200"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">ADD TODO</button>
    </form>
  );
};

export default AddTodo;
