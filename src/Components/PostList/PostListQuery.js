import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation CreatePost($code: String!, $contents: String!, $title: String!) {
    createPost(code: $code, contents: $contents, title: $title) {
      post {
        id
        title
        contents
        code
      }
    }
  }
`;
