import React, { Component } from 'react'
import Helmet from '../../components/common/helmet'
import Intro from '../../components/intro'

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
