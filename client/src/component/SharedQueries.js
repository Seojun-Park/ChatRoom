import { gql } from 'apollo-boost'

export const GET_CHAT = gql`
  query {
    chatting {
      id
      user
      desc
    }
  }
`;

export const NEW_CHAT = gql`
  subscription {
    newChat {
      id
      user
      desc
    }
  }
`;

export const WRITE = gql`
mutation write($user: String!, $desc: String!) {
  write(user: $user, desc: $desc)
}
`;