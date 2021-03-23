import { gql } from "apollo-boost";

export const getStock = gql`
  mutation getStock($click: Boolean!) {
    getStock(click: $click) {
      result
    }
  }
`;
