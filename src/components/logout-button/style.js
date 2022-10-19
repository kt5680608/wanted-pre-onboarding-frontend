import styled from "styled-components";

import { motion } from "framer-motion";

export const ButtonBox = styled(motion.button)`
  box-sizing: border-box;
  border: none;
  width: 72px;
  height: 48px;
  color: white;
  font-family: RFLEX_REGULAR;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--g-color-background-content);
  border-radius: 24px;
  padding: 12px;
  position: absolute;
  bottom: 92%;
  left: 92%;
  cursor: pointer;
`;
