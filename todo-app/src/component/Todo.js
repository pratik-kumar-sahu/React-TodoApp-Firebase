import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import db from "../firebase";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

function Todo(props) {
  return (
    <List className="todo-lists">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "15rem",
          margin: "0 auto",
        }}
      >
        <ListItem>
          <ListItemText primary={props.todoValue.todo} />
        </ListItem>
        <DeleteForeverRoundedIcon
          style={{ color: "#FF0000" }}
          onClick={(event) =>
            db.collection("todos").doc(props.todoValue.id).delete()
          }
        />
      </div>
    </List>
    // <div>
    //   <li>{props.todoValue}</li>
    // </div>
  );
}

export default Todo;
