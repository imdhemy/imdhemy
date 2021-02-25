import Grid from '@material-ui/core/Grid'
import { GitForkIcon, StarIcon } from '@primer/octicons-react'
import { styles } from './projects.style'
import React from 'react'

export function ProjectFooter ({ forks, stars }) {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <span>
                   <StarIcon
                       verticalAlign={'middle'}
                       size={21}/>
                   </span>
                <span style={styles.item.icon.text}>{stars}</span>
            </Grid>
            <Grid item>
                 <span>
                      <GitForkIcon
                          verticalAlign={'middle'}
                          size={21}/>
                      </span>
                <span style={styles.item.icon.text}>{forks}</span>
            </Grid>
        </Grid>
    )
}
