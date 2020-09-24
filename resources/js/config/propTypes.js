import PropTypes from 'prop-types'

export const isString = PropTypes.string
export const shape = PropTypes.shape
export const number = PropTypes.number
export const isBool = PropTypes.bool
export const isObject = PropTypes.object

export const isUrl = PropTypes.string
export const isUri = PropTypes.string

export const isImage = shape({
    uri: isUri.isRequired,
    width: number.isRequired,
    height: number.isRequired,
})

export const isMatch = shape({
    path: isString.isRequired,
    isExact: isBool.isRequired,
    url: isUrl.isRequired,
    params: isObject.isRequired,
})
