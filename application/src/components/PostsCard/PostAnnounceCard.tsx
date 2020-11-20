import React from "react";
import styled from "styled-components";
import { GraphTypes } from "../../@types";

const SUser = {
  Wrapper: styled.div({
    display: "flex",
    alignItems: "center",
    margin: "10px auto",
    flexDirection: "column",
    padding:"10px",
    borderRadius:"10px",
    width: "95%",
    backgroundColor: "rgba(0,0,0,.02)",
  }),
  Avatar: styled.img({
    width: "105px",
    height: "105px",
    border:"4px solid rgb(30,130,230)",
    padding:"5px",
    objectFit: "cover",
    borderRadius: "100%",
    marginBottom: "10px",
    backgroundColor: "rgba(0,0,0,.05)",
  }),
  Text: styled.span({
    margin: "auto",
    display: "inline-block",
    fontWeight: "bold",
  }),
};


const PostAnnounceCard = (props: GraphTypes.UserType) => {
  return (
    <SUser.Wrapper>
      <SUser.Avatar src={props.avatar} />
      <SUser.Text>{props.username}</SUser.Text>
    </SUser.Wrapper>
  );
};


export default PostAnnounceCard;
