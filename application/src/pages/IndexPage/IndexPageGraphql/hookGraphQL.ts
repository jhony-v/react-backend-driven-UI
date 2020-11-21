import { useQuery } from "@apollo/client";
import { GraphTypes } from "../../../@types";
import { GET_ALL_DATA_MAIN_UI } from "./graphQLQueries";

export const useGetData = (variables: GraphTypes.ListAllPostsVariables) => {
  const { data, loading, error } = useQuery<GraphTypes.ListAllPostsData,GraphTypes.ListAllPostsVariables>(GET_ALL_DATA_MAIN_UI, {
    variables,
  });
  const list_all_posts = data?.list_all_posts;
  return {
    data: list_all_posts,
    loading,
    error,
  };
};
