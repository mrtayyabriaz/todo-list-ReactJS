import "./style/App.css";
import React, { useState, useEffect } from "react";
import Header from "./MyCompanents/Header";
import AddToDo from "./MyCompanents/AddToDo";
// import Album from "./MyCompanents/Album";
import Todos from "./MyCompanents/Todos";
import Use from "./MyCompanents/Use";
import Footer from "./MyCompanents/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvidor } from "./context/TodoContext";

function App() {
  //===== Get Todos start =====
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  //===== Get Todos end =====

  //========== todos stats ===========
  const [todos, settodos] = useState(initTodos);
  //========== todos stats ===========

  //============ update Todos ===================
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //============ update Todos ===================

  //===== Delete todo function start =====
  const OnDelete = (todoid) => {
    settodos(
      todos.filter((todo) => {
        return todo.tno !== todoid;
      })
    );

    //===== update Todos =====
    localStorage.setItem("todos", JSON.stringify(todos));
    //===== update Todo =====
  };
  //===== Delete todo function end =====

  //============ edit todos ( START ) ===============
  const OnEdit = (newTodo) => {
    settodos(todos.map((prev) => prev.tno === newTodo.tno ? newTodo : prev));
  }
  //============ edit todos  ( END )  ===============

  //===== Add todo function start =====
  let addTodo = (title, Desc) => {
    let tno;
    if (todos.length === 0) {
      tno = 1;
    } else {
      tno = todos[todos.length - 1].tno + 1;
    }
    let mytodo = {
      tno: tno,
      title: title,
      desc: Desc,
    };

    settodos([...todos, mytodo]);
  };
  //===== Add todo function end =====

  return (
    <>
      <TodoProvidor value={{ todos, OnDelete, addTodo, OnEdit }}>

        <Router>
          <Header title="ToDo List" SearchBar="False" />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <AddToDo />
                  <Todos />
                </>
              }
            ></Route>

            <Route path="/use" element={<Use />}></Route>
            {/* <Route path="/album" element={<Album />}></Route> */}
          </Routes>

          <Footer />
        </Router>
      </TodoProvidor>
    </>
  );
}

export default App;
