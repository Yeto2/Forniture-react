import React from 'react'

function Newarrival(props) {
    return (
    <div className='card'>
        <div className='arrival-sec'>
            <img src={require(`../images/collection/${props.img}`)} />
            <div className='git'>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                <p>Add To Card</p>
                <span>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-image"></i>
                </span>
            </div>
        </div>
        <div className='arrival-text'>
            <p>{props.name}</p>
            <span>$ {props.price}</span>
        </div>
    </div>
    )
}

export default Newarrival