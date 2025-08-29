import React from "react";

const todo = ({ todo, removeTodos, completedTodos }) => {
  return (
    <div className="">
      <div
        className={`todo flex  justify-between items-start bg-white rounded ${
          todo.isCompleted
            ? "line-through border-l-[6px] border-green-600 "
            : "bg-white"
        }`}
      >
        <div className="content text-[#272727] px-2 ">
          <p>{todo.text}</p>
          <p>({todo.category})</p>
        </div>
        <div className="flex gap-1 transition-all duration-600 ease-in-out ">
          <button
            className="bg-green-600 px-1 py-2 ronded-lg border-2    hover:scale-110"
            onClick={() => completedTodos(todo.id)}
          >
            Completar
          </button>
          <button
            className="bg-red-600 px-4 py-1 mr-1 rounded-lg border-2  hover:scale-110"
            onClick={() => removeTodos(todo.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default todo;
