import React from 'react'
import Link from '@material-ui/core/Link'
import Hidden from '@material-ui/core/Hidden'
import { NavLink as Anchor } from 'react-router-dom'
import { styles } from './navbar.style'
import { IconButton } from '@material-ui/core'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavHashLink } from 'react-router-hash-link'

const hashLinkClassName = 'MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorTextPrimary'

class NavList extends React.Component {
    state = {
        openDrawer: false,
    }

    handleToggleDrawer = () => {
        const { openDrawer } = this.state
        this.setState({ openDrawer: !openDrawer })
    }

    render () {
        let { links } = this.props

        return (
            <div>
                <Hidden smDown>
                    <nav style={styles.navContainer}>
                        <ul style={styles.navList}>
                            {links.map(({ text, to }) => {
                                const isHashRoute = to.includes('#')
                                if (isHashRoute) {
                                    return (
                                        <li key={to} style={styles.navListItem}>
                                            <NavHashLink
                                                className={hashLinkClassName}
                                                smooth
                                                to={to}>
                                                {text}
                                            </NavHashLink>
                                        </li>
                                    )
                                }
                                return (
                                    <li key={to} style={styles.navListItem}>
                                        <Link
                                            color={'textPrimary'}
                                            activeStyle={{ color: '#f50057' }}
                                            underline={'none'}
                                            component={Anchor}
                                            to={to}>{text}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </Hidden>

                <Hidden mdUp>
                    <IconButton onClick={this.handleToggleDrawer} aria-label={'drawer'}>
                        <MenuOutlinedIcon/>
                    </IconButton>

                    <Drawer
                        onClose={this.handleToggleDrawer}
                        anchor={'right'}
                        open={this.state.openDrawer}>
                        <List>
                            {links.map(({ text, to, icon }) => (
                                <ListItem
                                    activeClassName={'Mui-selected'}
                                    component={Anchor}
                                    to={to}
                                    button
                                    key={to}>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>

                </Hidden>
            </div>
        )
    }
}

export default NavList
