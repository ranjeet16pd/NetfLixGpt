import React from 'react'
import Body from './components/Body'
import appstore from './utils/appstore'
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div>
  <Provider store={appstore}>
  <Body/>
  </Provider>

    </div>
  )
}

export default App
