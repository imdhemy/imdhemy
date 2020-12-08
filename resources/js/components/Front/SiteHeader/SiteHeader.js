import React from 'react'
import { Button, Header, Icon, Menu, Transition } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
    brandContainerStyle,
    brandStyle,
    brandSubHeaderStyle,
    headerContentContainerStyle,
    menuButtonStyle,
    menuIconStyle,
    navbarContainerStyle,
} from './siteHeaderStyle'
import { stdMargin } from '../../../config/dimensions'

const navItems = [
    { to: '/', key: 'Home' },
    { to: '/blog', key: 'Blog' },
    { to: '/courses', key: 'Courses' },
    { to: '/about', key: 'About' },
    { to: '/contact', key: 'Contact' },
    { to: '/admin', key: 'Admin' },
]

class SiteHeader extends React.Component {
    state = {
        navMenuVisible: false,
    }

    _toggleNavMenu = () => this.setState(
        ({ navMenuVisible }) => ({ navMenuVisible: !navMenuVisible }))

    render () {
        const { navMenuVisible } = this.state
        const menuContainerStyle = { display: navMenuVisible ? 'block' : 'none' }
        const menuIconName = navMenuVisible ? 'close' : 'sidebar'

        return (
            <div style={{ marginBottom: stdMargin }}>
                {/* Content */}
                <div style={headerContentContainerStyle}>
                    {/* Brand */}
                    <div style={brandContainerStyle}>
                        <Header as={'h1'}>
                            <Header.Content style={brandStyle}>🦸🏻Dhemy Studio</Header.Content>
                            <Header.Subheader
                                style={brandSubHeaderStyle}>@imdhemy</Header.Subheader>
                        </Header>
                    </div>
                    {/* Navbar */}
                    <div style={navbarContainerStyle}>
                        <Button onClick={this._toggleNavMenu} basic size={'large'}
                                style={menuButtonStyle}>
                            <Icon color={'black'} size={'big'} name={menuIconName}
                                  style={menuIconStyle}/>
                        </Button>
                    </div>
                </div>
                {/*Nav Menu*/}
                <div style={menuContainerStyle}>
                    <Transition visible={navMenuVisible} animation={'scale'} duration={500}>
                        <Menu vertical style={{ width: '100%' }}>
                            {navItems.map(item => (
                                <Menu.Item
                                    key={item.key}
                                    as={Link}
                                    to={item.to}>
                                    {item.key}
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Transition>
                </div>
            </div>
        )
    }
}

export default SiteHeader
