import React from 'react'
import AppContainer from './src/components/app-container'
import Navigator from './src/'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
        <AppContainer>
          <Navigator />
        </AppContainer>
    </Provider>
  )
}
