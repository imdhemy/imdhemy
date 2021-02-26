import { ProjectName } from './projectName'
import { styles } from './projects.style'
import React from 'react'

export function ProjectBody ({ name, url, description }) {
    return (
        <div>
            <ProjectName name={name} url={url}/>
            <p style={styles.item.description}>{description}</p>
        </div>
    )
}
