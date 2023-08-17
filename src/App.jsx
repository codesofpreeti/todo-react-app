import React, { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  const [listToDo, setListToDo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListToDo([...listToDo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListToDO = [...listToDo];
    newListToDO.splice(key, 1);
    setListToDo([...newListToDO]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <h1>My ToDo App:</h1>
        <br />
        <ToDoInput addList={addList} />
        {listToDo.map((listItem, i) => {
          return (
            <ToDoList
              key={i}
              item={listItem}
              index={i}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
