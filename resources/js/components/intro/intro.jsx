import React, { Component } from 'react'
import TypeIt from 'typeit-react'
import { styles } from './intro.style'

const softwareArtist = 'Software artist ..'
const realLifeSuperhero = 'Real-life superhero ..'
const backendEngineer = 'Backend Engineer ..'
const hi = 'Hi, I\'m 👋🏻'
const name = 'Mohamad Eldhemy'
const prefix = 'I\'m a '

class Intro extends Component {
    state = {
        innerWidth: window.innerWidth,
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        const { innerWidth } = window
        this.setState({ innerWidth })
    }

    isSmallScreen = () => this.state.innerWidth < 740

    getImageWidth = () => this.isSmallScreen() ? 300 : this.state.innerWidth / 3

    render () {
        let contentsContainerStyle = { ...styles.contentsContainer }

        if (this.isSmallScreen()) {
            contentsContainerStyle.flexDirection = 'column'
            contentsContainerStyle.paddingTop = 30
            contentsContainerStyle.paddingBottom = 30
        }

        return (
            <div style={styles.container}>
                <img style={styles.bgImage} src={'./assets/images/overlay.svg'} alt={'overlay'}/>
                <div style={contentsContainerStyle}>
                    <div>
                        <img
                            style={styles.image}
                            width={this.getImageWidth()}
                            src={'./assets/images/developer.png'}
                            alt={'Developer'}/>
                    </div>
                    <div style={styles.textContainer}>
                        <div style={styles.headersContainer}>
                            <h3 style={styles.greetingsStyle}>{hi}</h3>
                            <h2 style={styles.nameStyle}>{name}</h2>
                        </div>
                        <TypeIt
                            style={styles.typeIt}
                            element={'h4'}
                            options={{ waitUntilVisible: true }}
                            getBeforeInit={this.typeItBeforeInit}><strong>{prefix}</strong></TypeIt>
                    </div>
                </div>
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
