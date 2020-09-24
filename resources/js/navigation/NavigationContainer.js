import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FrontStack from './FrontStack'
import ControlPanelStack from './ControlPanelStack'

class NavigationContainer extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path={'/admin'}><ControlPanelStack/></Route>
                    <Route path={'/'}><FrontStack/></Route>
                </Switch>
            </Router>
        )
    }
}

export default NavigationContainer
