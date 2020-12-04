import gql from "graphql-tag";

const messageSubscription = gql`
  subscription onAddMessage {
    addedMessage {
      from
      to
    }
  }
`;

export { messageSubscription };
