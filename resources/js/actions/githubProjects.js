const uri = 'https://api.github.com/users/imdhemy/repos'
const axios = require('axios').default
const _ = require('lodash')

export const getProjects = async ({ limit, sort }) => {
    let { data: projects } = await axios.get(uri)
    projects = _.orderBy(projects, sort.path, sort.type)
    projects = _.take(projects, limit)
    return projects
}
