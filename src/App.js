import React, { useState } from 'react';
import './App.css';

function App() {

  let dateString = new Date().toISOString().slice(0, 10)
  let dayName = new Date(dateString).toLocaleString('en-us', { weekday: 'long' })

  const [toDo, setTodo] = useState('')
  const [toDos, setTodos] = useState([])



  return (
    <div className="app">

      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input value={toDo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}

          type="text" placeholder="🖊️ Add item..." />

        <i className="fas fa-plus" onClick={
          () => {
            setTodo('')
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
        }
        > </i>
      </div>

      <div className="todos">
        {
          toDos.map((obj, index) => {


            if (obj.status) {
              return null
            }
            return (
              <div className="todo" key={index}>

                <div className="left">

                  <input type="checkbox" name="" id="" checked={obj.status}
                    onChange={(e) => {

                      setTodos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} />

                  <p>{obj.text} {"\n"} {new Date(obj.id).toLocaleString()}</p>

                </div>

                <div className="right">
                  <i className="fas fa-times"
                    onClick={
                      () => {
                        const newTodos = toDos.filter((obj2) => obj2.id !== obj.id);
                        setTodos(newTodos);
                      }
                    }></i>
                </div>

              </div>
            )
           })
          }

{
          toDos.map((obj, index) => {


            if (!obj.status) {
              return null
            }
            return (
              
              <div className="todo" key={index}>
                <div className="left">

                  <input type="checkbox" name="" id="" checked={obj.status}
                    onChange={(e) => {

                      setTodos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} />

                  <p>{obj.text} {"\n"} {new Date(obj.id).toLocaleString()}</p>

                </div>

                <div className="right">
                  <i className="fas fa-times"
                    onClick={
                      () => {
                        const newTodos = toDos.filter((obj2) => obj2.id !== obj.id);
                        setTodos(newTodos);
                      }
                    }></i>
                </div>

              </div>
            )
           })
          }



      </div>

    </div>
  );
}

export default App;
