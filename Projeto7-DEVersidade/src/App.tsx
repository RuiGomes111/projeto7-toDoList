import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import Search from "./components/search";
import Filter from "./components/filter";
function App() {
  const [todo, setTodo] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter]=useState("All")

  useEffect(() => {
    const saved = localStorage.getItem("dados");
    if (saved) {
      setTodo(JSON.parse(saved));
    }
  }, []);

  //add tarefas
  const addTodo = (text, category) => {
    const newTodos = [
      ...todo,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodo(newTodos);

    localStorage.setItem("dados", JSON.stringify(newTodos));
  };

  //remove tarefas
  const removeTodos = (id) => {
    const newTodos = [...todo];
    const filtro = newTodos.filter((todo) => (todo.id !== id ? todo : null));
    setTodo(filtro);
  };

  // completar tarefas
  const completedTodos = (id) => {
    const newTodos = [...todo];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodo(newTodos);
  };


  
 
  return (

    <div className=" bg-[#ADACB5] rounded-2xl shadow-md py-10 px-3  w-full  sm:max-w-2xl lg:max-w-4xl xl:max-w-[600px] mx-auto ">
      <h1 className="text-[#272727] text-4xl mb-5 font-bold">
        Lista de tarefas
      </h1>

      <div className="flex justify-between">

        {/* Filtrar tarefas */}
        <Filter filter={filter} setfilter={setFilter}/>

        <p>Total de tarefas: {todo.length}</p>
        <p className="text-[#1E3A8A]">Concluidas: {todo.filter((p)=> p.isCompleted).length}</p>
        <p className="text-yellow-600">Pendestes: {todo.filter((p)=> ! p.isCompleted).length}</p>
        
      </div>
        {/* Pesquisar tarefas*/}
        <Search search={search} setSearch={setSearch} />

      <div className="todo-list space-y-4 ">
        {todo
          .filter((todo)=> filter==="All"? true: filter=== "completed"? todo.isCompleted: ! todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodos={removeTodos}
              completedTodos={completedTodos}
              
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
