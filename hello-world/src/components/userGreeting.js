import React, { Component } from 'react'

class userGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return(
            this.state.isLoggedIn ?
            (<div>Welcome Ritik</div>) :
            (<div>Welcome Guest</div>)
            )

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Ritik</div>
        // } else{
        //     message=<div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // if(this.state.isLoggedIn){
        //     return <div>Welcome Ritik</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }


        // return (
        //     <div>
        //         <div>Welcome Ritik</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default userGreeting
