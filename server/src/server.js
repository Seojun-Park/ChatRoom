import { GraphQLServer, PubSub } from "graphql-yoga";
import schema from './schema';

export const pubsub = new PubSub();
export const NEW_CHAT = "NEW_CHAT";

const server = new GraphQLServer({
    schema,
    context : { pubsub }
  });

server.start(() => console.log("Graphql Server Running"));