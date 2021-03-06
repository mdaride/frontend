import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>        
        <button onClick={props.onClick} className={'btn btn-' + props.style}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>        
)