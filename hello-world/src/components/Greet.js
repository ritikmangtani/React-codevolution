import React from 'react';

const Greet = props => {
    console.log(props)
    return (
    <div>
    <h1> Hey {props.Name} a.k.a {props.superHero} </h1>
    {props.children}
    </div>
    )
}


// function greet(){
//     return <h1>hello</h1>
// }

export default Greet 