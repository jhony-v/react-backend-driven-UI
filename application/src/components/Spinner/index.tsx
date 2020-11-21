import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform:rotate(360deg);
    }
`;

export default styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px solid white;
  border-left: 2px solid rgb(30, 130, 230);
  border-top: 2px solid rgb(30, 130, 230);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  animation: ${rotate} 0.4s infinite linear;
`;
