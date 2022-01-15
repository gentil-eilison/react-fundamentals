/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.handleInc}>+</button>
            <button onClick={props.handleDec}>-</button>
        </div>
    )
}