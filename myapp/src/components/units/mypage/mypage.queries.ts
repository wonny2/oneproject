import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      #   userPoint
      createdAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      email
      name
      _id
      picture
    }
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
