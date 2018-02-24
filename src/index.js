import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Page from './components/page/pageContainer'
import redutor from './reducers'

let store = createStore(redutor)

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>, 
    document.getElementById('root')
)