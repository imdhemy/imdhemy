import React from 'react'
import Grid from '@material-ui/core/Grid'
import { styles } from './projects.style'
import { Project } from './Project'

function Projects ({ items }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Open-source Projects</h2>
            <Grid container spacing={3}>
                {items.map(item => (
                    <Project key={item.id} item={item}/>
                ))}
            </Grid>
        </div>
    )
}

export default Projects
