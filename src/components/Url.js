import React from 'react'

function Url(props) {
    return (
        <div>
            <h1>{props.match.params.id} isn't a valid path </h1>
        </div>
    )
}

export default Url
