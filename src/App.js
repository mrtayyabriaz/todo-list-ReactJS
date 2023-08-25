import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./MyCompanents/header";
import AddToDo from "./MyCompanents/AddToDo";
import Album from "./MyCompanents/Album";
import Todos from "./MyCompanents/todos"; 
import Abouts from "./MyCompanents/Abouts";
import Footer from "./MyCompanents/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 //===== Get Todos start =====
 let initTodos;
 if (localStorage.getItem("todos") === null) {
  initTodos = [];
 } else {
  initTodos = JSON.parse(localStorage.getItem("todos"));
 }
 //===== Get Todos end =====

 //========== All todos===========
 const [todos, settodos] = useState(initTodos);
 //========== All todos===========

 //============ use Effect ===================
 useEffect(() => {
  //===== update Todos =====
  localStorage.setItem("todos", JSON.stringify(todos));
  //===== update Todo =====
 }, [todos]);
 //============ use Effect ===================

 //===== Delete todo function start =====
 const OnDelete = (todo) => {
  settodos(
   todos.filter((e) => {
    return e !== todo;
   })
  );

  //===== update Todos =====
  localStorage.setItem("todos", JSON.stringify(todos));
  //===== update Todo =====
 };
 //===== Delete todo function end =====

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
  <Router>
   <Header title="ToDo List" SearchBar="False" />

   <Routes>
    <Route
     exact
     path="/"
     element={
      <>
       <AddToDo addTodo={addTodo} />
       <Todos todos={todos} OnDelete={OnDelete} />
      </>
     }
    ></Route>

    <Route path="/abouts" element={<Abouts />}></Route>
    <Route path="/album" element={<Album />}></Route>
   </Routes>

   <Footer />
  </Router>
 );
}

export default App;
