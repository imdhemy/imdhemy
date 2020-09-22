import Index from './Index'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { exampleReducer } from './screens/Example'

const React = require('react')
const ReactDOM = require('react-dom')
require('./bootstrap')

const reducers = {
    example: exampleReducer,
}

const store = createStore(combineReducers(reducers))

class App extends React.Component {
    render () {
        return <Index/>
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>, document.getElementById('root'))
