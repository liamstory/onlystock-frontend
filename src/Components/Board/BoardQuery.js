import gql from "graphql-tag";

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

export const getPost = gql`
  query post($code: String!) {
    post(code: $code) {
      id
      contents
      title
      createdAt
      amount
      user {
        username
      }
    }
  }
`;
