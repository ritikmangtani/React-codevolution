 import React from 'react'
 import Person from './person'
 
 function nameList() {
    const names = ['Ramesh', 'Suresh','Umesh','Umesh']

    const persons = [
        {
            id:1,
            name:'Ramesh',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Suresh',
            age:55,
            skill:'Angular.js'
        },
        {
            id:3,
            name:'Kutta',
            age:66,
            skill:'Bark'
        },
        
    ]
     
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        
         <div>{nameList}</div>
     )
 }

 export default nameList
 