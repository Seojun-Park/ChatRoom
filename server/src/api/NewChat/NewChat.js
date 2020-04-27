import { NEW_CHAT } from '../../server';

export default {
    Subscription : {
        newChat: {
            subscribe: (_, __, { pubsub }) => (
                pubsub.asyncIterator(NEW_CHAT)
            )
        }
    }
};