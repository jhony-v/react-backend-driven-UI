import { gql } from "@apollo/client";

export const GET_ALL_DATA_MAIN_UI = gql`
  query list_all_posts($skip: Int!, $limit: Int!) {
    list_all_posts(skip: $skip, limit: $limit) {
      ... on PostAnnounceCard {
        component
        data {
          avatar
          username
        }
      }
      ... on PostCard {
        component
        data {
          text
          image
          createdAt
          user {
            avatar
            username
          }
        }
      }
    }
  }
`;
