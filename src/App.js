import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function App() {
  const [newtodo, setTodo] = useState("");
  const [todo, addTodo] = useState([]);
  const [show, setShow] = useState(false);
  const [cible, setcible] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    todo
      ? newtodo
        ? addTodo([...todo, newtodo])
        : alert("please write a todo")
      : addTodo([newtodo]);
    setTodo("");
  };
  const deletetodo = (e) => {
    todo.splice(e.target.name, 1);
    addTodo([...todo]);
  };
  const change = (e) => {
    setTodo(e.target.value);
  };
  const addChange = () => {
    newtodo ? (todo[cible] = newtodo) : alert("please write a todo");
    addTodo([...todo]);
    setTodo("");
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setcible(e.target.name);
  };
  return (
    <div className="App">
      <input
        placeholder="add your todo"
        type="text"
        onChange={handleChange}
        value={newtodo}
      ></input>
      <Button onClick={add}>add</Button>
      <div className="container-fluid row">
        <div className="todolist col-12">
          {todo.map((el, i) => {
            return (
              <div className="todo row">
                <h3 className="col-8" style={{ textAlign: "center" }}>
                  {el}
                </h3>
                <Button
                  className="col-2"
                  variant="primary"
                  name={i}
                  onClick={handleShow}
                >
                  edit
                </Button>
                <Button
                  className="col-2"
                  variant="secondary"
                  name={i}
                  onClick={deletetodo}
                >
                  delete
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              onChange={change}
              placeholder={todo[cible]}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addChange}>
              Edit Todo
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default App;
