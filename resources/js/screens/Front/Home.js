import React, { Component } from 'react'
import Helmet from '../../components/common/helmet'
import Intro from '../../components/intro/intro'
import Projects from '../../components/projects/projects'
import { getProjects } from '../../actions/githubProjects'

class Home extends Component {
    state = {
        projects: {
            data: [],
            limit: 6,
            sort: {
                path: 'stargazers_count',
                type: 'desc',
            },
        },
    }

    componentDidMount () {
        const { projects: params } = this.state

        this.loadProjects(params)
    }

    loadProjects = (params) => {
        getProjects(params).then(data => {
            const projects = { ...this.state.projects }
            projects.data = data
            this.setState({ projects })
        })
    }

    render () {
        return (
            <main>
                <Helmet match={this.props.match}/>
                <Intro/>
                <Projects items={this.state.projects.data}/>
            </main>
        )
    }
}

export default Home
