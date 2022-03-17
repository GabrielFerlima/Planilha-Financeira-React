import React from 'react';
import ReactDOM from 'react-dom';
import  { App }  from './App';
import {createServer} from 'miragejs'


createServer({
  routes() {
    this.namespace = 'api';



    this.get('/transactions', () => {
      return [ 
        {
          id: 1,
          title: 'Transactions',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);