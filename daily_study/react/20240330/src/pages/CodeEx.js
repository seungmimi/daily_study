import React, { useState } from 'react'

const CodeEx = () => {
  const [todoList, setTodoList] = useState([
    {id: 1, content: "todo 1", completion: false},
    {id: 2, content: "todo 2", completion: false},
    {id: 3, content: "todo 3", completion: false}
  ]);
  const handleCheckTodo = (e) => {
    const changeTodoList = todoList.map(todo =>
      todo.id === e.id ? { ...todo, completion: !todo.completion } : todo
    );
    setTodoList(changeTodoList);
  }
  //todo 추가입력폼 ui
  const [addTodo, setAddTodo] = useState('');
  const handleAddTodo = (e) => {
    setAddTodo(e.target.value);
  }

  const handleSubmitTodo = (e, addTodo) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {id: todoList.length+1, content: addTodo, completion: false}
    ]);
    setAddTodo('');
  }

  return (
    <div>
      <h2>todoList</h2>
      <ul>
        {todoList.map((e,i) => {
          return <li key={i}>
            <label>
              {e.content}
              <input type='checkbox' checked={e.completion} onClick={() => {handleCheckTodo(e)}} readOnly/>
            </label>
          </li>
        })}
      </ul>
      <form onSubmit={(e) =>handleSubmitTodo(e, addTodo)}>
        <input type='text' value={addTodo} onChange={(e) => {handleAddTodo(e)}}/>
        <button type='submit'>추가하기</button>
      </form>
    </div>
  )
}

export default CodeEx
