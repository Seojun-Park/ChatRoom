import { GraphQLServer, PubSub } from "graphql-yoga";

const pubsub = new PubSub();
const NEW_CHAT = "NEW_CHAT";

let chattingLog = [{
  id: 0,
  user: "admin",
  desc: "HELLO"
}];

const typeDefs = `
    type Chat {
    id: Int!
    user: String!
    desc: String!
    }
    type Query {
    chatting: [Chat]!
    }
    type Mutation {
        write(user: String!, desc: String!): String!
    }
    type Subscription {
        newChat: Chat
    }
`;

const resolvers = {
    Query: {
      chatting: () => {
        return chattingLog;
      }
    },
    Mutation: {
      write: (_, { user, desc }) =>{
        const id = chattingLog.length;
        const newChat = {id, user, desc };
        chattingLog.push(newChat);
        pubsub.publish(NEW_CHAT, { newChat })
        return "Yeah"
        }
    },
    Subscription: {
      newChat: {
        subscribe: (_, __, { pubsub }) =>
        pubsub.asyncIterator(NEW_CHAT)
      }
    }
  };


const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: { pubsub }
  });

server.start(() => console.log("Graphql Server Running"));