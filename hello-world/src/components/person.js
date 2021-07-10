import React from 'react'

function Person({person}) {
    return (
        <div>
            <p>I am    {person.name}. I am {person.age} years old. I am good at {person.skill}.</p>
        </div>
    )
}

export default Person
