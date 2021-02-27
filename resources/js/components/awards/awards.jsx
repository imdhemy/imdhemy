import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import GitHub from '@material-ui/icons/GitHub'

function Awards (props) {
    return (
        <div>
            <h2>Awards</h2>
            <div>
                <img alt={'winners'} src={'./assets/images/winners.png'}/>
            </div>
            <div>
                <ul>Awards
                    <li>Graduated with an excellent bachelor's degree of computer science.</li>
                    <li>Ranked 1st in my graduation class 2015</li>
                </ul>
                <div>
                    <h3>Let's Connect</h3>
                    <ButtonGroup variant={'contained'} color={'primary'}>
                        <Button
                            target={'_blank'}
                            href={'https://www.linkedin.com/in/imdhemy/'}
                            style={{ background: '#0080b2' }}
                            startIcon={<LinkedInIcon/>}>
                            Linkedin
                        </Button>
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
                            style={{ background: '#3b5999' }}
                            startIcon={<FacebookIcon/>}>
                            Facebook
                        </Button>
                        <Button
                            target={'_blank'}
                            href={'https://dev.to/imdhemy'}
                            style={{ background: 'black' }}
                            startIcon={<PeopleAlt/>}>
                            Dev.to
                        </Button>
                        <Button
                            target={'_blank'}
                            href={'https://twitter.com/imdhemy'}
                            style={{ background: '#00aced' }}
                            startIcon={<TwitterIcon/>}>
                            Twitter
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Awards
