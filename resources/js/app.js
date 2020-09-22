import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import reducers from './config/reducers'
import Example from './screens/Example'

const React = require('react')
const ReactDOM = require('react-dom')
require('./bootstrap')

const store = createStore(combineReducers(reducers))

class App extends React.Component {
    render () {
        return (
            <div>
                <Example/>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>, document.getElementById('root'))
