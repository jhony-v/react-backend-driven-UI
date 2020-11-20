import React from "react";
import styled from "styled-components";
import { GraphTypes } from "../../@types";

const SUser = {
  Wrapper: styled.div({
    display: "flex",
    alignItems: "center",
    margin: "10px 1em",
    flexDirection: "column",
  }),
  Avatar: styled.img({
    width: "45px",
    height: "45px",
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

const SList = {
  Wrapper: styled.div({
    width: "100%",
    margin: "2em auto",
    display: "flex",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
};

const ItemPostAnnounceCard = (props: GraphTypes.UserType) => {
  return (
    <SUser.Wrapper>
      <SUser.Avatar src={props.avatar} />
      <SUser.Text>{props.fullName}</SUser.Text>
    </SUser.Wrapper>
  );
};

interface PostAnnounceCardProps {
  users: GraphTypes.UserType[];
}

const PostAnnounceCard = (props: PostAnnounceCardProps) => {
  return (
    <SList.Wrapper>
      {props.users.map((data, i) => (
        <ItemPostAnnounceCard key={i} {...data} />
      ))}
    </SList.Wrapper>
  );
};

export default PostAnnounceCard;
