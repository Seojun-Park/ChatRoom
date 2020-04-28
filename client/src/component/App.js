import React from 'react';
import Home from './Home'
import { ApolloProvider } from '@apollo/react-hooks'
import Client from '..//apolloClient';
// import Input from './Input';

export default () => {
  return (
    <ApolloProvider client={Client}>
      <Home />
      {/* <Input /> */}
    </ApolloProvider>
  )
}
