import React from 'react'

function Newarrival(props) {
    return (
    <div id="arrival" className='arrival-card col-md-3'>
        <div className='arrival-sec'>
            <img alt='new arrivals image' src={require(`../images/collection/${props.img}`)} />
            <div className='git'>
                <div className='addToCard'>
                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    <p>Add To Card</p>
                </div>
                <span>
                    <i className="fa-regular fa-heart"></i>
                    <i id='zoom' className="fa-regular fa-image"></i>
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