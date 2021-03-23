import gql from "graphql-tag";

export const getStock = gql`
  {
    stock {
      code
      amount
    }
  }
`;
