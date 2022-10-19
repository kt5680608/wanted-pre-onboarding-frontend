import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-family: RFLEX-REGULAR;
  font-size: 24px;
  color: black;
`;

export const ModalInput = styled.input`
  border: 1px lightgray solid;
  height: 36px;
  width: 50%;
  border-radius: 24px;
  padding: 12px;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #000000;
  color: white;
  font-family: RFLEX-REGULAR;
  font-size: 16px;
  border-radius: 24px;
  padding: 12px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
`;
