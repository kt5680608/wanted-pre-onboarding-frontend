import styled from "styled-components";

import { motion } from "framer-motion";

export const ButtonBox = styled(motion.button)`
  width: 60px;
  height: 36px;
  display: flex;
  padding: 6px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--g-color-background-content);
  font-size: 14px;
  font-family: PRE-REGULAR;
  color: ${(props) => (props.complete ? "green" : "red")};
  border: none;
`;
