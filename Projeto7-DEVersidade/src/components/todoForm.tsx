import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setvalue] = useState("");
  const [category, setCategory] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category)
    setCategory("");
    setvalue("");
  };
  return (
    <div>
      <h2 className="text-3xl text-[#272727]">
        <strong>Criar Tarefa</strong>
      </h2>
      <form
        action=""
        onSubmit={handlesubmit}
        className="flex flex-col space-y-3"
      >
        <input
          className="px-2"
          type="text"
          placeholder="Qual é a sua Tarefa?"
          onChange={(e) => setvalue(e.target.value)}
          value={value}
         
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">==Selecione uma categoria==</option>
          <option value="compras">Compras</option>
          <option value="pessoal">pessoal</option>
          <option value="estudos">Estudos</option>
          <option value="trabalho">Trabalho</option>
        </select>
        <button
          type="submit"
          className="bg-[#1E3A8A] w-full py-2 rounded border-1 text-lg"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
