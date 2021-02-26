import React, { Component } from 'react'
import Helmet from '../../components/common/helmet'
import Intro from '../../components/intro/intro'
import Projects from '../../components/projects/projects'
import { getProjects } from '../../actions/githubProjects'

class Home extends Component {
    state = {
        projects: [],
        projectsSortType: 'desc',
    }

    componentDidMount () {
        this.loadProjects({
            limit: 6,
            sort: {
                path: 'stargazers_count',
                type: this.state.projectsSortType,
            },
        })
    }

    loadProjects = (params) => {
        getProjects(params).then(projects => this.setState({ projects }))
    }

    handleSort = () => {
        let { projectsSortType } = this.state
        projectsSortType = projectsSortType === 'desc' ? 'asc' : 'desc'

        const params = {
            limit: 6,
            sort: {
                path: 'stargazers_count',
                type: projectsSortType,
            },
        }
        
        this.setState({ projectsSortType }, () => this.loadProjects(params))
    }

    render () {
        const { projects, projectsSortType } = this.state
        const { match } = this.props

        return (
            <main>
                <Helmet match={match}/>
                <Intro/>
                <Projects onClickSort={this.handleSort} items={projects}
                          sortType={projectsSortType}/>
            </main>
        )
    }
}

export default Home
