import React from 'react'
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AppRouter } from './routes/AppRouter';


export const Index = () => {
  return (
    <Provider store={store} >
      <AppRouter/>
    </Provider>
  )
}
