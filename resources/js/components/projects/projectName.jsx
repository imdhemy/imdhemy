import Link from '@material-ui/core/Link'
import { styles } from './projects.style'
import { RepoIcon } from '@primer/octicons-react'
import React from 'react'

const _ = require('lodash')

export function ProjectName ({ name, url }) {
    name = _.upperFirst(name.replaceAll('-', ' '))

    return (
        <Link
            target={'_blank'}
            underline={'none'}
            color={'secondary'}
            href={url}>
            <h2 style={styles.item.title.text}>
              <span style={styles.item.title.icon}>
                   <RepoIcon
                       size={21}
                       verticalAlign={'middle'}/>
              </span>
                {name}
            </h2>
        </Link>
    )
}
