import React from 'react'
import { connect } from 'react-redux'

// Component class
class Example extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.onDecrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        )
    }
}

// State mapper
const mapStateToProps = ({ example }) => ({ count: example.count })

// action types
const TYPE_INCREMENT = { type: 'INCREMENT' }
const TYPE_DECREMENT = { type: 'DECREMENT' }

// actions mapper
const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(TYPE_INCREMENT),
    onDecrement: () => dispatch(TYPE_DECREMENT),
})

// Initial state
const initialState = {
    count: 1,
}

// reducer
export function exampleReducer (state = initialState, action) {

    if (action.type === TYPE_INCREMENT.type) {
        state = Object.assign({}, state, { count: ++state.count })
    }

    if (action.type === TYPE_DECREMENT.type) {
        state = Object.assign({}, state, { count: --state.count })
    }

    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)
