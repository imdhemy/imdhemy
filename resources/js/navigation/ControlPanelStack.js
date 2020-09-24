import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../screens/ControlPanel/Dashboard'
import { View } from 'react-native-web'
import { Link } from 'react-router-dom'

class ControlPanelStack extends Component {
    render () {
        return (
            <View>
                <p><Link to={'/'}>View website</Link></p>
                <Switch>
                    <Route path={'/'}><Dashboard/></Route>
                </Switch>
            </View>
        )
    }
}

export default ControlPanelStack
