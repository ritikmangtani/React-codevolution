import React, { Component } from 'react'

class welcome extends Component {
    render(){
        return <h1>Welcome {this.props.Name} a.k.a {this.props.superHero} </h1>

    }
}

export default welcome