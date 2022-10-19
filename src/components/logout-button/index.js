import React from "react";
import { ButtonBox } from "./style";

function LogoutButton({ setToken }) {
  return (
    <ButtonBox
      whileHover={{ filter: "brightness(1.5)", scale: 1.05 }}
      onClick={() => {
        localStorage.removeItem("token");
        setToken(null);
      }}
    >
      log out
    </ButtonBox>
  );
}

export default LogoutButton;
