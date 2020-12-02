import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import reducers from './config/reducers'
import NavigationContainer from './navigation/NavigationContainer'
import 'semantic-ui-css/semantic.min.css'
import './style.css'

const React = require('react')
const ReactDOM = require('react-dom')
require('./bootstrap')

const store = createStore(combineReducers(reducers))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <NavigationContainer/>
        </Provider>
    </React.StrictMode>, document.getElementById('root'),
)
