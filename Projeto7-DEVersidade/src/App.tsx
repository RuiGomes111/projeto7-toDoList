import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import Search from "./components/search";
import search from "./components/search";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "go to shopping",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir ao supermercado",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Treinar 30 min",
      category: "Saúde",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Reunião com a equipe",
      category: "Trabalho",
      isCompleted: false,
    },
    
  ]);
  const addTodo=(text, category)=>{
    const newTodos=[...todo,{
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted:false
    }]
    setTodo(newTodos)
  }

 const removeTodos=(id)=>{
  const newTodos=[...todo]
  const filtro= newTodos.filter(todo=>todo.id !==id? todo: null)
  setTodo(filtro)  
  
    
  }

  const completedTodos=(id)=>{
    const newTodos= [...todo]
    newTodos.map(todo=> todo.id === id? todo.isCompleted = !todo.isCompleted: todo)
    setTodo(newTodos)
  }

  const [search, setSearch]= useState("")
  return (
    <div className=" bg-[#292A2D] rounded-2xl shadow-md py-10 px-3  w-full  sm:max-w-2xl lg:max-w-4xl xl:max-w-[600px] mx-auto ">
      <h1 className="text-blue-500 text-4xl mb-5 font-bold">
        Lista de tarefas
      </h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list space-y-4 ">
        {todo
        .filter((todo)=> todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => (
          <Todo key= {todo.id} todo={todo} removeTodos={removeTodos} completedTodos={completedTodos}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
