import React from 'react'

export default function todoitem({todo, OnDelete}) {
    
    return (
        <>
            <div className="container-fluid my-3 todo-item">
                <h2>{todo.title}</h2>
                <h6>{todo.desc}</h6>
                <button className="btn btn-danger btn-sm" onClick={() => {OnDelete(todo)}}>Delete</button>
            </div>
        </>
    )
}
