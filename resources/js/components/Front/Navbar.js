import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link to={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/admin'}>Control Panel</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
