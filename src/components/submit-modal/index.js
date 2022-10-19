import React, { useState } from "react";

import { Modal } from "hoondesign";

import { addTodoAPI } from "../../api/todo";

import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalInput,
  ModalTitle,
  SubmitButton,
} from "./styles";

function SubmitModal({ addTodoItem, todoList }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    addTodoAPI(todo, addTodoItem, todoList);
    document.getElementById("hoondesign-modal")?.click();
    setTodo("");
  };
  return (
    <Modal id="hoondesign-modal" display="none" modalCloseButton={false}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>add your task</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ModalInput
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                addTodo("");
              }
            }}
          ></ModalInput>
          <SubmitButton
            onClick={() => {
              addTodo();
            }}
          >
            submit
          </SubmitButton>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
}

export default SubmitModal;
