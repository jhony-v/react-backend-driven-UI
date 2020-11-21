import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { GraphTypes } from "../../@types";
import useDeleteItem from "../../hooks/useDeleteItem";

const SUser = {
  Wrapper: styled(motion.div)({
    display: "flex",
    alignItems: "center",
    margin: "10px auto",
    flexDirection: "column",
    padding:"10px",
    borderRadius:"10px",
    width: "95%",
    cursor:"pointer",
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


type PostAnnounceCardProps = {
  onClick : () => void;
} & GraphTypes.UserType;

const PostAnnounceCard = (props: PostAnnounceCardProps) => {
  const { deleted, ...restProps } = useDeleteItem();
  if(deleted) return null;
  return (
    <SUser.Wrapper {...restProps}  >
      <SUser.Avatar src={props.avatar}  draggable="false" />
      <SUser.Text>{props.username}</SUser.Text>
    </SUser.Wrapper>
  );
};


export default PostAnnounceCard;
