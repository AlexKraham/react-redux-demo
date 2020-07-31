import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NewCakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  )
}

export default App
