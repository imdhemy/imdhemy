import React, { Component } from 'react'
import TypeIt from 'typeit-react'
import { styles } from './intro.style'

const softwareArtist = 'Software artist ..'
const realLifeSuperhero = 'Real-life superhero ..'
const backendEngineer = 'Backend Engineer ..'
const hi = 'Hi, I\'m'
const name = 'Mohamad Eldhemy'
const prefix = 'I\'m a '

class Intro extends Component {
    render () {
        return (
            <div>
                <div style={styles.headersContainerStyle}>
                    <h3 style={styles.greetingsStyle}>{hi}</h3>
                    <h2 style={styles.nameStyle}>{name}</h2>
                </div>
                <TypeIt
                    style={styles.typeIt}
                    element={'h4'}
                    options={{ waitUntilVisible: true }}
                    getBeforeInit={this.typeItBeforeInit}><strong>{prefix}</strong></TypeIt>
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
