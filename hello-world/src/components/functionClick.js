import { func } from 'prop-types'
import React, { Component } from 'react'

function functionClick(){

    function clickHandler(){
        console.log("Clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default functionClick