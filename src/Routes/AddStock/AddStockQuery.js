import { gql } from "apollo-boost";

export const WhoamI = gql`
  query {
    whoami {
      username
      id
    }
  }
`;
