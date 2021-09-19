import React from 'react'

function QuesTionButton(props) {
    return (
        <div onClick = {()=>{props.quesTionTab(props._id)}} class="small-box">{props._id}</div>
    )
}

export default QuesTionButton
