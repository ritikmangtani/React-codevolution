import React from 'react';

const filename = () => {
    // return(
    //     <div>
    //         <h1>Learing JSX</h1>
    //     </div>
    // )

return React.createElement('div', {id:'learningjsx', className : 'dummyClass'}, React.createElement('h1',null,'Learning JSX'))

    

}

export default filename