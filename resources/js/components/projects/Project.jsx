import Grid from '@material-ui/core/Grid'
import { styles } from './projects.style'
import Paper from '@material-ui/core/Paper'
import { ProjectBody } from './ProjectBody'
import { ProjectFooter } from './projectFooter'
import React from 'react'

export function Project (props) {
    return (
        <Grid
            style={styles.item.container}

            item
            xs={12} md={4}>
            <Paper style={styles.item.content}>
                <ProjectBody
                    name={props.item.name}
                    description={props.item.description}
                    url={props.item['html_url']}/>
                <ProjectFooter
                    stars={props.item['stargazers_count']}
                    forks={props.item['forks_count']}/>
            </Paper>
        </Grid>
    )
}
