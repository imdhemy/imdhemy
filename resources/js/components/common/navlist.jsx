import React from 'react'
import Link from '@material-ui/core/Link'
import Hidden from '@material-ui/core/Hidden'
import { Link as Anchor } from 'react-router-dom'
import { styles } from './navbar.style'
import { IconButton } from '@material-ui/core'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { matchPath } from 'react-router'

class NavList extends React.Component {
    state = {
        openDrawer: false,
    }

    handleToggleDrawer = () => {
        const { openDrawer } = this.state
        this.setState({ openDrawer: !openDrawer })
    }

    getColor = (path) => {
        const match = matchPath(window.location.pathname, {
            path,
            exact: false,
        })
        return match ? 'secondary' : 'textSecondary'
    }

    isSelected = (path) => this.getColor(path) === 'secondary'

    render () {
        let { links } = this.props

        return (
            <div>
                <Hidden smDown>
                    <nav style={styles.navContainer}>
                        <ul style={styles.navList}>
                            {links.map(({ text, to }) => (
                                <li key={to} style={styles.navListItem}>
                                    <Link
                                        underline={'none'}
                                        color={this.getColor(to)}
                                        component={Anchor}
                                        to={to}>{text}</Link>
                                </li>
                            ))}
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
                                    component={Anchor}
                                    to={to}
                                    selected={this.isSelected(to)}
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
