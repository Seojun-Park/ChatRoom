import { chattingLog } from '../../chattingLog';
import { pubsub, NEW_CHAT } from '../../server';

export default {
    Mutation:{
        write: (_, { user, desc }) => {
            const id = chattingLog.length;
            const newChat = {
                id,
                user,
                desc
            };
            chattingLog.push(newChat);
            pubsub.publish(NEW_CHAT, {
                newChat
            })
            return "Yes"
        }
    }
};