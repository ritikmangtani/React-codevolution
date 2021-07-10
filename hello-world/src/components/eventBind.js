import React, { Component } from 'react'

class eventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
        // binding in class constructor

    }

    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
        console.log()
    }


    // clickHandler = ()=>{
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }
    // ^^ class property as arrow funct
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  // binding in render*/}
                {/* <button onClick={()=> this.clickHandler()}>Click</button>  // arrow function in render */}
                <button onClick={this.clickHandler}>Click</button> 
                {/* ^^binding in class constructor & class property as arrow funct */}
            </div>
        )
    }
}

export default eventBind
