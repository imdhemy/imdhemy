const uri = 'https://api.github.com/users/imdhemy/repos'
const axios = require('axios').default
const _ = require('lodash')

export const getProjects = async ({ limit, sort }) => {

    if (undefined === window.projects) {
        let { data: projects } = await axios.get(uri)
        window.projects = projects
    }

    let projects = _.orderBy(window.projects, sort.path, sort.type)
    projects = projects.filter(item => !item.fork)
    projects = _.take(projects, limit)
    return projects
}
