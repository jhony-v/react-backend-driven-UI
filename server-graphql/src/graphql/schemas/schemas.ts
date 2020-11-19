import { gql } from "apollo-server";

const typeDefs = gql`
    interface BaseUser {
        avatar: String
        username: String
    }

    type UserPost implements BaseUser {
        avatar: String
        username: String
    }

    type Reaction {
        type: String
        text: String
        me: Boolean
    }

    type Post {
        user: UserPost
        text: String
        image: String
        createdAt: String
        reactions: [Reaction]
    }

    type Query {
        getPosts: [Post]
    }
`;

export default typeDefs;
