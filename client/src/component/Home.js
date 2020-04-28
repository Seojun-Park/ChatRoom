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

const Wrapper = styled.div`
    background-color: #f2f2f2;
    min-width: 600px;
    min-height: 100vh;
    margin: 0 auto;
    text-align: center;
`;

export default () => {
    const classes = useStyles();
    const { loading, data, subscribeToMore } = useQuery(GET_CHAT);
    if (loading){
        return (
            <Wrapper>
                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>
            </Wrapper>
        )
    }
    console.log(data);
    if (!unsubscribe) {
        unsubscribe = subscribeToMore({
            document: NEW_CHAT,
            updateQuery: (prev, { subscriptionData }) => {
                console.log(prev)
                if (!subscriptionData) {
                    return prev;
                }
            }
        })
    }
    return (
        <Wrapper>
            {data.chatting[0].user}
        </Wrapper>
    )
}