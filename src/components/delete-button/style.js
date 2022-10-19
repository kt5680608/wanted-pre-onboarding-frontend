import styled from "styled-components";

import { motion } from "framer-motion";

export const ButtonBox = styled(motion.button)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--g-color-background-content);
  border: none;
`;
