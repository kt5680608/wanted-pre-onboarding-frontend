import React from "react";

import { MdDeleteForever } from "react-icons/md";

import { deleteTodoAPI } from "../../api/todo";

import { ButtonBox } from "./style";

function DeleteButton({ id, deleteTodoItem }) {
  return (
    <ButtonBox
      onClick={() => {
        deleteTodoAPI(id, deleteTodoItem);
      }}
      whileHover={{
        filter: "brightness(1.5)",
      }}
    >
      <MdDeleteForever size={20} color="white" />
    </ButtonBox>
  );
}

export default DeleteButton;
