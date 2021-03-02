import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import About from '../../screens/Front/About'
import { styles } from './navbar.style'
import Link from '@material-ui/core/Link'
import NavList from './navlist'
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined'
import GitHub from '@material-ui/icons/GitHub'

const links = [
    { to: '#about', text: 'About', icon: <FaceOutlinedIcon/> },
    { to: '#open-source', text: 'Projects', icon: <GitHub/> },
    // { to: '/contact', component: Contact, text: 'Contact', icon: <EmailOutlinedIcon/> },
    // { to: '/courses', component: Courses, text: 'Courses', icon: <VideoLibraryOutlinedIcon/> },
    // { to: '/blog', component: Blog, text: 'Blog', icon: <VerticalSplitOutlinedIcon/> },
]

const Navbar = () => {
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
