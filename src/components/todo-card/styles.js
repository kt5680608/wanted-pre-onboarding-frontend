import styled from "styled-components";

export const MainContainer = styled.div`
  width: 60%;
  background-color: var(--g-color-background-content);
  color: white;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 36px;
`;

export const TodoItem = styled.span`
  font-family: PRE-REGULAR;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;
