import React, { Component } from 'react'
import { View } from 'react-native-web'
import Helmet from '../../components/Common/Helmet'

class Home extends Component {
    render () {
        return (
            <View>
                <Helmet match={this.props.match}/>
                <h1>Home Screen</h1>
            </View>
        )
    }
}

export default Home
