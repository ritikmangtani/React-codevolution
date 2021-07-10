import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Ramesh Yadav')}>Greet Parent</button>
        </div>
    )
}

export default childComponent
 