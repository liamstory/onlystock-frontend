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
  mutation getStock(
    $companyId: String!
    $companySecret: String!
    $company: Int!
  ) {
    getStock(
      companyId: $companyId
      companySecret: $companySecret
      company: $company
    ) {
      information {
        id
      }
    }
  }
`;
