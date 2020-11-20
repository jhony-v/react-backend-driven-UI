import React from "react";
import { useQuery } from "@apollo/client";
import { GraphTypes } from "../@types";
import CenterColumnScrollable from "../components/CenterColumnScrollable";
import PostAnnounceCard from "../components/PostsCard/PostAnnounceCard";
import PostCard from "../components/PostsCard/PostCard";
import Spinner from "../components/Spinner";
import { GET_ALL_DATA_MAIN_UI } from "./IndexPageQuery";


const MainCard : any = {
    PostCard,
    PostAnnounceCard
}

const useGetData = (variables : GraphTypes.ListAllPostsVariables) => {
    const { data, loading,error } = useQuery<GraphTypes.ListAllPostsData,GraphTypes.ListAllPostsVariables>(GET_ALL_DATA_MAIN_UI, {
      variables
    });
    const list_all_posts = data?.list_all_posts;
    return {
        data : list_all_posts,
        loading,
        error
    }
}

const IndexPage = () => {
  const { error, loading , data } = useGetData({
      limit : 3,
      skip : 0
  })  
  if(error) return <p>error</p>
  if(loading) return <Spinner/>
  return(
    <CenterColumnScrollable>
        {data?.map((item,index)=>{
            const TypeComponent = MainCard[item.component];
            return <TypeComponent key={index} {...item.data} />        
        })}
    </CenterColumnScrollable>
  );
};

export default IndexPage;
