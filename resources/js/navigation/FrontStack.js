import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from '../screens/Front/Blog/Blog'
import Courses from '../screens/Front/Courses'
import About from '../screens/Front/About'
import Contact from '../screens/Front/Contact'
import Home from '../screens/Front/Home'
import SiteHeader from '../components/Front/SiteHeader/SiteHeader'
import { Container } from 'semantic-ui-react'

class FrontStack extends Component {
    render () {
        return (
            <Container>
                <SiteHeader/>
                <Switch>
                    <Route path={'/blog'} component={Blog}/>
                    <Route path={'/courses'} component={Courses}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/contact'} component={Contact}/>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </Container>
        )
    }
}

export default FrontStack
