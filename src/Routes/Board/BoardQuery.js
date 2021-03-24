import gql from "graphql-tag";

export const getCode = gql`
  query code($code: String!) {
    code(code: $code)
  }
`;
