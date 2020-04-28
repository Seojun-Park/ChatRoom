import React from 'react';
import styled from 'styled-components';
import Home from './Home'
import { ApolloProvider } from '@apollo/react-hooks'
import Client from '..//apolloClient';
import Input from './Input';

const Wrapper = styled.div`
    background-color: #f2f2f2;
    min-width: 600px;
    margin: 0 auto;
    text-align: center;
`;

export default () => {
  return (
    <Wrapper>
      <ApolloProvider client={Client}>
        <Home />
        <Input />
      </ApolloProvider>
    </Wrapper>
  )
}
