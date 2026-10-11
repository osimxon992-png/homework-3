import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlicer.js";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  let dispatch = useDispatch();
  let [input, setInput] = useState("");
  let todo = useSelector((state) => state.todos.todo);

  function Addinput(e) {
    e.preventDefault();
    if (input.trim() === "") {
      toast.warning("maydonni to'ldiring");
    } else {
      dispatch(addTodo(input));
      setInput("");
      toast.success("todo muvaffaqiyatli qo'shildi");
    }
  }

  function Removeinput(item) {
    dispatch(removeTodo(item.id));
    toast.error(`"${item.title}" o'chirildi`);
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <section className="todo-app">
        <h1 className="todo-title">Todo List</h1>

        <form className="todo-form" onSubmit={Addinput}>
          <input
            className="todo-input"
            type="text"
            value={input}
            placeholder="Enter todo title"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-add" type="submit">
            Add to do
          </button>
        </form>

        <ul className="todo-list">
          {todo.map((item) => (
            <li className="todo-item" key={item.id}>
              <div className="todo-text">
                <h2>{item.title}</h2>
              </div>
              <button
                className="btn btn-remove"
                onClick={() => Removeinput(item)}
              >
                remove todo
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
