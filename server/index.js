import { GraphQLServer, PubSub} from 'graphql-yoga';

let chattingLog = [{
    id: 0,
    user: "admin",
    desc: "Hello"
}];

const typeDefs =`
    type Chat {
        id : Int!
        user: String!
        desc: String!
    }

    type Query {
        chatting: [Chat]!
    }

    type Mutation {
        write(
            user: String!
            desc: String!
        ): String!
    }
`;

const resolvers = {
    Query: {
        chatting: () => {
            return chattingLog;
        }
    },
    Mutation: {
        write: (_, { user, desc }) => {
            const id = chattingLog.length;
            const newChat = {
                id,
                user,
                desc
            };
            chattingLog.push(newChat);
            return "yeah..."
        }
    }
};

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.start(() => console.log("GraphQl Server Running"));