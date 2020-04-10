import React from "react";
export default function Show(todo, addTodo, newtodo) {
  const deletetodo = (e) => {
    todo.splice(e.target.name, 1);
    addTodo([...todo]);
  };
  const addChange = (e) => {
    newtodo ? (todo[e.target.name] = newtodo) : alert("please write a todo");
    addTodo([...todo]);
  };
  const change = (e) => {
    todo[e.target.name] = e.target.value;
    addTodo([...todo]);
  };
  return (
    <>
      <div className="col-4"></div>
      <div className="todolist col-4">
        {todo.map((el, i) => {
          return (
            <>
              <input name={i} value={el} onChange={change} />
              <button name={i} onClick={addChange}>
                edit
              </button>
              <button name={i} onClick={deletetodo}>
                delete
              </button>
            </>
          );
        })}
      </div>
      <div className="col-4"></div>
    </>
  );
}
