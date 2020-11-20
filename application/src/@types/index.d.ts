export namespace GraphTypes {
  export interface ComponentType {
    name?: string;
    props?: PostType;
  }

  export interface UserType {
    avatar?: string;
    username?: string;
  }

  export interface ReactionType {
    type?: string;
    text?: string;
    me?: boolean;
  }

  export interface PostType {
    text?: string;
    image?: string;
    createdAt?: string;
    reactions?: ReactionType[];
    user?: UserType;
  }

  export interface NameComponent {
    component: string;
  }

  export interface PostAnnounceCard extends NameComponent {
    data: UserType;
  }

  export interface PostCard extends NameComponent {
    data: PostType;
  }

  export interface ListAllPostsVariables {
    skip: number;
    limit: number;
  }
  export interface ListAllPostsData {
    list_all_posts: PostCard[] & PostAnnounceCard[];
  }
}
