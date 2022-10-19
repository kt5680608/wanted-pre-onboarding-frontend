import React from "react";

import { DeleteButton, UpdateButton, UpdateModal, CompleteButton } from "../";

import { ButtonContainer, MainContainer, TodoItem } from "./styles";

function TodoCard({ todoItem, deleteTodoItem, updateTodoItem }) {
  return (
    <MainContainer>
      <TodoItem>{todoItem.todo}</TodoItem>
      <ButtonContainer>
        <CompleteButton todoItem={todoItem} updateTodoItem={updateTodoItem} />
        <DeleteButton id={todoItem.id} deleteTodoItem={deleteTodoItem} />
        <UpdateModal updateTodoItem={updateTodoItem} todoItem={todoItem} />
        <div
          onClick={() => {
            document.getElementById("hoondesign-modal-update")?.click();
          }}
        >
          <UpdateButton />
        </div>
      </ButtonContainer>
    </MainContainer>
  );
}

export default TodoCard;
