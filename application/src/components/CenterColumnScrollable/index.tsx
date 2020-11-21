import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)({
  width: "500px",
  height: "100vh",
  margin: "auto",
  borderLeft: "1px solid rgba(0,0,0,.05)",
  borderRight: "1px solid rgba(0,0,0,.05)",
  minHeight: "100%",
  overflowX:"hidden",
  overflowY: "scroll",
  backgroundColor:"white",
  "&::-webkit-scrollbar": {
    width:"14px"
  },
  "&::-webkit-scrollbar-thumb": {
    border:"4px solid white",
    borderRadius:"10px",
    backgroundColor:"rgba(0,0,0,.06)",
    cursor:"pointer"
  },
});

Wrapper.defaultProps = {
  initial: {
    opacity:.2,
  },
  animate : {
    opacity:1
  },
  drag : "x",
}

const CenterColumnScrollable: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CenterColumnScrollable;
