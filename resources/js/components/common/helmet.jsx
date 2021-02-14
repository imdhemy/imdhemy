import React, { Component } from 'react'
import { Helmet as HelmetAsync } from 'react-helmet-async'
import { isImage, isMatch, isString } from '../../config/propTypes'
import { description, image, locale, name, url } from '../../config/app'

class Helmet extends Component {
    render () {
        const urlMeta = `${url}${this.props.match.url}`
        return (
            <HelmetAsync>
                <meta name="description" content={description}/>
                <meta name="robots"
                      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <link rel="canonical" href={url}/>
                <meta property="og:locale" content={locale}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={this.props.title}/>
                <meta property="og:description" content={this.props.description}/>
                <meta property="og:url" content={urlMeta}/>
                <meta property="og:site_name" content={name}/>
                <meta property="og:image" content={image.uri}/>
                <meta property="og:image:secure_url" content={image.uri}/>
                <meta property="og:image:width" content={image.width}/>
                <meta property="og:image:height" content={image.height}/>
                <meta name="twitter:card" content={image.uri}/>
                <meta name="twitter:description" content={this.props.description}/>
                <meta name="twitter:title" content={this.props.title}/>
                <meta name="twitter:image" content={image.uri}/>
                <title>{this.props.title}</title>
            </HelmetAsync>
        )
    }
}

Helmet.propTypes = {
    title: isString,
    description: isString,
    locale: isString,
    image: isImage,
    match: isMatch.isRequired,
}

Helmet.defaultProps = {
    title: name,
    description,
    locale,
    image,
}

export default Helmet
