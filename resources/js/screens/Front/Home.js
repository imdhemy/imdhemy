import React, { Component } from 'react'
import Helmet from '../../components/common/helmet'
import Intro from '../../components/intro/intro'
import Projects from '../../components/projects/projects'
import { getProjects } from '../../actions/githubProjects'

const projectParams = {
    limit: 9,
    sort: {
        path: 'stargazers_count',
        type: 'desc',
    },
}

class Home extends Component {
    state = {
        projects: [],
        projectsSortType: 'desc',
    }

    componentDidMount () {
        this.loadProjects(projectParams)
    }

    loadProjects = (params) => {
        getProjects(params).then(projects => this.setState({ projects }))
    }

    handleSort = () => {
        let { projectsSortType } = this.state
        projectsSortType = projectsSortType === 'desc' ? 'asc' : 'desc'

        const params = { ...projectParams }
        params.sort.type = projectsSortType

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
