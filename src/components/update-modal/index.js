import React, { useState } from "react";

import { Modal } from "hoondesign";

import { updateTodoAPI } from "../../api/todo";

import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalInput,
  ModalTitle,
  SubmitButton,
} from "./styles";

function UpdateModal({ todoItem, updateTodoItem }) {
  const [todo, setTodo] = useState(todoItem);
  const updateTodo = () => {
    updateTodoAPI(todo, updateTodoItem);
    document.getElementById("hoondesign-modal-update")?.click();
    setTodo("");
  };
  return (
    <Modal id="hoondesign-modal-update" display="none" modalCloseButton={false}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>update your task</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalInput
            value={todo.todo}
            onChange={(e) => {
              setTodo({ ...todo, todo: e.target.value });
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                updateTodo();
              }
            }}
          ></ModalInput>
          <SubmitButton
            onClick={() => {
              updateTodo();
            }}
          >
            submit
          </SubmitButton>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
}

export default UpdateModal;
