import React, { Component } from 'react'
import Helmet from '../../components/common/helmet'

class About extends Component {
    render () {
        return (
            <div>
                <Helmet match={this.props.match}/>
                <h1>About Screen</h1>
            </div>
        )
    }
}

export default About
