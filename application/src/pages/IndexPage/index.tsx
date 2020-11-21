import React from "react";
import CenterColumnScrollable from "../../components/CenterColumnScrollable";
import PostAnnounceCard from "../../components/PostsCard/PostAnnounceCard";
import PostCard from "../../components/PostsCard/PostCard";
import Spinner from "../../components/Spinner";
import ErrorModal from "../../components/ErrorModal";
import { useGetData } from "./IndexPageGraphql/hookGraphQL";
import { AnimateSharedLayout } from "framer-motion";

const MainCard: any = {
  PostCard,
  PostAnnounceCard,
};

const IndexPage = () => {
  const { error, loading, data } = useGetData({
    limit: 3,
    skip: 0,
  });
  if (error) return <ErrorModal />;
  if (loading) return <Spinner />;
  return (
    <CenterColumnScrollable>
      <AnimateSharedLayout>
        {data?.map((item, index) => {
          const TypeComponent = MainCard[item.component];
          return <TypeComponent key={index} {...item.data} />;
        })}
      </AnimateSharedLayout>
    </CenterColumnScrollable>
  );
};

export default IndexPage;
