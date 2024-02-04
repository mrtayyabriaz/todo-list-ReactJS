import React, {  useState } from 'react'
// import React, { useEffect} from 'react'
import useTodo from '../context/TodoContext'

export default function todoitem({ todo }) {
  const { OnDelete, OnEdit } = useTodo();
  const [newTodo, setnewTodo] = useState(todo);
  const [editAble, seteditAble] = useState(false);
  // useEffect(() => {
  //   console.log(newTodo);
  // }, [newTodo])

  return (
    <>
      <div className="container-fluid my-3 todo-item row">
        <div className='col-10'>
          <h2>
            <input type="text"
              className='editinput'
              value={newTodo.title}
              onChange={(e) => { setnewTodo({ ...newTodo, title: e.target.value }) }}
              readOnly={!editAble}
            />
          </h2>
          <h6><input type="text"
            className='editinput'
            value={newTodo.desc}
            onChange={(e) => { setnewTodo({ ...newTodo , desc: e.target.value}) }}
            readOnly={!editAble}
          /></h6>
        </div>
        <div className='col-2 d-flex flex-column'>
          <button className="btn btn-delete"
            onClick={() => { OnDelete(todo.tno) }}
          >❌</button>
          <button className="btn btn-delete"
            onClick={() => {
              if (editAble) {
                seteditAble(false);
                OnEdit(newTodo);
              } else {
                seteditAble(true);
              }
            }}>
            {editAble ? '📁' : '📝'}</button>
        </div>
      </div>
    </>
  )
}
