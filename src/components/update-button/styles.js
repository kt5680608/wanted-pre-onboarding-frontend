import styled from "styled-components";

import { motion } from "framer-motion";
export const ButtonBox = styled(motion.button)`
  width: 36px;
  height: 36px;
  display: flex;
  padding: 6px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--g-color-background-content);
  border: none;
`;
