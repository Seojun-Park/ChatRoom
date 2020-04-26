import { GraphQLServer, PubSub} from 'graphql-yoga';
import schema from './schema';

const server = new GraphQLServer({
    schema
});

server.start(() => console.log("GraphQl Server Running"));