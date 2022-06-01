import React, { useState } from 'react';
import './App.css';

function App() {
  
  let dayName = new Date().toLocaleString('en-US', {weekday: 'long'})
  

  const [toDo, setTodo] = useState('')
  const [toDos, setTodos] = useState([])
  const [dltToDos, setDltTodos] = useState([])



  return (
    <div className="app">
      <div className='deleted_todos'>
        <h1>Deleted</h1>
        {
          dltToDos.map((obj, index) => {

            return (
              <div className="todo" key={index}>

                <div className="left">

                  <i className="fas fa-redo" onClick={() => {
                    setDltTodos(dltToDos.filter(obj2 => (obj2.id !== obj.id)))

                    dltToDos.filter(obj2 => {
                      if (obj2.id === obj.id) setTodos([...toDos, obj2])
                      return null
                    })

                  }} />

                  <p>{obj.text} {"\n"} {new Date(obj.id).toLocaleString()}</p>

                </div>

                <div className="right">
                  <i className="fas fa-times" style={{ "color": "red" }}
                    onClick={
                      () => {
                        const newTodos = dltToDos.filter(obj2 => obj2.id !== obj.id);
                        setDltTodos(newTodos);

                      }
                    }
                  ></i>
                </div>

              </div>
            )
          })
        }

      </div>

      <div className='main'>
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
                          const newTodos = toDos.filter(obj2 => obj2.id !== obj.id);
                          setTodos(newTodos);
                          toDos.filter(obj2 => {
                            if (obj2.id === obj.id) setDltTodos([...dltToDos, obj2])
                            return null
                          })
                        }
                      }
                    ></i>
                  </div>

                </div>
              )
            })
          }
        </div>


      </div>

      <div className='completed'>
        <h1 > Completed</h1>
        {
          toDos.map((obj, index) => {


            if (!obj.status) {
              return null
            }
            return (

              <div className="todo_completed" key={index}>
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
                        const newTodos = toDos.filter(obj2 => obj2.id !== obj.id);
                        setTodos(newTodos);
                        toDos.filter(obj2 => {
                          if (obj2.id === obj.id) setDltTodos([...dltToDos, obj2])
                          return null
                        })
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
