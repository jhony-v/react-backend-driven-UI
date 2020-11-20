import React from "react";
import styled from "styled-components";
import { GraphTypes } from "../../@types";

const S = {
  MainWrapper: styled.div({
    margin: "1em auto",
    borderRadius: "10px",
    width: "95%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,.02)",
  }),
  Image: styled.img({
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "rgba(0,0,0,.2)",
  }),
  TextPost: styled.p({
    color: "rgb(30,30,30)",
  }),
  TextDate: styled.span({
    fontSize: "11px",
    color: "gray",
    display: "block",
    margin: "1em 0",
  }),
  UserWrapper: styled.div({
    display: "flex",
    marginBottom:"10px",
    alignItems: "center",
  }),
  UserAvatar: styled.img({
    width: "40px",
    height: "40px",
    borderRadius: "100%",
  }),
  UserFullName: styled.div({
    fontWeight: "bold",
  }),
};

interface PostCardTypes extends GraphTypes.PostType {}

const PostCard = (props: PostCardTypes) => {
  return (
    <S.MainWrapper>
      <S.UserWrapper>
        <S.UserAvatar src={props.user?.avatar} />
        <S.UserFullName>{props.user?.fullName}</S.UserFullName>
      </S.UserWrapper>
      <S.Image src={props.image} />
      <S.TextDate>{new Date(props.createdAt!).toString()}</S.TextDate>
      <S.TextPost>{props.text}</S.TextPost>
    </S.MainWrapper>
  );
};

export default PostCard;
