import React, { Component } from 'react'

class Post extends Component {
    render () {
        const { postSlug } = this.props.match.params
        return (
            <div>
                <h1>Post slug: {postSlug}</h1>
            </div>
        )
    }
}

export default Post
