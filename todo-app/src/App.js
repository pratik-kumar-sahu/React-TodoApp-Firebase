import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./component/Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const motivs = [
    "“When I wrote this code, only God and I understood what I did. Now only God knows 😛”",
    "“Eat, Sleep, Code, Repeat 👨🏻‍💻”",
    "“Start your day with making your bed and a Todo List 😉”",
    '“JavaScript logic: 0 == "0" and 0 == []; therefore, "0" != [] 😁”',
  ];
  const [motiv, setMotiv] = useState(
    motivs[Math.floor(Math.random() * motivs.length)]
  );

  // when app loads, listen to firebase and fetch new todos as they got added and removed
  useEffect(() => {
    // if input variable changes this useEffect will get fired everytime
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  function addTodo(event) {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setMotiv(motiv);
    // setTodos([...todos, input]);
  }

  function inputHandleChange(event) {
    setInput(event.target.value);
    // console.log(input);
  }

  return (
    <div className="App">
      <p>This line changes with every page refresh 👇</p>
      <h2 style={{ margin: "1rem 0" }}>{motiv}</h2>

      <FormControl style={{ width: "15rem" }}>
        <InputLabel>Write something...✏️</InputLabel>
        <Input onChange={inputHandleChange} value={input} />
        <Button
          size="small"
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="outlined"
          color="primary"
        >
          Add Todo
        </Button>
      </FormControl>

      <ul style={{ marginTop: "1rem" }}>
        {todos.map((todo) => (
          <Todo todoValue={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
