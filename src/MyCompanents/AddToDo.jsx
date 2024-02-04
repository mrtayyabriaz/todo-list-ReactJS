import React, { useState } from 'react'
import useTodo from '../context/TodoContext';

export default function AddToDo() {
  const {addTodo} = useTodo(); 

  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!Title || !Desc) {
      alert("Title or Description could not be empty.");
    } else {
      addTodo(Title, Desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className="container my-3">
      <h2 className="text-center w-100">Add Todo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="ToDoTitle" className="form-label">Title</label>
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="ToDoTitle" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="ToDoDesc" className="form-label">Description</label>
          <textarea type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="ToDoDesc" />
        </div>
        <button type="submit" className="btn btn-success w-100">Add</button>
      </form>
    </div>
  )
}
