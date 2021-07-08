import React, { Component } from 'react'
class classClick extends Component {
    clickHandler(){
        console.log('Clicked')
    }
    render() {
        
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default classClick