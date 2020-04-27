import { chattingLog } from '../../chattingLog';

export default {
    Query: {
        chatting: () => {
            return chattingLog;
        }
    }
};