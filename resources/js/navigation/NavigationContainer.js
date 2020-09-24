import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import FrontStack from './FrontStack'
import ControlPanelStack from './ControlPanelStack'

class NavigationContainer extends Component {
    render () {
        return (
            <HelmetProvider>
                <Router>
                    <Switch>
                        <Route path={'/admin'}><ControlPanelStack/></Route>
                        <Route path={'/'}><FrontStack/></Route>
                    </Switch>
                </Router>
            </HelmetProvider>
        )
    }
}

export default NavigationContainer
