export namespace GraphTypes {
  export interface ComponentType {
    name?: string;
    props?: PostType;
  }

  export interface UserType {
    avatar?: string;
    fullName?: string;
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
}
