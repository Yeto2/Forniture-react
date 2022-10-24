import React from 'react'
import c1 from '../images/clients/c1.png'
import c2 from '../images/clients/c2.png'
import c3 from '../images/clients/c3.png'
import c4 from '../images/clients/c4.png'
import c5 from '../images/clients/c5.png'


function Clients() {
    return (
    <div className='cont-clients container'>
        <img src={c1} />
        <img src={c2} />
        <img src={c3} />
        <img src={c4} />
        <img src={c5} />
    </div>
    )
}

export default Clients