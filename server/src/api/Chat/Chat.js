

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
    }
}