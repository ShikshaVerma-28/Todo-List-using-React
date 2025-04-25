import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import { AddTodo } from './MyComponents/AddTodo';
// import { useEffect } from 'react';
import React, { useState, useEffect } from 'react';

function App() {
  // let myvariable=345;
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {
    console.log("I'm onDelete of Todo", todo);
    //Deleting this way in react will not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const addTodo = (title, desc) => {
    console.log("I'm adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  


  //esa bhi kr skte he pr hme nyi storage ki jrurt pdegi isko use kiya to hr bar purani list hi aaygi

  // const [todos, setTodos] = useState([
  // {
  //   sno: 1,
  //   title: "Go to the market",
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 2,
  //   title: "Go to the mall",
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 3,
  //   title: "Go to the ghat",
  //   desc: "You need to go to the market to get this job done"
  // },
  // ]);

  //therefore we use this......

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  
  }, [todos])
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
