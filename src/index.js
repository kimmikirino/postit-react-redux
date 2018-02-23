import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Page from './components/page'
import Postit from './postit.png'
import './postit.css'
import redutor from './reducers'

let store = createStore(redutor)

ReactDOM.render(
    <Provider>
        <Page />
    </Provider>, 
    document.getElementById('root')
)