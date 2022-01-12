import React from "react"
import Filho from './Filho'

export default (props) => {
    return (
    <div>
        <Filho {...props}>João</Filho>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>
    )
    
}