import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import Post from './Post'

class Blog extends React.Component {
    render () {
        const { match } = this.props
        return (
            <div>
                <h1>Blog Screen</h1>
                {/*Post list start*/}
                <ul>
                    <li>
                        <Link to={match.url}>Blog</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/post-slug-1`}>First Post</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/post-slug-2`}>Second Post</Link>
                    </li>
                </ul>
                {/*Post list end*/}

                {/*post switch start*/}
                <Switch>
                    <Route path={`${match.path}/:postSlug`} component={Post}/>
                </Switch>
                {/*post switch end*/}
            </div>
        )
    }
}

export default Blog
