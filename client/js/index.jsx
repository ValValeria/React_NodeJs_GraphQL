import {render} from 'react-dom'
import React from 'react'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {Provider} from 'react-redux'
import store from './store/index.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});


render(
    <ApolloProvider client={client}>
       <BrowserRouter>
         <Provider store={store}>
             <App/>
         </Provider>
       </BrowserRouter>
    </ApolloProvider>
,document.querySelector('#app'))