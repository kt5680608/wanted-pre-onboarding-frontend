import styled from "styled-components";

export const ButtonBox = styled.div`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--g-color-background-content);
  border-radius: 50%;
  padding: 6px;
  position: absolute;
  top: 92%;
  left: 92%;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
