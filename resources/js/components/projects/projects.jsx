import React from 'react'
import Grid from '@material-ui/core/Grid'
import { styles } from './projects.style'
import { Project } from './Project'
import IconButton from '@material-ui/core/IconButton'
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react'

class Projects extends React.Component {
    render () {
        let { items, onClickSort } = this.props
        return (
            <div style={styles.container} id={'open-source'}>
                <h2 style={styles.title}>
                    <span>Open-source Projects</span>
                    <IconButton onClick={onClickSort}>
                        {this.getIcon()}
                    </IconButton>
                </h2>
                <Grid container spacing={3}>
                    {items.map(item => (
                        <Project key={item.id} item={item}/>
                    ))}
                </Grid>
            </div>
        )
    }

    getIcon () {
        const { sortType } = this.props
        return sortType === 'desc' ? <ChevronDownIcon size={24}/> : <ChevronUpIcon size={24}/>
    }
}

export default Projects
