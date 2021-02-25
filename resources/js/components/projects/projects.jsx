import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { GitForkIcon, StarIcon } from '@primer/octicons-react'
import { styles } from './projects.style'
import { ProjectName } from './projectName'

const iconSize = 21

function Projects ({ items }) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Open-source Projects</h2>
            <Grid container spacing={3}>
                {
                    items.map(item => (
                        <Grid key={item.id}
                              item
                              xs={12}
                              md={4}>
                            <Paper style={{ padding: 10 }}>
                                <ProjectName name={item.name} url={item['html_url']}/>
                                <p style={styles.item.description}>{item.description}</p>
                                <Grid container spacing={1}>
                                    <Grid item>
                                         <span>
                                            <StarIcon
                                                verticalAlign={'middle'}
                                                size={iconSize}/>
                                         </span>
                                        <span
                                            style={styles.item.icon.text}>{item['stargazers_count']}</span>
                                    </Grid>
                                    <Grid item>
                                         <span>
                                             <GitForkIcon verticalAlign={'middle'}
                                                          size={iconSize}/>
                                         </span>
                                        <span style={styles.item.icon.text}>{item['forks']}</span>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Projects
