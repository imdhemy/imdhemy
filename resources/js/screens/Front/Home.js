import React, { Component } from 'react'
import Helmet from '../../components/Common/Helmet'
import Intro from '../../components/Intro/Intro'

class Home extends Component {
    render () {
        return (
            <div>
                <Helmet match={this.props.match}/>
                <Intro/>
            </div>
        )
    }
}

export default Home
