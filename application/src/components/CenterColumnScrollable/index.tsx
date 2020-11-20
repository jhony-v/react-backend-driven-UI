import React from "react";
import styled from "styled-components";

const Wrapper = styled.div({
  width: "400px",
  height: "100vh",
  margin: "auto",
  borderLeft: "1px solid rgba(0,0,0,.05)",
  borderRight: "1px solid rgba(0,0,0,.05)",
  minHeight: "100%",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const CenterColumnScrollable: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CenterColumnScrollable;
