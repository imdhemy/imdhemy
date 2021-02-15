import React from 'react'
import { Link as Anchor, useLocation } from 'react-router-dom'
import Courses from '../screens/Front/Courses'
import Blog from '../screens/Front/Blog/Blog'
import About from '../screens/Front/About'
import Contact from '../screens/Front/Contact'
import { styles } from './navbar.style'
import Link from '@material-ui/core/Link'
import NavList from './navlist'
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined'
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined'

const links = [
    { to: '/about', component: About, text: 'About', icon: <FaceOutlinedIcon/> },
    { to: '/contact', component: Contact, text: 'Contact', icon: <EmailOutlinedIcon/> },
    { to: '/courses', component: Courses, text: 'Courses', icon: <VideoLibraryOutlinedIcon/> },
    { to: '/blog', component: Blog, text: 'Blog', icon: <VerticalSplitOutlinedIcon/> },
]

const Navbar = () => {
    const location = useLocation()
    return (
        <div style={styles.container}>
            <h1 style={styles.brandName}>
                <Link underline={'none'} color={'textPrimary'} component={Anchor} to={'/'}>
                    Mohamad Eldhemy
                </Link>
            </h1>
            <NavList links={links}/>
        </div>
    )
}

export default Navbar
