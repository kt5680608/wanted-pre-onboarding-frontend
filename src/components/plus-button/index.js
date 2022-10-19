import React from "react";

import { BsPlus } from "react-icons/bs";

import { ButtonBox } from "./styles";

function PlusButton() {
  return (
    <>
      <ButtonBox
        onClick={() => {
          document.getElementById("hoondesign-modal")?.click();
        }}
      >
        <BsPlus size={40} color="white" style={{ strokeWidth: ".3px" }} />
      </ButtonBox>
    </>
  );
}

export default PlusButton;
