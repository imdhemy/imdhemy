import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { styles } from './projects.style'
import { ProjectName } from './projectName'
import { ProjectFooter } from './projectFooter'

function Projects ({ items }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Open-source Projects</h2>
            <Grid container spacing={3}>
                {
                    items.map(item => (
                        <Grid key={item.id} item xs={12} md={4}>
                            <Paper style={{ padding: 10 }}>
                                <ProjectName name={item.name} url={item['html_url']}/>
                                <p style={styles.item.description}>{item.description}</p>
                                <ProjectFooter
                                    stars={item['stargazers_count']}
                                    forks={item['forks_count']}/>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Projects
