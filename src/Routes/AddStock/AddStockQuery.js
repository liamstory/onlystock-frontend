import { gql } from "apollo-boost";

export const WhoamI = gql`
  query {
    whoami {
      username
      id
    }
  }
`;

export const get_Stock = gql`
  mutation getStock($id: String!, $secret: String!) {
    getStock(id: id, secret: secret)
  }
`;
