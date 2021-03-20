import gql from "graphql-tag";

export const UpdateUser = gql`
  mutation updateUser($agree: Boolean) {
    updateUser(agree1: $agree) {
      user {
        id
      }
    }
  }
`;
