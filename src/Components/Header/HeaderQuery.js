import gql from "graphql-tag";

export const haveStock = gql`
  query havestock($code: String!) {
    havestock(code: $code) {
      stockname
    }
  }
`;

export const allStock = gql`
  query allstock {
    allstock {
      code
      stockname
    }
  }
`;
