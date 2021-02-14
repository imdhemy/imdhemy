import React, { Component } from 'react'
import TypeIt from 'typeit-react'
import { greetingsStyle, headersContainerStyle, nameStyle } from './common/helmet.style'

const softwareArtist = 'Software artist ..'
const realLifeSuperhero = 'Real-life superhero ..'
const backendEngineer = 'Backend Engineer ..'

class Intro extends Component {
    render () {
        return (
            <div>
                <div style={headersContainerStyle}>
                    <h3 style={greetingsStyle}>Hi, I'm</h3>
                    <h2 style={nameStyle}>Mohamad Eldhemy</h2>
                </div>
                <TypeIt
                    style={{ fontSize: '1.5em', fontWeight: 400, textAlign: 'center' }}
                    element={'h4'}
                    options={{ waitUntilVisible: true }}
                    getBeforeInit={this.typeItBeforeInit}><strong>I'm a </strong></TypeIt>
            </div>

        )
    }

    typeItBeforeInit = instance => {
        instance.
            type(softwareArtist, { delay: 100 }).
            delete(softwareArtist.length, { speed: 200 }).
            type(realLifeSuperhero).
            delete(realLifeSuperhero.length, { speed: 200 }).
            type(backendEngineer)
        return instance
    }
}

export default Intro
