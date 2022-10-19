import React from "react";

import { ButtonBox } from "./styles";

import { FiRefreshCcw } from "react-icons/fi";

function UpdateButton() {
  return (
    <ButtonBox
      whileHover={{
        filter: "brightness(1.5)",
      }}
    >
      <FiRefreshCcw color="white" size={16} />
    </ButtonBox>
  );
}

export default UpdateButton;
