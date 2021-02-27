import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import GitHub from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import YouTube from '@material-ui/icons/YouTube'

function Awards (props) {
    return (
        <div>
            <h2>Awards</h2>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <img style={{ maxWidth: '100%' }} alt={'winners'}
                         src={'./assets/images/winners.png'}/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ul>
                        <li>Graduated with an excellent bachelor's degree of computer science.</li>
                        <li>Ranked 1st in my graduation class 2015</li>
                    </ul>
                    <div>
                        <h3>Let's Connect</h3>
                        <Grid spacing={5} container>
                            <Grid item xs={6}>
                                <ButtonGroup
                                    fullWidth
                                    orientation={'vertical'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    <Button
                                        target={'_blank'}
                                        href={'https://github.com/imdhemy'}
                                        style={{ background: '#252a2e' }}
                                        startIcon={<GitHub/>}>
                                        Github
                                    </Button>
                                    <Button
                                        target={'_blank'}
                                        href={'https://www.facebook.com/imdhemy/'}
                                        style={{ background: '#c4302b' }}
                                        startIcon={<YouTube/>}>
                                        YouTube
                                    </Button>
                                    <Button
                                        target={'_blank'}
                                        href={'https://dev.to/imdhemy'}
                                        style={{ background: 'black' }}
                                        startIcon={<PeopleAlt/>}>
                                        Dev.to
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={6}>
                                <ButtonGroup
                                    fullWidth
                                    orientation={'vertical'}
                                    variant={'contained'}
                                    color={'primary'}>
                                    <Button
                                        target={'_blank'}
                                        href={'https://www.linkedin.com/in/imdhemy/'}
                                        style={{ background: '#0080b2' }}
                                        startIcon={<LinkedInIcon/>}>
                                        Linkedin
                                    </Button>
                                    <Button
                                        target={'_blank'}
                                        href={'https://www.facebook.com/imdhemy/'}
                                        style={{ background: '#3b5999' }}
                                        startIcon={<FacebookIcon/>}>
                                        Facebook
                                    </Button>
                                    <Button
                                        target={'_blank'}
                                        href={'https://twitter.com/imdhemy'}
                                        style={{ background: '#00aced' }}
                                        startIcon={<TwitterIcon/>}>
                                        Twitter
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Awards
