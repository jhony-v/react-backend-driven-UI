import { gql } from "apollo-server";

const schemas = gql`
  type UserBasicProfile {
    avatar: String
    username: String
  }

  type Reaction {
    type: String
    text: String
    me: Boolean
  }

  type Post {
    user: UserBasicProfile
    text: String
    image: String
    createdAt: String
    reactions: [Reaction]
  }

  type PostCard {
    component: String!
    data: Post
  }

  type PostAnnounceCard {
    component: String!
    data: UserBasicProfile
  }

  union DataMainPost = PostCard | PostAnnounceCard

  type Query {
    list_all_posts(skip: Int!, limit: Int!): [DataMainPost]
  }
`;

export default schemas;
