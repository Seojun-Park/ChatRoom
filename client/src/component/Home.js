import React from 'react';
import { GET_CHAT, NEW_CHAT } from './SharedQueries'
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

let unsubscribe = null; //publish 했을때 변화

export default () => {
    const classes = useStyles();
    const { loading, data, subscribeToMore } = useQuery(GET_CHAT);
    if (loading){
        return (
            <>
                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>
            </>
        )
    }
    console.log(data);
    if (!unsubscribe) {
        unsubscribe = subscribeToMore({
            document: NEW_CHAT,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData) {
                    return prev;
                }
                console.log(subscriptionData);
                const { newChat } = subscriptionData.data;
                return {
                    ...prev,
                    chatting : [...prev.chatting, newChat]
                };
            }
        });
    }
    return (
        <>
            {data.chatting.map(x => (
                    <h3 key={x.id}>
                        {x.user}: {x.desc}
                    </h3>
            ))}
        </>
    )
}