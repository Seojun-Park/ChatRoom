import { PubSub } from 'graphql-yoga'

export const pubsub = new PubSub();
const NEW_CHAT = "NEW_CHAT";

let chattingLog = [{
    id: 0,
    user: "admin",
    desc: "Hello"
}];

export default {
    Query: {
        chatting: () => {
            return chattingLog;
        }
    },
    Mutation:{
        write: (_, { user, desc }) => {
            const id = chattingLog.length;
            const newChat = {
                id,
                user,
                desc
            };
            chattingLog.push(newChat);
        }
    },
    Subscription: {
        newChat: {
            subscrib:(_ ,__, { pubsub }) => {
                return pubsub.asyncIterator(NEW_CHAT)
            }
        }
    }
};