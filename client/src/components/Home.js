import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHAT = gql`
    query {
        chatting{
            id
            user
            desc
        }
    }
`;

const NEW_CHAT = gql`
    subscription {
        newChat {
            id
            user
            desc
        }
    }
`;

let unsubscribe = null;

export default () => {
    const { data } = useQuery(GET_CHAT);
    console.log(data);
    return (
        <div>
            lalala
        </div>
    )
}