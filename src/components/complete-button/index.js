import React, { useState } from "react";

import { ButtonBox } from "./style";

import { updateTodoAPI } from "../../api/todo";

function CompleteButton({ todoItem, updateTodoItem }) {
  const [todo, setTodo] = useState(todoItem);
  const [isCompletedStateUpdate, setIsCompletedStateUpdate] = useState(false);

  return (
    <ButtonBox
      complete={todo.isCompleted ? 1 : 0}
      onClick={() => {
        setTodo({ ...todo, isCompleted: !todo.isCompleted });
        updateTodoAPI(
          { ...todo, isCompleted: !todo.isCompleted },
          updateTodoItem
        );
      }}
      whileHover={{
        filter: "brightness(1.5)",
      }}
    >
      {todo.isCompleted ? "완료" : "미완료"}
    </ButtonBox>
  );
}

export default CompleteButton;
