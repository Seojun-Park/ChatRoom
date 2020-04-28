import { GraphQLServer, PubSub } from "graphql-yoga";
import schema from './schema';

export const pubsub = new PubSub();
export const NEW_CHAT = "NEW_CHAT";

const PORT = 4000;

const server = new GraphQLServer({
    schema,
    context : { pubsub }
  });

server.start({ port: PORT}, () => console.log(`Graphql Server Running on ${PORT}`));